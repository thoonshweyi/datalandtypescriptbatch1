  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDPFiI2CjnwT5-fYogUKxVwazbpY1Y7Lcw",
    authDomain: "my-first-project-3af4a.firebaseapp.com",
    projectId: "my-first-project-3af4a",
    storageBucket: "my-first-project-3af4a.firebasestorage.app",
    messagingSenderId: "846228196317",
    appId: "1:846228196317:web:206598c443305a7ed64434"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db  = getFirestore(app);