#!/usr/bin/env python3
"""
Bộ công cụ sinh mã SVG Wireframe / Mockup chuẩn Figma.
Hỗ trợ tạo các màn hình chuẩn Mobile (375x812), Tablet, Desktop với các component UI có thể kéo thả 100% vào Figma.
"""

from __future__ import annotations

import argparse
import html
import json
import os
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional


# Bảng màu chuẩn dự án (HCI Design Tokens)
THEME = {
    "primary": "#0D766E",       # Xanh teal chủ đạo
    "primary_dark": "#0F4C45",  # Teal đậm
    "primary_light": "#F0FDFA", # Nền teal nhạt
    "primary_border": "#CCFBF1",# Viền teal mờ
    "accent_coral": "#E06236",  # Cam san hô
    "accent_amber": "#D97706",  # Hổ phách
    "accent_danger": "#BE123C", # Đỏ cảnh báo dị ứng
    "bg_page": "#F8FAFC",       # Nền trang
    "bg_card": "#FFFFFF",       # Nền thẻ card
    "border_subtle": "#E2E8F0", # Viền phân cách
    "border_dashed": "#CBD5E1",
    "text_primary": "#0F172A",  # Chữ chính (đen đậm)
    "text_secondary": "#64748B",# Chữ phụ / nhãn
    "text_muted": "#94A3B8",    # Chữ mờ / placeholder
    "white": "#FFFFFF",
}

FONT_FAMILY = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'


class FigmaSvgBuilder:
    """Builder sinh mã SVG tương thích 100% với Figma Vector Engine."""

    def __init__(self, width: int = 375, height: int = 812, title: str = "Screen Frame"):
        self.width = width
        self.height = height
        self.title = title
        self.elements: List[str] = []
        self.current_y = 0

    def add_background(self, bg_color: str = THEME["bg_page"], border_color: str = THEME["border_subtle"]):
        """Tạo nền cho toàn bộ Frame"""
        svg = f'''
  <!-- Background Frame: {html.escape(self.title)} -->
  <rect id="Frame_Background" width="{self.width}" height="{self.height}" rx="28" fill="{bg_color}"/>
  <rect id="Frame_Border" x="1" y="1" width="{self.width - 2}" height="{self.height - 2}" rx="27" fill="none" stroke="{border_color}" stroke-width="2"/>
'''
        self.elements.append(svg)

    def add_status_bar(self, time_text: str = "09:41"):
        """Tạo thanh Status Bar chuẩn Mobile"""
        svg = f'''
  <!-- Status Bar -->
  <g id="Status_Bar">
    <text x="24" y="32" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="14" font-weight="600">{time_text}</text>
    <text x="{self.width - 65}" y="32" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="12">📶 5G 🔋</text>
  </g>
'''
        self.elements.append(svg)
        self.current_y = 44

    def add_header(self, title: str, show_back: bool = True, action_icon: str = ""):
        """Tạo Top Navigation Bar / Header"""
        y = self.current_y + 12
        back_btn = ""
        title_x = 24
        if show_back:
            title_x = 68
            back_btn = f'''
    <circle cx="40" cy="{y + 14}" r="18" fill="{THEME['bg_card']}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
    <text x="34" y="{y + 20}" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="18" font-weight="bold">‹</text>
'''
        action_btn = ""
        if action_icon:
            action_btn = f'''
    <circle cx="{self.width - 40}" cy="{y + 14}" r="18" fill="{THEME['bg_card']}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
    <text x="{self.width - 46}" y="{y + 20}" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="14">{html.escape(action_icon)}</text>
'''
        svg = f'''
  <!-- Header -->
  <g id="Header">
    {back_btn}
    <text x="{title_x}" y="{y + 20}" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="18" font-weight="700">{html.escape(title)}</text>
    {action_btn}
    <line x1="0" y1="{y + 44}" x2="{self.width}" y2="{y + 44}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + 54

    def add_section_title(self, title: str):
        """Tiêu đề phân mục (Section Header)"""
        y = self.current_y + 16
        svg = f'''
  <!-- Section Title -->
  <text x="20" y="{y}" fill="{THEME['text_secondary']}" font-family="{FONT_FAMILY}" font-size="12" font-weight="700" letter-spacing="0.6">{html.escape(title.upper())}</text>
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
        height: int = 110,
    ):
        """Tạo thẻ nội dung / thẻ dịch vụ / thông tin"""
        y = self.current_y + 10
        card_w = self.width - 40
        stroke_color = THEME["primary"] if highlight else THEME["border_subtle"]
        stroke_width = 2 if highlight else 1
        bg = THEME["primary_light"] if highlight else THEME["bg_card"]

        badge_svg = ""
        if badge:
            badge_svg = f'''
    <rect x="{self.width - 20 - 84}" y="{y + 12}" width="72" height="22" rx="11" fill="{THEME['primary_border']}"/>
    <text x="{self.width - 20 - 48}" y="{y + 27}" fill="{THEME['primary']}" font-family="{FONT_FAMILY}" font-size="11" font-weight="700" text-anchor="middle">{html.escape(badge)}</text>
'''

        details_svg = []
        dy = y + 56
        if details:
            for d in details:
                details_svg.append(
                    f'<text x="36" y="{dy}" fill="{THEME["text_secondary"]}" font-family="{FONT_FAMILY}" font-size="12">{html.escape(d)}</text>'
                )
                dy += 18

        price_svg = ""
        if price:
            price_svg = f'''
    <line x1="36" y1="{y + height - 38}" x2="{self.width - 36}" y2="{y + height - 38}" stroke="{THEME['border_subtle']}" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="36" y="{y + height - 16}" fill="{THEME['primary']}" font-family="{FONT_FAMILY}" font-size="16" font-weight="800">{html.escape(price)}</text>
'''

        svg = f'''
  <!-- Card: {html.escape(title)} -->
  <g id="Card_{html.escape(title[:10])}">
    <rect x="20" y="{y}" width="{card_w}" height="{height}" rx="14" fill="{bg}" stroke="{stroke_color}" stroke-width="{stroke_width}"/>
    <text x="36" y="{y + 28}" fill="{THEME['text_primary']}" font-family="{FONT_FAMILY}" font-size="15" font-weight="700">{html.escape(title)}</text>
    {badge_svg}
    {f'<text x="36" y="{y + 46}" fill="{THEME["text_secondary"]}" font-family="{FONT_FAMILY}" font-size="12">{html.escape(subtitle)}</text>' if subtitle else ''}
    {''.join(details_svg)}
    {price_svg}
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + height + 6

    def add_stepper(self, steps: List[str], current_index: int = 1):
        """Tạo Timeline Stepper 4 mốc tiến độ theo chuẩn dự án"""
        y = self.current_y + 12
        card_w = self.width - 40
        height = 76
        num_steps = len(steps)
        step_gap = (card_w - 40) / max(num_steps - 1, 1)

        step_nodes = []
        for i, step_name in enumerate(steps):
            cx = 40 + (i * step_gap)
            cy = y + 26
            is_done = i < current_index
            is_current = i == current_index
            
            circle_color = THEME["primary"] if (is_done or is_current) else THEME["border_subtle"]
            text_color = THEME["primary"] if is_current else (THEME["text_primary"] if is_done else THEME["text_muted"])
            
            # Icon or dot
            step_nodes.append(f'''
    <circle cx="{cx}" cy="{cy}" r="10" fill="{circle_color}"/>
    <text x="{cx}" y="{cy + 4}" fill="{THEME['white']}" font-family="{FONT_FAMILY}" font-size="10" font-weight="700" text-anchor="middle">{"✓" if is_done else str(i+1)}</text>
    <text x="{cx}" y="{y + 54}" fill="{text_color}" font-family="{FONT_FAMILY}" font-size="10" font-weight="600" text-anchor="middle">{html.escape(step_name)}</text>
''')

        # Line connecting steps
        line_start = 40
        line_end = 40 + (num_steps - 1) * step_gap
        line_svg = f'<line x1="{line_start}" y1="{y + 26}" x2="{line_end}" y2="{y + 26}" stroke="{THEME["border_subtle"]}" stroke-width="2"/>'

        svg = f'''
  <!-- Progress Stepper -->
  <g id="Stepper">
    <rect x="20" y="{y}" width="{card_w}" height="{height}" rx="12" fill="{THEME['bg_card']}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
    {line_svg}
    {''.join(step_nodes)}
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + height + 10

    def add_time_slots(self, slots: List[str], selected_idx: int = 0):
        """Khung chọn giờ (Time Slots Grid)"""
        y = self.current_y + 8
        card_w = self.width - 40
        cols = len(slots)
        slot_w = (card_w - (cols - 1) * 8) / cols

        nodes = []
        for i, s in enumerate(slots):
            sx = 20 + i * (slot_w + 8)
            is_sel = i == selected_idx
            bg = THEME["primary"] if is_sel else THEME["bg_card"]
            fg = THEME["white"] if is_sel else THEME["text_primary"]
            border = THEME["primary"] if is_sel else THEME["border_subtle"]
            nodes.append(f'''
    <rect x="{sx}" y="{y}" width="{slot_w}" height="38" rx="8" fill="{bg}" stroke="{border}" stroke-width="1"/>
    <text x="{sx + slot_w/2}" y="{y + 23}" fill="{fg}" font-family="{FONT_FAMILY}" font-size="11" font-weight="600" text-anchor="middle">{html.escape(s)}</text>
''')

        svg = f'''
  <!-- Time Slots -->
  <g id="Time_Slots">
    {''.join(nodes)}
  </g>
'''
        self.elements.append(svg)
        self.current_y = y + 46

    def add_button(self, text: str, y_pos: Optional[int] = None, variant: str = "primary"):
        """Tạo nút bấm chính (Button CTA)"""
        y = y_pos if y_pos is not None else (self.height - 76)
        bg = THEME["primary"] if variant == "primary" else THEME["bg_card"]
        fg = THEME["white"] if variant == "primary" else THEME["primary"]
        border = THEME["primary"] if variant != "primary" else "none"

        svg = f'''
  <!-- Primary Button -->
  <g id="Button_CTA">
    <rect x="20" y="{y}" width="{self.width - 40}" height="48" rx="10" fill="{bg}" stroke="{border}" stroke-width="1.5"/>
    <text x="{self.width / 2}" y="{y + 29}" fill="{fg}" font-family="{FONT_FAMILY}" font-size="15" font-weight="700" text-anchor="middle">{html.escape(text)}</text>
  </g>
'''
        self.elements.append(svg)

    def add_bottom_nav(self, items: List[Dict[str, str]], active_idx: int = 0):
        """Thanh điều hướng dưới đáy (Bottom Navigation Bar)"""
        y = self.height - 64
        item_w = self.width / len(items)
        nodes = []
        for i, item in enumerate(items):
            ix = i * item_w + item_w / 2
            is_act = i == active_idx
            fg = THEME["primary"] if is_act else THEME["text_secondary"]
            nodes.append(f'''
    <text x="{ix}" y="{y + 24}" fill="{fg}" font-family="{FONT_FAMILY}" font-size="16" text-anchor="middle">{item.get('icon', '●')}</text>
    <text x="{ix}" y="{y + 44}" fill="{fg}" font-family="{FONT_FAMILY}" font-size="10" font-weight="{"700" if is_act else "500"}" text-anchor="middle">{html.escape(item.get('label', ''))}</text>
''')

        svg = f'''
  <!-- Bottom Navigation -->
  <g id="Bottom_Navigation">
    <rect x="0" y="{y}" width="{self.width}" height="64" fill="{THEME['bg_card']}" stroke="{THEME['border_subtle']}" stroke-width="1"/>
    {''.join(nodes)}
  </g>
'''
        self.elements.append(svg)

    def build(self) -> str:
        """Xuất toàn bộ mã XML SVG hoàn chỉnh"""
        body = "\n".join(self.elements)
        return f'''<svg width="{self.width}" height="{self.height}" viewBox="0 0 {self.width} {self.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
{body}
</svg>'''


def create_sample_screen(screen_type: str, output_path: str):
    """Tạo mẫu các loại màn hình khác nhau"""
    builder = FigmaSvgBuilder(375, 812, title=f"Screen_{screen_type}")
    builder.add_background()
    builder.add_status_bar()

    if screen_type == "booking":
        builder.add_header("Đặt lịch chăm sóc", show_back=True)
        builder.add_section_title("Thông tin thú cưng")
        builder.add_card("Bông (Poodle Trắng)", subtitle="4.5 kg • Tiền sử dị ứng xà phòng thơm", badge="Hồ sơ", height=72)
        builder.add_section_title("Chọn gói dịch vụ")
        builder.add_card(
            title="Combo Tắm & Cắt Tỉa",
            subtitle="Vệ sinh tai, cắt móng, tắm thảo dược khử mùi",
            badge="Phổ biến",
            price="250.000đ",
            highlight=True,
            height=130,
        )
        builder.add_section_title("Khung giờ trống")
        builder.add_time_slots(["09:00 - 10:00", "10:30 - 11:30", "14:00 - 15:00"], selected_idx=0)
        builder.add_button("Xác nhận đặt lịch")

    elif screen_type == "tracking":
        builder.add_header("Theo dõi tiến độ", show_back=True)
        builder.add_stepper(["Đã nhận", "Chăm sóc", "Hoàn tất", "Chờ đón"], current_index=1)
        builder.add_section_title("Tình trạng hiện tại")
        builder.add_card(
            title="Đang tắm thảo dược dịu nhẹ",
            subtitle="Kỹ thuật viên: Nguyễn Văn A",
            details=["• Đã kiểm tra da: không trầy xước", "• Đang dùng dầu tắm đặc trị da nhạy cảm"],
            height=110,
            highlight=True,
        )
        builder.add_section_title("Ghi chú đặc biệt")
        builder.add_card("Dặn dò từ chủ nuôi", subtitle="Tránh xịt nước trực tiếp vào tai bé", height=70)
        builder.add_button("Liên hệ cơ sở ngay", variant="secondary")

    elif screen_type == "profile":
        builder.add_header("Hồ sơ thú cưng", show_back=False)
        builder.add_card("Bông (Poodle)", subtitle="Tuổi: 2 tuổi • Cân nặng: 4.5kg", badge="Đã tiêm phòng", height=80)
        builder.add_section_title("Tiền sử sức khỏe & Dị ứng")
        builder.add_card("Dị ứng hương liệu nhân tạo", subtitle="Ghi chú: Luôn dùng sữa tắm hữu cơ trà xanh", height=74)
        builder.add_bottom_nav([
            {"label": "Trang chủ", "icon": "🏠"},
            {"label": "Đặt lịch", "icon": "📅"},
            {"label": "Theo dõi", "icon": "⏱"},
            {"label": "Hồ sơ", "icon": "👤"},
        ], active_idx=3)

    svg_content = builder.build()
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(svg_content, encoding="utf-8")
    print(f"Generated SVG wireframe successfully: {output_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Sinh file SVG Wireframe kéo thả Figma")
    parser.add_argument("--type", choices=["booking", "tracking", "profile"], default="booking", help="Loại màn hình mẫu")
    parser.add_argument("--out", default="deliverables/generated-wireframe.svg", help="Đường dẫn file SVG đầu ra")
    args = parser.parse_args()
    create_sample_screen(args.type, args.out)
