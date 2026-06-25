---
name: full-stack-development
description: Use this skill when building integrated features spanning both frontend UI and backend API.
---

# Goal
Implement end-to-end full-stack features, integrating user interface, backend logic, and database updates.

# Instructions
1. Outline the data flow: from frontend interactions, API client requests, to server routes, database changes, and back.
2. Share type definitions or schemas between frontend and backend if possible (e.g., monorepo, TypeScript, tRPC).
3. Handle loading, success, and error states elegantly in the frontend UI during backend operations.
4. Ensure proper authorization checks are performed on both frontend navigation and backend routes.
5. Set up clean integration flows, ensuring frontend forms submit data formatted to server validation expectations.

# Input
Full-stack feature briefs, UI design, backend endpoints, and data requirements.

# Output
Integrated codebase changes comprising frontend components, backend endpoints, database updates, and config modifications.

# Best Practices
- Keep api calls modular: extract API calls into frontend services/hooks (e.g., React Query hooks).
- Implement optimistic UI updates when dealing with latency-sensitive user actions.
- Ensure both client and server validate inputs to protect against user errors and malicious payloads.
