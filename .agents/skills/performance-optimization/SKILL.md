---
name: performance-optimization
description: Use this skill when improving code execution, load speeds, or memory efficiency.
---

# Goal
Maximize runtime execution speed, asset loading times, and memory efficiency across the codebase.

# Instructions
1. Implement frontend asset optimization: compress media, set up lazy loading for images and routes/components.
2. Optimize React performance: memoize expensive calculations (useMemo) and prevent redraw cascades (useCallback, React.memo).
3. Improve database query speeds: use query profiling, select only needed columns, and implement index plans.
4. Implement route caching strategies, compress server response payloads (gzip/brotli), and optimize static asset caching.
5. Audit bundle files to identify and replace oversized node dependencies.

# Input
Slow code paths, bundle reports, slow API logs, or performance benchmarks.

# Output
Optimized source code files, caching setups, and performance reports.

# Best Practices
- Never optimize prematurely; measure performance profiles first to target the actual bottleneck.
- Focus on key metrics like Core Web Vitals (LCP, FID, CLS) for client-side pages.
- Cache API responses where data updates are infrequent, utilizing Redis or browser caching tags (ETag, Cache-Control).
