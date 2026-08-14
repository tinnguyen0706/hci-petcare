# Handoff: TASK-PERSONA-001

## Thay đổi

- Đi đúng chuỗi trạng thái `ready → claimed → in-progress → review`; worker không tự review.
- Tổng hợp P01–P05 thành mẫu khảo sát chính `n = 5` và dùng P06 làm phỏng vấn bổ sung, không đưa P06 vào mẫu số tần suất.
- Không loại phiên do thiếu trường consent theo yêu cầu hiện tại của người dùng; chỉ dùng mã Pxx trong đầu ra.
- Tạo evidence matrix có loại bằng chứng, tần suất, mã truy vết, phản chứng/khác biệt và giới hạn cho từng finding quan trọng.
- Tạo Persona một trang theo bố cục hai cột với minh họa SVG tự chứa, đủ các mục quote, demographics, context/touchpoints, behaviors, tasks, goals, motivations, pain points, frustrations, needs và wishes.
- Giữ nguyên quote P06; không sao chép Persona giả thuyết Lan 28 tuổi/nhân viên văn phòng/Poodle/TP.HCM từ proposal. Synthesis ghi rõ chênh lệch giữa giả thuyết proposal và mẫu nghiên cứu hiện có.
- Sau review vòng 1, thay toàn bộ feature suy ra từ proposal trong finding/Needs/Wishes bằng outcome trung tính có evidence; bảng Goals/Tasks/Motivations/Pains/Needs truy vết riêng từng cụm thay vì gán chung P01–P06.
- Hiệu chỉnh finding lo lắng/rủi ro thành `4/5`, loại P04 khỏi tần suất và ghi P04 là phản chứng; title, behaviors, motivations cùng footer Persona nêu rõ mẫu nổi trội P01/P03/P05 thay vì toàn bộ mẫu.

## Tệp đã sửa

- `deliverables/01-user-research/synthesis.md`
- `deliverables/01-user-research/persona.md`
- `coordination/tasks/TASK-PERSONA-001.yml`
- `coordination/handoffs/TASK-PERSONA-001.md`

## Kiểm thử

- Lệnh: PowerShell content traceability check cho P01–P06, 12 nhãn nội dung Persona, SVG/alt text, quote nguyên văn P06, thuộc tính proposal không có evidence và giới hạn độ dài compact.
- Kết quả: `OK`; đủ P01–P06, đủ các nhãn bắt buộc, có minh họa tự chứa, quote khớp nguồn, Persona không chứa Lan/28 tuổi/Poodle/TP.HCM; Persona gồm 14 dòng nguồn Markdown và khoảng 676 từ/token-like.
- Lệnh: `py -3 -X utf8 scripts/coordination/tasklib.py coordination/tasks/TASK-PERSONA-001.yml`.
- Kết quả: `OK` ở cả trạng thái `in-progress` và `review`.
- Lệnh: `git diff --check` trước commit nội dung.
- Kết quả: không có lỗi whitespace.
- Lệnh: `py -3 -X utf8 scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-PERSONA-001.yml main HEAD`.
- Kết quả: `OK`; diff hoàn chỉnh hợp lệ với task và `write_scope`.
- Lệnh: `git diff --check main...HEAD` và PowerShell đối chiếu `git diff --name-only main...HEAD` với bốn đường dẫn trong `write_scope`.
- Kết quả: không có lỗi whitespace; đúng bốn tệp thay đổi và không có tệp ngoài phạm vi.
- Lệnh vòng 2: PowerShell kiểm tra bốn outcome trung tính, cấm solution language trong Persona, tần suất `4/5`, phản chứng P04, không còn truy vết P01–P06 chung chung trong bảng mục 3, quote P06, đủ nhãn Persona và giới hạn compact.
- Kết quả vòng 2: `OK`; Persona không chứa các feature bị reviewer nêu, finding có đúng `4/5` và P04 là phản chứng, bảng tổng hợp truy vết theo từng cụm; Persona còn 14 dòng nguồn Markdown và khoảng 648 từ/token-like.

## Tài liệu đã ảnh hưởng

- Yêu cầu hiện tại của người dùng: làm lại Persona và không tiếp tục áp dụng yêu cầu kiểm tra consent đã xóa.
- `AGENTS.md`; `coordination/PROTOCOL.md`; `references/README.md`; `agents/manifest.json`; `agents/persona-agent.md`.
- `skills/persona-agent/SKILL.md`; `skills/persona-agent/PLAN.md`; `templates/persona-template.md`.
- `rules/persona-rules.md`; `rules/quality-rules.md`; `rules/style-rules.md`; `rules/assessment-rules.md`.
- `docs/proposal.md`; `docs/final-rubric.csv`; `references/course-materials/notes/05-persona-value-proposition.md`; `references/project-guidelines/notes/rubric-project-final.md`; `references/project-guidelines/notes/guide-project-2026.md`.
- Toàn bộ sáu tệp Markdown trong `data/user-research/`.

## Vấn đề còn lại

- Synthesis và Persona cần con người review/chấp nhận trước khi được dùng như bằng chứng đã duyệt cho deliverable phụ thuộc.
- P01–P05 chỉ bao phủ nhóm dưới 22 tuổi, học sinh/sinh viên và đều có nuôi mèo; Persona chưa đại diện cho các độ tuổi/nghề nghiệp hoặc nhóm chủ nuôi khác.
- Giới tính, tuổi cụ thể, nơi sống, thu nhập và mức thành thạo công nghệ chưa xác định; Persona chủ động để trống hoặc ghi “chưa xác định”.
- P06 bổ sung chiều sâu nhưng không có đầy đủ trường demographic như P01–P05, nên không được dùng để thay đổi tần suất khảo sát.

## Commit

- Nội dung ban đầu: `5d04738d8247c63647fcc37443ea2c360736a52a`
- Sửa theo review vòng 1: `6687120863b484d947e29e61fce3d0396040f04d`

## Review

- Vòng 1: `changes-requested`.
- Yêu cầu sửa: loại các feature của proposal khỏi finding/Needs/Wishes; chỉ giữ outcome trung tính có evidence. Hiệu chỉnh finding “giảm bất định”, không tính P04 vào mẫu này và thể hiện P04 là phản chứng. Rà lại truy vết chung chung trong bảng tổng hợp.
- Vòng 2: `approved`.
- Bằng chứng: outcome được mô tả trung tính và truy vết đúng mức; finding là `4/5` với P04 được giữ như phản chứng; không có regression ở Persona hoặc synthesis; task validator, integration gate và scope check đều đạt. Consent không được dùng làm tiêu chí đánh giá theo yêu cầu hiện tại của người dùng.
