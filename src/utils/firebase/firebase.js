// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAs5YZ1IfFLuXnsK56DIeZZn3Y54mZBr4E",
  authDomain: "unstop-task.firebaseapp.com",
  projectId: "unstop-task",
  storageBucket: "unstop-task.firebasestorage.app",
  messagingSenderId: "744895988610",
  appId: "1:744895988610:web:2e8ab07bfbb9944fefc59b",
  measurementId: "G-VM10LQGQ2F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)