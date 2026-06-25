---
name: tailwind-development
description: Use this skill when writing styles using the Tailwind CSS utility-first framework.
---

# Goal
Develop modern, responsive, and highly maintainable user interfaces using Tailwind CSS utility classes.

# Instructions
1. Styling must be applied using standard Tailwind utility classes directly in the markup.
2. Leverage hover, active, focus, group, and peer modifiers to style interactive states.
3. Keep styling organized by placing classes in a logical order (e.g., layout, sizing, positioning, typography, colors, animations).
4. Use utility-first principles. Avoid writing custom CSS rules unless styling complex layouts that Tailwind doesn't cover natively.
5. Customize styling via tailwind.config.js for custom themes, colors, and animations.

# Input
Visual layout mockups, styling guidelines, or React/HTML components requiring Tailwind classes.

# Output
React/HTML files or components fully styled using Tailwind CSS classes.

# Best Practices
- Use tools like tailwind-merge and clsx for combining dynamic styling classes in React.
- Do not abuse @apply in CSS files; keep styles utility-first inside markup/components.
- Make sure to enable tree-shaking (purging unused classes) in production setups.
