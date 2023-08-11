import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFireStore } from 'firebase/firestore'

import dotenv from 'dotenv'
dotenv.config()

require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);