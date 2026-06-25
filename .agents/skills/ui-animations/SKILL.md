---
name: ui-animations
description: Use this skill when implementing animations, transitions, and micro-interactions in a web interface.
---

# Goal
Enhance visual delight and provide direct interaction feedback using smooth, optimized animations.

# Instructions
1. Use CSS transitions and animations where possible for hardware-accelerated rendering (transform, opacity).
2. Avoid animating layout-affecting properties (width, height, top, left, margin) to prevent rendering reflows.
3. Keep transition durations short and snappy, typically between 150ms and 300ms.
4. Implement micro-interactions on user actions like hover, focus, click, and success/error events.
5. If using animation libraries (like Framer Motion, GSAP), keep packages lightweight and optimize imports.

# Input
User interface design, animation requests, or interaction feedback specs.

# Output
CSS keyframe rules, styled transition classes, or animation wrapper components.

# Best Practices
- Respect user settings for motion by wrapping animations in prefers-reduced-motion queries.
- Use cubic-bezier easing functions for organic and natural-looking motion.
- Avoid distracting or excessive animations; use them to guide attention, not clutter the interface.
