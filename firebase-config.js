const firebaseConfig = {
  apiKey: "AIzaSyDbtalyHF9WKDGR5gR5MYdyLI82jZasBAU",
  authDomain: "gadis-app-e4cab.firebaseapp.com",
  projectId: "gadis-app-e4cab",
  storageBucket: "gadis-app-e4cab.firebasestorage.app",
  messagingSenderId: "1054394320473",
  appId: "1:1054394320473:web:7c99b205c8438309559348"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();