---
name: mobile-first-design
description: Use this skill when prioritizing mobile device layouts in the design and development phases.
---

# Goal
Design interfaces optimize specifically for touch navigation, speed, and small screens from the ground up.

# Instructions
1. Code layout structure for small screens (mobiles) as default styles, adding min-width media queries for larger displays.
2. Ensure interactive elements (buttons, links) are easily tapable with sufficient touch spacing.
3. Implement bottom nav bars, collapsible drawers, or thumb-reachable menus instead of complex hover hover menus.
4. Optimize assets to minimize mobile data consumption.
5. Ensure critical contents and calls-to-action are visible without requiring extensive scrolling.

# Input
Mobile layout designs, target devices, and viewport specifications.

# Output
Mobile-first CSS rules, responsive templates, and touch-optimized components.

# Best Practices
- Ensure the viewport meta tag is correctly set in the HTML head.
- Never depend on hover events for core actions, as hover does not exist on touch devices.
- Test layouts under network-throttled conditions to optimize rendering speeds.
