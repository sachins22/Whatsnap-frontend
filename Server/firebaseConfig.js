// firebaseConfig.js
import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCH-rQ2aYXUHYK-VMZvr65at6dp9_uKdbg",
  authDomain: "ss22-74050.firebaseapp.com",
  projectId: "ss22-74050",
  storageBucket: "ss22-74050.appspot.com",
  messagingSenderId: "144165985220",
  appId: "1:144165985220:web:b17ce254cce069486be291",
  measurementId: "G-F1FEZJ4NEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, auth };
