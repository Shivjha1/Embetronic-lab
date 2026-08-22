# Embetronic Club — Firebase Setup (one-time)

This version uses Firebase Authentication + Cloud Firestore. No Google Sheets or Apps Script is required.

## 1. Create Firebase project
1. Open https://console.firebase.google.com/
2. Click **Create a project**.
3. Give it a name, e.g. `embetronic-club`.
4. Analytics can be disabled if you do not need it.
5. Create the project.

## 2. Add the website
1. In Firebase, open **Project settings**.
2. Under **Your apps**, click the Web icon `</>`.
3. Register the app (for example `Embetronic Website`).
4. Firebase will show a `firebaseConfig` object.
5. Open `firebase-config.js` in this project.
6. Copy the matching values into `window.FIREBASE_CONFIG`.
7. Replace `PASTE_ADMIN_EMAIL` with the email address you will use as the administrator.

## 3. Enable Authentication
1. Firebase Console → **Authentication** → **Get started**.
2. Open **Sign-in method**.
3. Enable **Email/Password**.
4. Go to **Users** → **Add user**.
5. Create the admin email and a strong password.

## 4. Create Firestore
1. Firebase Console → **Firestore Database** → **Create database**.
2. Choose a location close to your users (for example India if available).
3. Create the database.
4. Open the **Rules** tab.
5. Copy the complete contents of `firestore.rules` from this project.
6. Replace `PASTE_ADMIN_EMAIL` in the rule with the same admin email.
7. Click **Publish**.

## 5. Test locally / GitHub Pages
Upload the whole project folder to GitHub Pages. Make sure these files remain together:
- index.html
- admin.html
- script.js
- firebase-config.js
- style.css
- assets/college-visual.png

Student page:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

Admin page:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/admin.html`

## 6. How information is stored
Every registration is saved in Firestore under:
`applications`

The admin dashboard reads those applications after the admin signs in.

## Security
- Never put the Firebase Admin SDK/service-account private key in this website.
- The Firebase Web App config is intended to be used by the browser; Firestore Security Rules protect the database.
- Keep the admin password private.
- The rules intentionally allow public registration creation but only the configured admin email can read applications.
