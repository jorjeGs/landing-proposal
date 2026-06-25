---
name: crud-application
description: Use this skill when structuring Create, Read, Update, and Delete features.
---

# Goal
Build robust, organized, and clean CRUD features following MVC or clear layered architecture patterns.

# Instructions
1. Define database structures and API routes for Create, Read (List and Single), Update, and Delete.
2. Implement backend handlers to process incoming data, call service layers, and write to database models.
3. Implement frontend UI listing dashboards (Read) with sorting, filtering, and pagination.
4. Implement form dialogs or page routes to handle creation and edits (Create/Update).
5. Integrate safe deletion flows (Delete) requiring explicit user confirmation before executing backend requests.

# Input
Entity requirements, model specs, data models, or CRUD feature scopes.

# Output
Full CRUD codebase files: routes, controllers, services, database models, and matching frontend interfaces.

# Best Practices
- Keep service logic independent of HTTP contexts so it can be easily tested.
- Implement soft deletes if business requirements suggest retaining historical data.
- Protect update and delete operations with explicit ownership checks (authorization).
