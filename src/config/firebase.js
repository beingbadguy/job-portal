import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyArgI4LFFTBBShy7iYai_Bm90bo2aZVp88',
  authDomain: 'book-store-7197e.firebaseapp.com',
  projectId: 'book-store-7197e',
  storageBucket: 'book-store-7197e.appspot.com',
  messagingSenderId: '971886919631',
  appId: '1:971886919631:web:ca877c8f9405899737dcba',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
