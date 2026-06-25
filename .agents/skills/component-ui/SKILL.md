---
name: component-ui
description: Use this skill when designing modular, reusable component-based user interfaces.
---

# Goal
Create highly modular, reusable, and isolated UI components that simplify application composition.

# Instructions
1. Break down the user interface into small, atomic elements (buttons, inputs, cards, avatars).
2. Encapsulate styling, structure, and behavior within the component.
3. Expose a clear and predictable API (props, attributes, arguments).
4. Ensure components are stateless where possible, delegating state management to container elements.
5. Design components with slot/children support to allow composition.

# Input
UI components specifications, design patterns, or user interfaces needing componentization.

# Output
Isolated component files with corresponding structures, styles, and typings.

# Best Practices
- Follow the Single Responsibility Principle: each component should do one thing well.
- Avoid hardcoding values inside components; pass dynamic properties through interfaces/props.
- Group component files logically, keeping styles, tests, and component logic together.
