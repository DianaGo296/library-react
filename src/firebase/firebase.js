import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_KaMAGNnVZoPORMEc5nClYYcYPEQ_oXg",
  authDomain: "library-49b85.firebaseapp.com",
  projectId: "library-49b85",
  storageBucket: "library-49b85.appspot.com",
  messagingSenderId: "695093973706",
  appId: "1:695093973706:web:235ba8f56614b79c21da33"
};


// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);

// Use these for db & auth
export default getFirestore(app);

