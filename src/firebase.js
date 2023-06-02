import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCCbtifm9mPlnB3LR1mX6wL6emnYegEq4",
  authDomain: "wd63-601b4.firebaseapp.com",
  projectId: "wd63-601b4",
  storageBucket: "wd63-601b4.appspot.com",
  messagingSenderId: "798517777001",
  appId: "1:798517777001:web:b3cbabd913a0e0631488f8"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
