---
name: api-error-handling
description: Use this skill when implementing error catching, logging, and error responses for APIs.
---

# Goal
Standardize API error reporting to ensure safety, ease of debugging, and consistent client responses.

# Instructions
1. Wrap controller and service code in try-catch structures or async handlers to capture unexpected errors.
2. Implement a centralized global error-handling middleware to intercept exceptions.
3. Differentiate between operational errors (expected, user-driven) and programmer errors (unexpected bugs).
4. Return error responses using standard JSON structures containing an error code and user-safe error message.
5. Log full stack traces internally for developer debugging, but never expose internal stacks to public clients.

# Input
Backend codebase, error types, api requirements, or logging setups.

# Output
Global error handling middleware, custom error classes, and error logging utilities.

# Best Practices
- Ensure that DB connection errors, database exceptions, or file system errors are intercepted and wrapped safely.
- Use standard HTTP error status codes (400, 401, 403, 404, 500) to communicate error classes.
- Track and trace errors by generating unique request tracking IDs (e.g., correlation IDs).
