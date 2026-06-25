---
name: code-refactoring
description: Use this skill when cleaning, restructuring, or simplifying existing codebase elements.
---

# Goal
Increase code readability, testability, and maintenance quality without modifying existing external logic.

# Instructions
1. Analyze target files to identify code smells (e.g., duplicate blocks, nested loops, long methods, magic numbers).
2. Break down complex, oversized methods or controllers into smaller, single-responsibility helpers.
3. Replace confusing logic branches with descriptive variable names, early exits (guard clauses), or switch structures.
4. Extract hardcoded config properties or magic strings into central constants files.
5. Refactor implementations to adhere to SOLID programming principles.

# Input
Source code files requiring refactoring, performance cleanup, or logical simplification.

# Output
Refactored clean source code files and code improvement summaries.

# Best Practices
- Ensure regression testing (unit tests) is executed immediately before and after the refactoring step.
- Keep refactoring changes atomic: do not combine major refactoring with adding new features.
- Comment on complex or non-obvious optimizations introduced during refactoring.
