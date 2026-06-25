---
name: server-side-validation
description: Use this skill when writing server-side input validation logic.
---

# Goal
Verify the integrity and safety of all incoming payload parameters before performing backend operations.

# Instructions
1. Implement schema-based validation libraries (e.g., Zod, Joi, Yup) to inspect incoming request bodies, params, and queries.
2. Validate data types, lengths, required fields, and formats (e.g., email format, phone numbers, uuid formats).
3. Do not rely on client-side validation as the primary line of defense; always run validation on the server.
4. Return structured, clear, and informative validation error lists to clients with 400 Bad Request statuses.
5. Strip unrecognized fields from payloads to prevent mass assignment/pollution vulnerabilities.

# Input
Incoming API payloads, database models, or validation requirements.

# Output
Validation schemas, Express middleware, or controller validation logic.

# Best Practices
- Sanitize incoming strings to remove hazardous characters (e.g., HTML entities to prevent XSS).
- Use strongly-typed schemas (like Zod) that sync seamlessly with TypeScript types.
- Keep validation logic modular so it can be reused across different endpoints.
