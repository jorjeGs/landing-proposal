---
name: responsive-design
description: Use this skill when designing or implementing responsive layouts that adjust to multiple screen sizes.
---

# Goal
Ensure layouts adapt seamlessly to different viewports (mobile, tablet, desktop) without breaking usability.

# Instructions
1. Follow a mobile-first approach: write styles for the smallest screen first, then scale up using min-width media queries.
2. Ensure elements and container grids scale with relative units or flex properties.
3. Implement responsive typography, navigation menus, and media assets (images/videos).
4. Adjust layout density to screen sizes (e.g., stack sidebar on mobile, grid side-by-side on desktop).
5. Test across standard break-points: sm (640px), md (768px), lg (1024px), xl (1280px), and 2xl (1536px).

# Input
Page requirements or screen mockups showing design behavior on mobile, tablet, and desktop.

# Output
Responsive CSS stylesheet rules, or components utilizing responsive media queries/utility prefixes.

# Best Practices
- Avoid fixed widths (width: 500px) on key containers; use max-width and percentages instead.
- Ensure touch targets on mobile viewports are at least 48x48px to prevent click errors.
- Use media queries with relative units (e.g., em) to adapt layout when users zoom text.
