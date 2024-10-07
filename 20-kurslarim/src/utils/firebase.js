// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCki_hklXTj9f9EhbGD9bnM33sfjYf658I',
  authDomain: 'kurslarim-2a238.firebaseapp.com',
  projectId: 'kurslarim-2a238',
  storageBucket: 'kurslarim-2a238.appspot.com',
  messagingSenderId: '782010280718',
  appId: '1:782010280718:web:dec1fa04b9d524f705455f'
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
