---
name: auth-systems
description: Use this skill when designing or implementing authentication, authorization, and session management systems.
---

# Goal
Build highly secure, token-based or session-based user authentication and access control systems.

# Instructions
1. Securely hash passwords using slow hashing algorithms (bcrypt or Argon2) before saving to the database.
2. Generate secure JSON Web Tokens (JWT) or sessions using strong secret keys and proper expiration times.
3. Send auth tokens securely, preferably inside HttpOnly, Secure, SameSite cookies to protect against XSS and CSRF.
4. Implement authorization middleware to restrict access to secure routes based on roles or permissions.
5. Provide robust endpoints for registration, login, logout, password resets, and session refreshes.

# Input
User model specifications, auth configurations, security targets, or role guidelines.

# Output
Authentication routes, route guards, token validation middleware, and password hashing scripts.

# Best Practices
- Never store plain-text passwords or secret keys in source files; use environment variables.
- Rate-limit authentication endpoints to prevent brute-force attacks.
- Invalidate user sessions / tokens server-side upon logout or password updates.
