# Danh Mục Nhiệm Vụ Định Nghĩa Trước (Pre-defined Tasks)

Tài liệu này chứa kịch bản chi tiết của các tác vụ định trước được ánh xạ từ các luồng kịch bản tương lai (`deliverables/01-user-research/scenario-future/`) và kiểm thử trên hệ thống Wireframe.

---

{{#each tasks}}
### Nhiệm Vụ {{this.index}}: {{this.taskName}} ({{this.taskId}})
- **Bối cảnh tình huống**: {{this.scenarioContext}}
- **Nhiệm vụ của người dùng**: {{this.userInstruction}}
- **Màn hình liên quan**: {{this.screenRefs}}
- **Tiêu chí hoàn thành (Success Criteria)**: {{this.successCriteria}} (Ngưỡng thời gian tối đa: $\le {{this.targetDurationSeconds}}\text{s}$).

---
{{/each}}
