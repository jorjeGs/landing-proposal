---
name: debugging-diagnosis
description: Use this skill when identifying, diagnosing, and fixing bugs or logic issues.
---

# Goal
Trace the root cause of application bugs and errors, implementing reliable, permanent fixes.

# Instructions
1. Replicate the issue locally and analyze error stacks, console errors, backend traces, or database logs.
2. Trace code execution flow step-by-step around the bug site, using logs, breakpoints, or test fixtures.
3. Identify the logical breakdown, race condition, syntax error, or unhandled exception causing the issue.
4. Devise a targeted fix that addresses the root cause directly without introducing side-effects.
5. Write regression unit tests that replicate the failure scenario to guarantee the issue doesn't reappear.

# Input
Bug descriptions, stack traces, console outputs, or reproduction instructions.

# Output
Fixed source code files, debugging analysis reports, and regression test cases.

# Best Practices
- Do not apply temporary patches/hacks that hide symptoms; ensure the root cause is resolved.
- Double check boundaries, null states, and undefined handling in the surrounding code during fixes.
- Document findings and the mechanism of the fix within commits or tickets.
