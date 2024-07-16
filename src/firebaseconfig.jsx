import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUdY1CcJB1nui_RpuAuJzPQ1oblu_WIiw",
  authDomain: "pata-nyumba-68865.firebaseapp.com",
  databaseURL: "https://pata-nyumba-68865-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pata-nyumba-68865",
  storageBucket: "pata-nyumba-68865.appspot.com",
  messagingSenderId: "279875120310",
  appId: "1:279875120310:web:dff03bfb92b3540f9a8a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app