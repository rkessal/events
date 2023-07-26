import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcinlcz5ibL2oNAoIY9WUSx9KHdSLuUDE",
  authDomain: "events-faf59.firebaseapp.com",
  projectId: "events-faf59",
  storageBucket: "events-faf59.appspot.com",
  messagingSenderId: "961244187432",
  appId: "1:961244187432:web:8bb218222b0ae5383c5e1d",
  measurementId: "G-STBG10MZ5W",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
