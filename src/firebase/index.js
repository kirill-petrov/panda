import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: 'panda-96f86.firebaseapp.com',
  projectId: 'panda-96f86',
  storageBucket: 'panda-96f86.appspot.com',
  messagingSenderId: '637074229983',
  appId: '1:637074229983:web:5d6400766945c1f6ddb76a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const reportsRef = collection(db, 'reports');

export const reports = await getDocs(reportsRef);

export const createReport = async (formData) => {
  try {
    await addDoc(reportsRef, {
      ...formData,
      createdAt: serverTimestamp(),
    });
    return {
      message: 'Отчёт сохранён'
    };
  } catch (error) {
    return error;
  }
};
