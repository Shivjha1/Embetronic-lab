# Embetronic Lab 2026 — CMR Engineering College ECE

A Google-Forms-style application portal for the ECE Department's Embetronic Lab 2026.

## Features
- CMR college visual banner supplied for the project
- ECE-only wording and 2026 branding
- Individual or team application
- Dynamic team-member fields
- Project title, domain, mentor and abstract
- Server-side validation
- Private admin dashboard at `/admin`
- Search and status filters
- New / Reviewed / Shortlisted / Rejected status
- CSV export
- Data stored in `data/submissions.json`

## Replit setup
1. Upload all files/folders to a new Replit Node.js app.
2. Make sure `package.json` is in the project root.
3. Add Replit Secrets:
   - `ADMIN_PASSWORD` = choose a strong private password
   - `SESSION_SECRET` = a long random secret
4. Run the app.
5. Student form: `/`
6. Admin dashboard: `/admin`

### Important
The default password is intentionally `CHANGE-ME-2026`. **Change `ADMIN_PASSWORD` in Replit Secrets before sharing the site.**

The JSON data file is server-side, so submissions from different students are visible in the same admin dashboard. For a larger production deployment, move the data layer to a managed database.
