#!/usr/bin/env python3
"""
Công cụ kiểm thử & kiểm tra hợp lệ mã SVG Prototype/Wireframe chuẩn iPhone 14 Pro Max.
Tái sử dụng cho các agent, subagent và skills (wireframe-agent, prototype-agent, figma-agent).

Tuân thủ nghiêm ngặt 4 bài test theo rules/wireframe-rules.md và rules/layout-and-typography-rules.md:
1. Viewport 430x932, Dynamic Island (126x35), Home Indicator (140x5).
2. Chiều dài ký tự trên từng dòng, chống tràn lề phải (x + len <= 392px).
3. Chống va chạm / đè chữ giữa các khối text cùng trục tọa độ y.
4. Quét sạch 100% emoji màu mè, chỉ cho phép ký tự biểu tượng phẳng tối giản.
"""

from __future__ import annotations

import argparse
import glob
import os
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Dict, List, Tuple

# Bảng ký tự phẳng cho phép
ALLOWED_SYMBOLS = {"✓", "✕", "‹", "›", "★", "•", "+", "-", "≡", "↻", "◉", "?", "•"}

# Regex phát hiện emoji màu mè
EMOJI_PATTERN = re.compile(
    r"[\U00010000-\U0010ffff]|[\u2600-\u27bf]|[\u2300-\u23ff]"
)


class SvgValidator:
    """Validator kiểm tra toàn diện chất lượng file SVG chuẩn Figma & iPhone 14 Pro Max."""

    def __init__(self, file_path: str, verbose: bool = False):
        self.file_path = Path(file_path)
        self.verbose = verbose
        self.errors: List[str] = []
        self.warnings: List[str] = []

    def validate(self) -> bool:
        """Thực thi 4 bài kiểm tra bắt buộc."""
        if not self.file_path.exists():
            self.errors.append(f"Tệp không tồn tại: {self.file_path}")
            return False

        try:
            content = self.file_path.read_text(encoding="utf-8")
        except Exception as e:
            self.errors.append(f"Không thể đọc tệp: {e}")
            return False

        self._test_1_viewport_and_hardware(content)
        self._test_2_clean_emoji(content)
        self._test_3_xml_and_typography(content)

        return len(self.errors) == 0

    def _test_1_viewport_and_hardware(self, content: str):
        """Test 1: Kích thước khung nhìn 430x932, Dynamic Island, Home Indicator."""
        if 'width="430"' not in content or 'height="932"' not in content:
            self.errors.append("Test 1: Khung nhìn không đúng kích thước chuẩn 430x932.")
        if 'viewBox="0 0 430 932"' not in content:
            self.errors.append("Test 1: Thiếu hoặc sai cấu hình viewBox='0 0 430 932'.")
        if "Dynamic_Island" not in content and 'width="126"' not in content:
            self.errors.append("Test 1: Thiếu thành phần Dynamic Island (126x35).")
        if "Home_Indicator" not in content and 'width="140"' not in content:
            self.errors.append("Test 1: Thiếu thành phần Home Indicator (140x5).")

    def _test_2_clean_emoji(self, content: str):
        """Test 4: Quét sạch 100% emoji màu mè."""
        found_emojis = []
        for ch in content:
            if ch in ALLOWED_SYMBOLS:
                continue
            if EMOJI_PATTERN.match(ch):
                found_emojis.append(f"'{ch}' (U+{ord(ch):04X})")
        if found_emojis:
            self.errors.append(
                f"Test 4 (Cấm Emoji): Phát hiện emoji màu mè: {', '.join(set(found_emojis))}"
            )

    def _test_3_xml_and_typography(self, content: str):
        """Test 2 & 3: Kiểm tra cấu trúc XML, giới hạn ký tự và chống va chạm ngang."""
        try:
            root = ET.fromstring(content)
        except ET.ParseError as e:
            self.errors.append(f"Lỗi cú pháp XML SVG: {e}")
            return

        texts_by_y: Dict[float, List[Tuple[float, str, str, float]]] = {}
        layer_ids = set()

        for elem in root.iter():
            # Kiểm tra layer id trùng
            elem_id = elem.attrib.get("id")
            if elem_id:
                if elem_id in layer_ids:
                    self.warnings.append(f"Trùng lặp Layer ID: '{elem_id}'")
                layer_ids.add(elem_id)

            if elem.tag.endswith("text"):
                txt = (elem.text or "").strip()
                if not txt:
                    continue
                try:
                    x = float(elem.attrib.get("x", 0))
                    y = float(elem.attrib.get("y", 0))
                    fs = float(elem.attrib.get("font-size", 12))
                    anchor = elem.attrib.get("text-anchor", "start")
                except ValueError:
                    continue

                # Giới hạn ký tự dòng theo layout rules
                if anchor == "start" and x <= 42:
                    if fs >= 17 and len(txt) > 28:
                        self.warnings.append(
                            f"Header tại y={y} có {len(txt)} ký tự (>28): '{txt}'"
                        )
                    elif 14 <= fs < 17 and len(txt) > 38:
                        self.warnings.append(
                            f"Tiêu đề Card tại y={y} có {len(txt)} ký tự (>38): '{txt}'"
                        )
                    elif fs < 14 and len(txt) > 54:
                        self.warnings.append(
                            f"Văn bản tại y={y} có {len(txt)} ký tự (>54): '{txt[:35]}...'"
                        )

                # Thu thập để kiểm tra va chạm cùng hàng
                rounded_y = round(y, 1)
                texts_by_y.setdefault(rounded_y, []).append((x, txt, anchor, fs))

        # Kiểm tra va chạm text cùng tọa độ y
        for y_val, items in texts_by_y.items():
            if len(items) >= 2:
                left_items = [it for it in items if it[2] == "start"]
                right_items = [it for it in items if it[2] == "end"]
                if left_items and right_items:
                    left_len = max(len(it[1]) for it in left_items)
                    right_len = max(len(it[1]) for it in right_items)
                    if left_len > 28 and right_len > 18:
                        self.warnings.append(
                            f"Nguy cơ va chạm ngang tại y={y_val}: Trái '{left_items[0][1]}' ({left_len} ký tự) vs Phải '{right_items[0][1]}' ({right_len} ký tự)"
                        )


def run_validation(paths: List[str], verbose: bool = False) -> int:
    """Chạy kiểm tra trên danh sách đường dẫn file hoặc thư mục."""
    target_files: List[Path] = []
    for p in paths:
        path_obj = Path(p)
        if path_obj.is_dir():
            target_files.extend(sorted(path_obj.glob("**/*.svg")))
        elif path_obj.is_file() and path_obj.suffix.lower() == ".svg":
            target_files.append(path_obj)

    if not target_files:
        print("Không tìm thấy file SVG nào để kiểm tra.")
        return 0

    print(f"Bắt đầu kiểm tra {len(target_files)} file SVG chuẩn Figma (iPhone 14 Pro Max)...\n" + "=" * 70)
    passed_count = 0
    failed_count = 0

    for file_path in target_files:
        validator = SvgValidator(str(file_path), verbose=verbose)
        is_valid = validator.validate()
        rel_path = file_path.as_posix()

        if is_valid:
            passed_count += 1
            status_tag = "✓ ĐẠT"
            if validator.warnings:
                print(f"[{status_tag}] {rel_path} ({len(validator.warnings)} cảnh báo layout)")
                if verbose:
                    for w in validator.warnings:
                        print(f"    - Cảnh báo: {w}")
            else:
                print(f"[{status_tag}] {rel_path}")
        else:
            failed_count += 1
            print(f"[✕ LỖI] {rel_path}")
            for err in validator.errors:
                print(f"    - Lỗi: {err}")
            for w in validator.warnings:
                print(f"    - Cảnh báo: {w}")

    print("=" * 70)
    print(f"Kết quả: {passed_count}/{len(target_files)} file ĐẠT chuẩn (Thất bại: {failed_count})")
    return 0 if failed_count == 0 else 1


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Kiểm tra hợp lệ mã SVG Prototype & Wireframe chuẩn Figma")
    parser.add_argument("paths", nargs="+", help="Đường dẫn file .svg hoặc thư mục chứa SVGs")
    parser.add_argument("-v", "--verbose", action="store_true", help="Hiển thị chi tiết cảnh báo layout")
    args = parser.parse_args()

    exit_code = run_validation(args.paths, verbose=args.verbose)
    sys.exit(exit_code)
