import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBj-BDN_zKKTkvolNlUC6Z4IOYmUxxmZGk",
  authDomain: "react-next-shop-app-623ff.firebaseapp.com",
  projectId: "react-next-shop-app-623ff",
  storageBucket: "react-next-shop-app-623ff.appspot.com",
  messagingSenderId: "1038544535231",
  appId: "1:1038544535231:web:0a8183df153cccef91d00a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;