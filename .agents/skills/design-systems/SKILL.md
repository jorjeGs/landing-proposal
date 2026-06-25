---
name: design-systems
description: Use this skill when creating or implementing design systems, custom tokens, and visual themes.
---

# Goal
Establish a consistent, standardized visual theme using a system of design tokens (colors, font-scales, spacing).

# Instructions
1. Centralize design tokens using CSS Custom Properties (variables) or a config object (e.g., Tailwind, theme provider).
2. Define semantic color spaces: primary, secondary, neutral/background, and semantic alerts (success, warning, error).
3. Establish consistent spacing systems (e.g., 4px/8px grid scales) and typography hierarchies.
4. Map tokens to functional names (e.g., color-text-primary, button-bg-hover) rather than literal names.
5. Design themes to support extensions, such as light/dark mode variations.

# Input
Color codes, font guides, brand assets, or styling rules needing normalization.

# Output
CSS custom property sheets, configuration files (tailwind.config.js), or React Theme Provider objects.

# Best Practices
- Keep tokens simple, readable, and highly reusable.
- Verify that default color combinations in the design tokens meet minimum accessibility contrast ratios.
- Document design tokens to keep designers and developers aligned.
