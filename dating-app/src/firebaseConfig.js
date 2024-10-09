import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW9G7S2_6ty3zgganpJ_tcOF0_PGiNiBY", // Your Web API Key from Firebase
  authDomain: "dating-app-96557.firebaseapp.com", // Your project authDomain
  projectId: "dating-app-96557", // Your project ID
  storageBucket: "dating-app-96557.appspot.com", // Your storage bucket URL
  messagingSenderId: "638663377553", // Your project number or messagingSenderId
  appId: "1:638663377553:web:82f40ad7c1e69d543ae73b" // Your app ID from Firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

console.log(app); // Add this line to see if Firebase is initialized

console.log('Firebase App initialized:', app);

