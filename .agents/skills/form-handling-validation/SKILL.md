---
name: form-handling-validation
description: Use this skill when implementing form components, input handling, and validation feedback.
---

# Goal
Create robust, accessible, and user-friendly forms with real-time feedback and state management.

# Instructions
1. Bind form inputs to managed states using controlled inputs or form libraries (e.g., React Hook Form).
2. Implement client-side schema validation (Zod, Yup, native HTML5) to validate fields on change or blur.
3. Show clear, inline, and accessible error messages next to failing inputs.
4. Disable submit buttons and show loading indicators during active submission processes.
5. Maintain focus management by shifting user focus to the first invalid field upon validation failure.

# Input
Form designs, required fields, validation rules, and submission handlers.

# Output
Form components, validation setups, custom inputs, and state management hooks.

# Best Practices
- Always support native form submission behavior (e.g., pressing Enter inside fields triggers submission).
- Keep input fields accessible: use correct <label> tags linked to inputs with matching 'id' values.
- Retain user input upon submission failure to avoid forcing users to retype values.
