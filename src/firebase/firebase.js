import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAf-klP5BKpIxPUAqxghHz_hiO_Rnk_6sg",
  authDomain: "art-gallery-react.firebaseapp.com",
  projectId: "art-gallery-react",
  storageBucket: "art-gallery-react.appspot.com",
  messagingSenderId: "1052248404666",
  appId: "1:1052248404666:web:443dc29a9a311f13eac883",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
