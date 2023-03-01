// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCi4pbkVr8qahqi2hbSh82CEJgaUie2mLE",
	authDomain: "notat-80cce.firebaseapp.com",
	projectId: "notat-80cce",
	storageBucket: "notat-80cce.appspot.com",
	messagingSenderId: "254732045744",
	appId: "1:254732045744:web:a23c72ac8fadf1fa121a75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
