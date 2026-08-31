#!/usr/bin/env python3
"""
Bộ công cụ sinh mã SVG Prototype chuẩn Figma.
Hỗ trợ tạo các màn hình chuẩn iPhone 14 Pro Max (430x932) với các component UI có thể kéo thả 100% vào Figma.
Tuân thủ nghiêm ngặt rules/layout-and-typography-rules.md: Không dùng emoji màu mè, layout sắc nét.
"""

from __future__ import annotations

import argparse
import html
import json
import os
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional


# Bảng màu chuẩn dự án (HCI Design Tokens - Tinh tế, không sặc sỡ)
THEME = {
    "primary": "#0D766E",       # Xanh teal chủ đạo
    "primary_dark": "#0F4C45",  # Teal đậm
    "primary_light": "#F0FDFA", # Nền teal nhạt
    "primary_border": "#CCFBF1",# Viền teal mờ
    "accent_coral": "#E06236",  # Cam san hô
    "accent_amber": "#D97706",  # Hổ phách
    "accent_rose": "#BE123C",   # Đỏ cảnh báo dị ứng theo AGENTS.md
    "accent_rose_bg": "#FFF1F2",# Nền cảnh báo dị ứng
    "accent_rose_border": "#FECDD3",
    "bg_page": "#F8FAFC",       # Nền trang
    "bg_card": "#FFFFFF",       # Nền thẻ card
    "border_subtle": "#E2E8F0", # Viền phân cách mỏng
    "border_dashed": "#CBD5E1",
    "text_primary": "#0F172A",  # Chữ chính (Slate 900)
    "text_secondary": "#64748B",# Chữ phụ / nhãn (Slate 500)
    "text_muted": "#94A3B8",    # Chữ mờ / placeholder (Slate 400)
    "white": "#FFFFFF",
}

FONT_FAMILY = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
VIEWPORT_WIDTH = 430
VIEWPORT_HEIGHT = 932
HOME_INDICATOR_Y = 918


def validate_single_line(text: str, max_chars: int, role: str) -> None:
    """Chặn chuỗi có nguy cơ tràn; màn hình tùy chỉnh phải chủ động tách dòng."""
    if len(text) > max_chars:
        raise ValueError(
            f"{role} vượt {max_chars} ký tự; hãy rút gọn hoặc tách thành nhiều thẻ <text>."
        )


class FigmaSvgBuilder:
    """Builder sinh mã SVG tương thích 100% với Figma Vector Engine chuẩn iPhone 14 Pro Max (430x932)."""

    def __init__(self, width: int = VIEWPORT_WIDTH, height: int = VIEWPORT_HEIGHT, title: str = "Screen Frame"):
        if (width, height) != (VIEWPORT_WIDTH, VIEWPORT_HEIGHT):
            raise ValueError("Prototype mobile phải dùng viewport 430x932 theo layout rules.")
        self.width = width
        self.height = height
        self.title = title
        self.elements: List[str] = []
        self.current_y = 0
        self.card_count = 0
        self.layer_ids = set()

    def claim_layer_id(self, layer_id: str) -> str:
        """Đảm bảo Layer ID hợp lệ và duy nhất trong một Frame."""
        if not re.fullmatch(r"[A-Za-z][A-Za-z0-9_-]*", layer_id):
            raise ValueError(f"Layer ID không hợp lệ: {layer_id}")
        if layer_id in self.layer_ids:
            raise ValueError(f"Layer ID bị trùng trong Frame: {layer_id}")
        self.layer_ids.add(layer_id)
        return layer_id

    def add_background(self, bg_color: str = THEME["bg_page"], border_color: str = "#CBD5E1"):
        """Tạo khung viền iPhone 14 Pro Max với Dynamic Island"""
        self.claim_layer_id("Device_Background")
        self.claim_layer_id("Device_Border")
        self.claim_layer_id("Dynamic_Island")
        svg = f'''
  <!-- Device Outer Frame: {html.escape(self.title)} -->
  <rect id="Device_Background" width="{self.width}" height="{self.height}" rx="52" fill="{bg_color}"/>
  <rect id="Device_Border" x="1" y="1" width="{self.width - 2}" height="{self.height - 2}" rx="51" fill="none" stroke="{border_color}" stroke-width="2"/>
  
  <!-- Dynamic Island -->
  <rect id="Dynamic_Island" x="152" y="12" width="126" height="35" rx="17.5" fill="#0F172A"/>
'''
        self.elements.append(svg)

    def add_status_bar(self, time_text: str = "--:--"):
        """Tạo thanh Status Bar chuẩn iPhone 14 Pro Max không dùng emoji"""
        self.claim_layer_id("Status_Bar")
        validate_single_line(time_text, 8, "Status Time")
        svg = f'''
  <!-- Status Bar -->
  <g id="Status_Bar">
    <text x="42" y="35" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="14" font-weight="600">{html.escape(time_text)}</text>
    <text x="{self.width - 42}" y="35" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="12" font-weight="600" text-anchor="end">5G • 100%</text>
  </g>
'''
        self.elements.append(svg)
        self.current_y = 54

    def add_header(self, title: str, show_back: bool = True, state_badge: str = "", layer_id: str = "Header"):
        """Tạo Top Navigation Bar / Header"""
        self.claim_layer_id(layer_id)
        validate_single_line(title, 18 if state_badge else 28, "Screen Title")
        if state_badge:
            validate_single_line(state_badge, 16, "State Badge")
        y = self.current_y + 16
        back_btn = ""
        title_x = 24
        if show_back:
            title_x = 76
            back_btn = f'''
    <circle cx="42" cy="{y + 12}" r="20" fill="{THEME['bg_card']}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
    <text x="36" y="{y + 19}" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="20" font-weight="bold">‹</text>
'''
        badge_svg = ""
        if state_badge:
            badge_svg = f'''
    <rect x="{self.width - 180}" y="{y}" width="160" height="24" rx="6" fill="{THEME['primary']}"/>
    <text x="{self.width - 100}" y="{y + 16}" fill="{THEME['white']}" font-family="{FONT_FAMILY}" font-size="11" font-weight="700" text-anchor="middle">{html.escape(state_badge)}</text>
'''
        svg = f'''
  <!-- Header -->
  <g id="{html.escape(layer_id)}">
    {badge_svg}
    {back_btn}
    <text x="{title_x}" y="{y + 19}" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="19" font-weight="700">{html.escape(title)}</text>
    <line x1="0" y1="{y + 44}" x2="{self.width}" y2="{y + 44}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + 56

    def add_section_title(self, title: str, layer_id: str = ""):
        """Tiêu đề phân mục (Section Header)"""
        validate_single_line(title, 54, "Section Title")
        resolved_layer_id = layer_id or f"Section_Title_{len([item for item in self.layer_ids if item.startswith('Section_Title_')]) + 1:02d}"
        self.claim_layer_id(resolved_layer_id)
        y = self.current_y + 16
        svg = f'''
  <!-- Section Title -->
  <g id="{html.escape(resolved_layer_id)}">
    <text x="22" y="{y}" fill="{THEME['text_secondary']}" font-family="{FONT_FAMILY}" font-size="11" font-weight="800" letter-spacing="0.6">{html.escape(title.upper())}</text>
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + 8

    def add_card(
        self,
        title: str,
        subtitle: str = "",
        badge: str = "",
        details: List[str] = None,
        price: str = "",
        highlight: bool = False,
        height: int = 120,
        layer_id: str = "",
    ):
        """Tạo thẻ nội dung chuẩn chiều rộng 390px"""
        validate_single_line(title, 26 if badge else 36, "Card Title")
        if subtitle:
            validate_single_line(subtitle, 46, "Card Subtitle")
        if badge:
            validate_single_line(badge, 16, "Card Badge")
        if price:
            validate_single_line(price, 16, "Price")
        for detail in details or []:
            validate_single_line(detail, 46, "Card Detail")

        detail_count = len(details or [])
        last_content_baseline = 28
        if subtitle:
            last_content_baseline = 52
        if detail_count:
            detail_start = 78 if subtitle else 54
            last_content_baseline = detail_start + (detail_count - 1) * 19
        minimum_height = last_content_baseline + (46 if price else 18)
        if height < minimum_height:
            raise ValueError(
                f"Card height tối thiểu là {minimum_height}px cho title/subtitle/details/price hiện tại."
            )

        self.card_count += 1
        resolved_layer_id = layer_id or f"Card_{self.card_count:02d}"
        self.claim_layer_id(resolved_layer_id)
        y = self.current_y + 8
        card_w = self.width - 40
        stroke_color = THEME["primary"] if highlight else THEME["border_subtle"]
        stroke_width = 2 if highlight else 1
        bg = THEME["primary_light"] if highlight else THEME["bg_card"]

        badge_svg = ""
        if badge:
            badge_svg = f'''
    <rect x="{self.width - 20 - 100}" y="{y + 12}" width="88" height="22" rx="11" fill="{THEME['primary_border']}"/>
    <text x="{self.width - 20 - 56}" y="{y + 27}" fill="{THEME['primary']}" font-family="{FONT_FAMILY}" font-size="11" font-weight="700" text-anchor="middle">{html.escape(badge)}</text>
'''

        details_svg = []
        dy = y + (78 if subtitle else 54)
        if details:
            for d in details:
                details_svg.append(
                    f'<text x="38" y="{dy}" fill="{THEME["text_secondary"]}" font-family="{FONT_FAMILY}" font-size="12">{html.escape(d)}</text>'
                )
                dy += 19

        price_svg = ""
        if price:
            price_svg = f'''
    <line x1="38" y1="{y + height - 38}" x2="{self.width - 38}" y2="{y + height - 38}" stroke="{THEME['border_subtle']}" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="38" y="{y + height - 16}" fill="{THEME['text_secondary']}" font-family="{FONT_FAMILY}" font-size="12">Chi phí niêm yết:</text>
    <text x="{self.width - 38}" y="{y + height - 16}" fill="{THEME['primary']}" font-family="{FONT_FAMILY}" font-size="16" font-weight="800" text-anchor="end">{html.escape(price)}</text>
'''

        svg = f'''
  <!-- Card: {html.escape(title)} -->
  <g id="{html.escape(resolved_layer_id)}">
    <rect x="20" y="{y}" width="{card_w}" height="{height}" rx="16" fill="{bg}" stroke="{stroke_color}" stroke-width="{stroke_width}"/>
    <text x="38" y="{y + 28}" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="15" font-weight="700">{html.escape(title)}</text>
    {badge_svg}
    {f'<text x="38" y="{y + 52}" fill="{THEME["text_secondary"]}" font-family="{FONT_FAMILY}" font-size="12">{html.escape(subtitle)}</text>' if subtitle else ''}
    {''.join(details_svg)}
    {price_svg}
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + height + 8

    def add_stepper(self, steps: List[str], current_index: int = 1, layer_id: str = "Stepper"):
        """Tạo Timeline Stepper 4 mốc tiến độ chuẩn iPhone 14 Pro Max"""
        if not steps or not 0 <= current_index < len(steps):
            raise ValueError("Stepper cần danh sách bước và current_index hợp lệ.")
        self.claim_layer_id(layer_id)
        for step in steps:
            validate_single_line(step, 12, "Stepper Label")
        y = self.current_y + 12
        card_w = self.width - 40
        height = 84
        num_steps = len(steps)
        step_gap = (card_w - 60) / max(num_steps - 1, 1)

        step_nodes = []
        for i, step_name in enumerate(steps):
            cx = 50 + (i * step_gap)
            cy = y + 30
            is_done = i < current_index
            is_current = i == current_index
            
            circle_color = THEME["primary"] if (is_done or is_current) else THEME["border_subtle"]
            text_color = THEME["primary"] if is_current else (THEME["text_primary"] if is_done else THEME["text_muted"])
            
            step_nodes.append(f'''
    <circle cx="{cx}" cy="{cy}" r="12" fill="{circle_color}"/>
    <text x="{cx}" y="{cy + 4}" fill="{THEME['white']}" font-family="{FONT_FAMILY}" font-size="10" font-weight="800" text-anchor="middle">{"✓" if is_done else str(i+1)}</text>
    <text x="{cx}" y="{y + 62}" fill="{text_color}" font-family="{FONT_FAMILY}" font-size="11" font-weight="{"700" if is_current else "500"}" text-anchor="middle">{html.escape(step_name)}</text>
''')

        line_start = 50
        line_end = 50 + (num_steps - 1) * step_gap
        line_svg = f'<line x1="{line_start}" y1="{y + 30}" x2="{line_end}" y2="{y + 30}" stroke="{THEME["border_subtle"]}" stroke-width="2"/>'

        svg = f'''
  <!-- Progress Stepper -->
  <g id="{html.escape(layer_id)}">
    <rect x="20" y="{y}" width="{card_w}" height="{height}" rx="16" fill="{THEME['bg_card']}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
    {line_svg}
    {''.join(step_nodes)}
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + height + 10

    def add_time_slots(self, slots: List[str], selected_idx: int = 0, layer_id: str = "Time_Slots"):
        """Khung chọn giờ (Time Slots Grid)"""
        if not slots or not 0 <= selected_idx < len(slots):
            raise ValueError("Time Slots cần danh sách giờ và selected_idx hợp lệ.")
        self.claim_layer_id(layer_id)
        for slot in slots:
            validate_single_line(slot, 16, "Time Slot")
        y = self.current_y + 8
        card_w = self.width - 40
        cols = len(slots)
        slot_w = (card_w - (cols - 1) * 10) / cols

        nodes = []
        for i, s in enumerate(slots):
            sx = 20 + i * (slot_w + 10)
            is_sel = i == selected_idx
            bg = THEME["primary_light"] if is_sel else THEME["bg_card"]
            fg = THEME["primary"] if is_sel else THEME["text_primary"]
            border = THEME["primary"] if is_sel else THEME["border_subtle"]
            bw = 2 if is_sel else 1
            nodes.append(f'''
    <rect x="{sx}" y="{y}" width="{slot_w}" height="46" rx="10" fill="{bg}" stroke="{border}" stroke-width="{bw}"/>
    <text x="{sx + slot_w/2}" y="{y + 28}" fill="{fg}" font-family="{FONT_FAMILY}" font-size="12" font-weight="{"700" if is_sel else "500"}" text-anchor="middle">{html.escape(s)}</text>
''')

        svg = f'''
  <!-- Time Slots -->
  <g id="{html.escape(layer_id)}">
    {''.join(nodes)}
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + 54

    def add_button(self, text: str, y_pos: Optional[int] = None, variant: str = "primary", layer_id: str = "Button_CTA"):
        """Tạo nút bấm chính (Button CTA) chuẩn ngón tay cái"""
        if variant not in {"primary", "secondary"}:
            raise ValueError("Button variant chỉ nhận primary hoặc secondary.")
        self.claim_layer_id(layer_id)
        validate_single_line(text, 36, "Button Label")
        y = y_pos if y_pos is not None else (self.height - 188)
        if y < self.current_y + 12:
            raise ValueError("CTA va chạm nội dung; cần điều chỉnh layout hoặc y_pos.")
        if y + 56 > self.height - 132:
            raise ValueError("CTA vượt vùng nội dung an toàn hoặc đè vùng Bottom Navigation.")
        bg = THEME["primary"] if variant == "primary" else THEME["bg_card"]
        fg = THEME["white"] if variant == "primary" else THEME["primary"]
        border = THEME["primary"] if variant != "primary" else "none"

        svg = f'''
  <!-- Primary Button -->
  <g id="{html.escape(layer_id)}">
    <rect x="20" y="{y}" width="{self.width - 40}" height="56" rx="16" fill="{bg}" stroke="{border}" stroke-width="1.5"/>
    <text x="{self.width / 2}" y="{y + 35}" fill="{fg}" font-family="{FONT_FAMILY}" font-size="16" font-weight="700" text-anchor="middle">{html.escape(text)}</text>
  </g>
'''
        self.elements.append(svg)

    def add_bottom_nav(self, items: List[Dict[str, str]], active_idx: int = 0, layer_id: str = "Bottom_Navigation"):
        """Thanh điều hướng dưới đáy (Bottom Navigation Bar) kèm Home Indicator"""
        if not items or not 0 <= active_idx < len(items):
            raise ValueError("Bottom Navigation cần items và active_idx hợp lệ.")
        for item in items:
            validate_single_line(item.get("label", ""), 12, "Navigation Label")
        self.claim_layer_id(layer_id)
        self.claim_layer_id("Home_Indicator")
        y = self.height - 112
        item_w = self.width / len(items)
        nodes = []
        for i, item in enumerate(items):
            ix = i * item_w + item_w / 2
            is_act = i == active_idx
            fg = THEME["primary"] if is_act else THEME["text_secondary"]
            dot_svg = f'<circle cx="{ix}" cy="{y + 54}" r="3" fill="{THEME["primary"]}"/>' if is_act else ''
            nodes.append(f'''
    <text x="{ix}" y="{y + 34}" fill="{fg}" font-family="{FONT_FAMILY}" font-size="12" font-weight="{"800" if is_act else "600"}" text-anchor="middle">{html.escape(item.get('label', ''))}</text>
    {dot_svg}
''')

        svg = f'''
  <!-- Bottom Navigation -->
  <g id="{html.escape(layer_id)}">
    <rect x="0" y="{y}" width="{self.width}" height="112" fill="{THEME['bg_card']}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
    {''.join(nodes)}
    <!-- Home Indicator -->
    <rect id="Home_Indicator" x="145" y="{HOME_INDICATOR_Y}" width="140" height="5" rx="2.5" fill="#0F172A"/>
  </g>
'''
        self.elements.append(svg)

    def build(self) -> str:
        """Xuất toàn bộ mã XML SVG hoàn chỉnh"""
        if not any('id="Home_Indicator"' in element for element in self.elements):
            self.claim_layer_id("Home_Indicator")
            self.elements.append(
                f'<rect id="Home_Indicator" x="145" y="{HOME_INDICATOR_Y}" width="140" height="5" rx="2.5" fill="#0F172A"/>'
            )
        body = "\n".join(self.elements)
        return f'''<svg width="{self.width}" height="{self.height}" viewBox="0 0 {self.width} {self.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
{body}
</svg>'''


def validate_prototype_output_path(output_path: str) -> Path:
    """Chỉ cho phép SVG trong prototype/<persona-id>/<goal-id>/."""
    root = (Path.cwd() / "deliverables" / "02-interaction-design" / "prototype").resolve()
    target = Path(output_path).resolve()
    try:
        relative = target.relative_to(root)
    except ValueError as exc:
        raise ValueError(f"Output phải nằm trong {root}") from exc
    filename_ok = bool(re.fullmatch(r"\d{2}_[a-z0-9][a-z0-9_-]*\.svg", target.name))
    if len(relative.parts) != 3 or not filename_ok:
        raise ValueError(
            "Output phải có dạng prototype/<persona-id>/<goal-id>/<nn_screen-name>.svg"
        )
    return target


def create_sample_screen(screen_type: str, output_path: str):
    """Tạo mẫu các loại màn hình khác nhau chuẩn iPhone 14 Pro Max"""
    target_path = validate_prototype_output_path(output_path)
    builder = FigmaSvgBuilder(VIEWPORT_WIDTH, VIEWPORT_HEIGHT, title=f"Screen_{screen_type}")
    builder.add_background()
    builder.add_status_bar()

    if screen_type == "booking":
        builder.add_header("Đặt lịch chăm sóc", show_back=True)
        builder.add_section_title("Hồ sơ đã chọn")
        builder.add_card("Tên thú cưng", subtitle="Thông tin lấy từ Scenario", badge="Hồ sơ", height=84, layer_id="Pet_Profile_Card")
        builder.add_section_title("Chọn dịch vụ")
        builder.add_card(
            title="Dịch vụ từ Scenario",
            subtitle="Không dùng dữ liệu mẫu làm nội dung thật",
            badge="ĐÃ CHỌN",
            highlight=True,
            height=112,
            layer_id="Service_Card",
        )
        builder.add_section_title("Khung giờ trống")
        builder.add_time_slots(["Khung A", "Khung B", "Khung C"], selected_idx=0)
        builder.add_button("Xác nhận đặt lịch")

    elif screen_type == "tracking":
        builder.add_header("Theo dõi tiến độ", show_back=True)
        builder.add_stepper(["Đã nhận", "Chăm sóc", "Hoàn tất", "Chờ đón"], current_index=1)
        builder.add_section_title("Tình trạng hiện tại")
        builder.add_card(
            title="Trạng thái từ Scenario",
            subtitle="Cập nhật UI theo Storyboard",
            details=["Nội dung phải có nguồn truy vết"],
            height=120,
            highlight=True,
            layer_id="Current_Status_Card",
        )
        builder.add_section_title("Ghi chú đặc biệt")
        builder.add_card("Yêu cầu đặc biệt", subtitle="Chỉ hiển thị dữ liệu có nguồn", height=84, layer_id="Special_Request_Card")
        builder.add_button("Liên hệ cơ sở ngay", variant="secondary")

    elif screen_type == "profile":
        builder.add_header("Hồ sơ thú cưng", show_back=False)
        builder.add_card("Tên thú cưng", subtitle="Thông tin lấy từ Persona", badge="HỒ SƠ", height=84, layer_id="Pet_Profile_Card")
        builder.add_section_title("Sức khỏe và yêu cầu")
        builder.add_card("Thông tin từ Persona", subtitle="Không tự điền dữ liệu còn thiếu", height=84, layer_id="Health_Info_Card")
        builder.add_bottom_nav([
            {"label": "Trang chủ"},
            {"label": "Đặt lịch"},
            {"label": "Tiến độ"},
            {"label": "Hồ sơ"},
        ], active_idx=3)

    svg_content = builder.build()
    target_path.parent.mkdir(parents=True, exist_ok=True)
    target_path.write_text(svg_content, encoding="utf-8")
    print(f"Generated SVG prototype successfully: {target_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Sinh file SVG Prototype kéo thả Figma chuẩn iPhone 14 Pro Max")
    parser.add_argument("--type", choices=["booking", "tracking", "profile"], default="booking", help="Loại màn hình mẫu")
    parser.add_argument("--out", required=True, help="Đường dẫn SVG đích trong deliverables/02-interaction-design/")
    args = parser.parse_args()
    create_sample_screen(args.type, args.out)
