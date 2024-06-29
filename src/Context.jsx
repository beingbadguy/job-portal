import React, { createContext, useEffect, useState } from 'react';
import { auth } from './config/firebase';
import { googleProvider } from './config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';

export const loginContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [idUser, setUid] = useState();
  const jobs = collection(db, 'jobs');
  const [user, setUser] = useState();
  const [job, setJob] = useState();
  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // console.log(auth);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchJobs = async () => {
    try {
      const newJobs = await getDocs(jobs);
      const filtereddata = newJobs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setJob(filtereddata);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    fetchJobs();

    return () => unsubscribe();
  }, []);
  // console.log(job);
  // console.log(fetchJobs);
  return (
    <loginContext.Provider value={{ idUser, setUid, user, setUser, login, job, fetchJobs }}>
      {children}
    </loginContext.Provider>
  );
};
export default LoginProvider;
