---
name: css-layouts
description: Use this skill when building layouts using CSS systems like Flexbox and CSS Grid.
---

# Goal
Create robust, maintainable, alignment-perfect, and highly responsive page layouts using Flexbox and Grid.

# Instructions
1. Choose CSS Grid for two-dimensional layouts (rows and columns) and page-level scaffolding.
2. Choose Flexbox for one-dimensional layouts (single row or single column) and micro-alignments inside components.
3. Use CSS custom properties (variables) to manage grid gaps, padding, and layout bounds.
4. Avoid absolute positioning for layout purposes; rely on grid and flex alignments instead.
5. Ensure layouts degrade gracefully on legacy browsers, using standard fallbacks if necessary.

# Input
Layout design requirements, wireframes, spacing specifications, or components that require alignment.

# Output
Clean, well-structured CSS rules (standard CSS files, module styles, or styled components) implementing the layout.

# Best Practices
- Use relative units (rem, em, %, fr, vh, vw) instead of hardcoded pixel values for layout bounds.
- Set box-sizing to border-box globally to prevent sizing issues.
- Utilize gap properties instead of margins to manage spacing between elements where possible.
