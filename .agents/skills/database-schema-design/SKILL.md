---
name: database-schema-design
description: Use this skill when modeling database structures, relationships, and tables.
---

# Goal
Create normalized, performant, and scale-ready relational or NoSQL database schemas.

# Instructions
1. Outline data tables/collections, column types, constraint fields (primary keys, unique, not null).
2. Establish relationships (one-to-one, one-to-many, many-to-many) using foreign key references and joint tables.
3. Create database indexes on columns frequently used in WHERE, JOIN, or ORDER BY queries.
4. Set up database cascading rules (e.g., ON DELETE CASCADE) to maintain data consistency.
5. Draft database migrations or schema files (e.g., Prisma schemas, SQL scripts, Mongoose schemas).

# Input
Business requirements, data models, entity relationship diagrams, or schema changes.

# Output
SQL DDL scripts, Prisma schemas, Mongoose models, or schema migration files.

# Best Practices
- Maintain normalization standards (typically up to 3NF) to avoid data anomalies, unless denormalizing for performance.
- Avoid indexing columns with low selectivity (e.g., boolean values) as it adds write overhead without benefit.
- Always use migrations instead of manual schema updates in database environments.
