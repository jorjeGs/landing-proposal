---
name: accessibility-wcag
description: Use this skill when ensuring web interfaces comply with Web Content Accessibility Guidelines (WCAG).
---

# Goal
Ensure the application is fully accessible, usable, and navigable for users with assistive technologies.

# Instructions
1. Use native semantic HTML elements first to provide baseline accessibility support.
2. Implement correct WAI-ARIA roles, attributes, and states (aria-label, aria-expanded, aria-hidden) when building custom widgets.
3. Ensure all interactive elements are reachable and operable via keyboard alone (using Tab, Enter, Space, Arrow keys).
4. Manage focus states: keep visible focus indicators (don't set outline: none) and build focus traps for modals/overlays.
5. Maintain appropriate contrast ratios (at least 4.5:1 for normal text, 3:1 for large text).

# Input
User interface code, designs, or accessibility reports needing remediation.

# Output
Accessible HTML/CSS/React components with correct semantic attributes and keyboard interaction hooks.

# Best Practices
- Do not rely solely on color to convey information or state (e.g., include text icons/labels for errors).
- Provide alt descriptions for informative images, and empty alt attribute (alt="") for purely decorative images.
- Test accessibility using automated linters (eslint-plugin-jsx-a11y), browser audits, and keyboard navigation.
