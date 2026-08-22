# Embetronic Club 2026 — Deployment

## What is already fixed
- CMR image is `cmr.png` and is loaded from the project root.
- Laptop layout: CMR/club visual on the **left**, registration form on the **right**.
- Phone layout: visual appears first and the form stacks below it.
- Student fields, team members, interests and confirmation are collected.
- Firebase Firestore submission and protected admin dashboard are included.
- `admin.html` provides search, counts, refresh and CSV export.

## One required online setup
GitHub Pages is static, so student records need a database. This project uses Firebase.

1. Create a Firebase project.
2. Add a Web App and copy the Firebase config into `firebase-config.js`.
3. In Firebase Authentication, enable **Email/Password** and create the admin user.
4. Put the same admin email into `window.EMBETRONIC_ADMIN_EMAIL`.
5. Create Firestore Database.
6. In Firestore Rules, replace `PASTE_ADMIN_EMAIL` with the same admin email.
7. Publish the whole folder to GitHub Pages.
8. Students use `index.html`; admin uses `admin.html`.

Until these Firebase values are added, the visual website and form work, but the form intentionally does not pretend that data was saved online.
