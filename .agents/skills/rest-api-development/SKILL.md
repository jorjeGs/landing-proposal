---
name: rest-api-development
description: Use this skill when building or specifying RESTful API endpoints.
---

# Goal
Build robust, predictable, and scalable REST API endpoints adhering to HTTP standards.

# Instructions
1. Map endpoints logically to resource paths using plural nouns (e.g., /api/posts, /api/posts/:id).
2. Utilize standard HTTP request verbs (GET, POST, PUT, DELETE, PATCH) correctly.
3. Respond with appropriate HTTP status codes (e.g., 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Error).
4. Return consistent JSON payloads (e.g., wrapping results in standardized structures with data/error keys).
5. Design endpoints with support for query parameters (e.g., ?page=1&limit=10, ?sort=createdAt).

# Input
Database models, backend framework requirements, or API endpoint request briefs.

# Output
API routes, route handlers, and API interface specifications.

# Best Practices
- Version your API route structure (e.g., /api/v1/resources) to prevent breaking changes on updates.
- Ensure CORS rules are configured correctly to restrict access to trusted domains.
- Use pagination defaults to protect API performance from returning massive datasets.
