import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcmcMOe6HB-qtz-sM9bMFWwss1iRF86Ek",
  authDomain: "chatpgt-messenger.firebaseapp.com",
  projectId: "chatpgt-messenger",
  storageBucket: "chatpgt-messenger.appspot.com",
  messagingSenderId: "234265059673",
  appId: "1:234265059673:web:57549c4dba2dcc5716ec48",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
