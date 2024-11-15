import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: proccess.env.FIREBASE_API_KEY,
  authDomain: proccess.env.FIREBASE_AUTH_DOMAIN,
  projectId: proccess.env.FIREBASE_PROJECT_ID,
  storageBucket: proccess.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: proccess.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: proccess.env.FIREBASE_APP_ID,
  measurementId: proccess.env.FIREBASE_MEASUREMENT_ID
};

// init firebase
const app = initializeApp(firebaseConfig);

// init services
const firestoreDatabase = getFirestore(app);
const firebaseStorage = getStorage(app);
const analytics = getAnalytics(app);

export { firestoreDatabase, firebaseStorage, analytics };
