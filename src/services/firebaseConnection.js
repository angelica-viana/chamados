
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC6glfqwkjW6xGFD5YWrvAXKo2-pI5CLBA",
    authDomain: "chamados-c7722.firebaseapp.com",
    projectId: "chamados-c7722",
    storageBucket: "chamados-c7722.firebasestorage.app",
    messagingSenderId: "256915567549",
    appId: "1:256915567549:web:1d89cf5a703d819ecfd8d4"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage };