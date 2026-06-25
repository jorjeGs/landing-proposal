---
name: angular-development
description: Use this skill when developing Angular components, directives, pipes, services, and application logic.
---

# Goal
Create modular, high-performance Angular applications using standalone components, dependency injection, RxJS streams, and reactive patterns.

# Instructions
1. Use modern standalone components (or NgModule-based structures if explicitly required by the project setup).
2. Implement proper Angular lifecycle hooks (ngOnInit, ngOnChanges, ngOnDestroy, etc.) to manage component state.
3. Manage asynchronous data streams and events using RxJS Observables and leverage the `async` pipe in templates.
4. Keep component templates declarative and write strongly-typed logic using TypeScript.
5. Extract business logic and state management into reusable Angular Services with dependency injection (`providedIn: 'root'`).

# Input
Angular component layout design, reactive flow specs, service integrations, or state requirements.

# Output
Angular component classes, templates, style sheets, services, directives, or pipes (.ts, .html, .css/.scss).

# Best Practices
- Never manipulate the DOM directly; use template binding, ElementRef, or Renderer2.
- Prevent memory leaks by properly unsubscribing from RxJS Observables using the `async` pipe, `takeUntilDestroyed`, or manual subscription management.
- Avoid placing heavy calculations inside template expressions; use custom Pure Pipes or signals instead.
- Follow the official Angular Style Guide for file naming and structuring.
