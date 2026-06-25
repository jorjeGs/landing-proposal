---
name: state-management
description: Use this skill when designing and implementing application state architecture.
---

# Goal
Manage local, global, and server-side state cleanly, avoiding redundant renders and state duplication.

# Instructions
1. Choose the correct scope for state: component-local (useState), shared subtree (Context), global store (Zustand/Redux), or server-side (React Query/SWR).
2. Keep global stores modular and split them by domains (e.g., authStore, cartStore).
3. Treat state as immutable; use update functions or immutability helpers (e.g., Immer) for complex modifications.
4. Leverage server-state libraries to handle fetching, caching, loading statuses, and cache invalidation.
5. Minimize prop drilling by using React Context or global stores for widely-shared properties (e.g., theme, user data).

# Input
State flows, shared data parameters, component structure, or caching requirements.

# Output
State store configs, Context Providers, custom hooks, and server-state configurations.

# Best Practices
- Avoid putting local UI state (e.g., toggled menus, loading states) in global stores; keep it local to components.
- Normalize complex nested state structures inside stores to simplify updates.
- Use selector functions to prevent unnecessary component re-renders when only parts of the state change.
