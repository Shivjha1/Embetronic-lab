// Firebase Web App configuration.
// 1) Create a Firebase project.
// 2) Add a Web App.
// 3) Copy its config values below.
// Firebase Web configuration is normally safe to expose in a static website;
// access to student records is protected by Firestore Security Rules.
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Exact email of the Firebase Authentication admin user.
window.EMBETRONIC_ADMIN_EMAIL = "PASTE_ADMIN_EMAIL";
