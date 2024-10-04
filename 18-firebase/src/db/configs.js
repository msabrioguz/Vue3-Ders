// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC3rp3-tSw8VqyZFQIQoZVdlr5DdYvuQbI',
    authDomain: 'fir-article-ecfea.firebaseapp.com',
    projectId: 'fir-article-ecfea',
    storageBucket: 'fir-article-ecfea.appspot.com',
    messagingSenderId: '596792263310',
    appId: '1:596792263310:web:fe02d511a2f6fbae89ffdf'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getFirestore(app);

export { db };
