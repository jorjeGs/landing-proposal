---
name: security-best-practices
description: Use this skill when protecting applications against vulnerabilities and security risks.
---

# Goal
Mitigate security risks, securing code and environments against standard vulnerabilities (OWASP Top 10).

# Instructions
1. Prevent Injection (SQL/NoSQL): use parameterized queries, prepared statements, or ORM/ODM layers for all database actions.
2. Prevent Cross-Site Scripting (XSS): escape all user input in output renderings, and use secure sanitization libraries.
3. Configure secure HTTP headers: Content Security Policy (CSP), CORS bounds, and standard Helmet middleware configs.
4. Keep dependencies secure: run regular vulnerability audits (npm audit, snyk) and update outdated packages.
5. Secure environment configs: ensure secret credentials, connection tokens, and private keys are never committed to git repositories.

# Input
Source code review, database setup configs, or security scan reports.

# Output
Secure source code edits, middleware settings, and security audits.

# Best Practices
- Follow the Principle of Least Privilege when granting database, network, or server permissions.
- Implement strict CSRF tokens or secure cookies for session-state mutations.
- Maintain secure transmission standards: enforce SSL/TLS (HTTPS) configuration everywhere.
