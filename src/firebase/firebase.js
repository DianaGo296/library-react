import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDizpbGjv90H-QXzeg48x8UMIQOG1xwoAU",
  authDomain: "library-fea2d.firebaseapp.com",
  projectId: "library-fea2d",
  storageBucket: "library-fea2d.appspot.com",
  messagingSenderId: "787347675644",
  appId: "1:787347675644:web:f5133953a2688568457a79"
};


// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);

// Use these for db & auth
export default getFirestore(app);

