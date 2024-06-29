import { useEffect, useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { loginContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser, login, setUid } = useContext(loginContext);
  const logout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };
  setUid(auth?.currentUser?.uid);

  return (
    <div>
      <form className='flex flex-col  justify-between gap-2 w-[100%] '>
        {user ? (
          <div className='flex  justify-between  p-5'>
            <div className='flex items-center gap-2'>
              <img src={user.photoURL} alt='User' className='rounded-full h-20 w-20' />
              <div>
                <h1 className='text-purple-400 font-bold'>{user.displayName}</h1>
                <p className='italic text-[13px]'>{user.email}</p>
              </div>
            </div>

            <p
              className='bg-white border border-purple-100 text-center bg-purple-400 text-black  h-[30px] px-5 cursor-pointer'
              onClick={logout}
            >
              Logout
            </p>
          </div>
        ) : (
          <div className='text-center flex flex-col items-center gap-5 rounded'>
            <img src='./pic.png' alt='' className='mt-20' />
            <div className='flex flex-col gap-5 w-[80%] items-center absolute bottom-[100px]'>
              <p
                className=' text-black p-2 cursor-pointer bg-purple-200 text-center w-[80%] '
                onClick={() => {
                  login();
                  navigate('/create');
                }}
              >
                Sign in with Google as an employer
              </p>
              <p
                className=' text-black p-2 cursor-pointer bg-purple-200 text-center w-[80%]'
                onClick={() => {
                  login();
                  navigate('/Jobs');
                }}
              >
                Sign in with Google as a Job seeker
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default Login;
