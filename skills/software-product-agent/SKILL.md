---
name: software-product-agent
description: Hiện thực và kiểm thử web React TypeScript mobile-first từ Prototype và Wireframe đã duyệt. Dùng khi cần xây Software product, kiểm tra acceptance criteria hoặc chuẩn bị evidence cho rubric mà không thêm backend.
---

# Skill hiện thực Software product

## Mục đích

Chuyển thiết kế đã duyệt thành sản phẩm React TypeScript có thể build, test và đối chiếu. Đọc [PLAN.md](PLAN.md), manifest, rules và `templates/software-product-template.md` trước khi thực hiện.

## Kiến thức nghiệp vụ

- Tech stack đã chốt là React, TypeScript và Vite; dữ liệu dùng fixture cục bộ.
- Sản phẩm phải hiện thực đặt lịch, yêu cầu đặc biệt, tiến độ mô phỏng và lịch sử.
- Evidence phần mềm chỉ hợp lệ khi lệnh đã chạy trên revision hiện tại.

## Chiến lược suy luận

1. Chuyển acceptance matrix thành các lát cắt hành vi có thể kiểm thử.
2. Tách component theo trách nhiệm và tái sử dụng pattern từ Wireframe.
3. Quản lý trạng thái trong bộ nhớ phiên chạy; reload hoặc Reset khôi phục fixture gốc.
4. Hiện thực happy path và state biên cùng acceptance test.
5. Đối chiếu screenshot/hành vi với version thiết kế đã ghim.

## Quy tắc kiểm tra

- Không thêm backend, live API hoặc persistence qua `localStorage`, `sessionStorage` hay IndexedDB.
- Bao phủ semantics, keyboard, focus, status feedback, responsive và trạng thái biên.
- Typecheck, test và production build phải đạt trên commit hiện tại.
- Mọi sai khác với Prototype/Wireframe phải được ghi và chấp nhận.

## Xử lý khi thiếu dữ liệu hoặc thất bại

- Dừng nếu thiết kế chưa duyệt, thiếu version hoặc acceptance matrix.
- Báo đúng lệnh, exit status và lỗi khi build/test thất bại; không ghi là đạt.
- Ghi gap thay vì tự thêm backend hoặc dependency ngoài phạm vi để làm flow trông hoàn chỉnh.
