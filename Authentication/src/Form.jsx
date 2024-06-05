/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import Google from './assets/google.png'
import { checkValidData } from './utils/Validate'
import { firebaseAuth, provider } from './utils/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { signInWithPopup, onAuthStateChanged, signInWithRedirect } from 'firebase/auth'

const Form = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState(null)
  const [errMessage, setErrMessage] = useState('')

  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // It returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
  // The returned object will persist for the full lifetime of the component.
  // const ref = useRef(initialValue)

  const email = useRef(null) // useRef is used to create a ref object email
  const password = useRef(null) // useRef is used to create a ref object password
  // I want to refer this email and password to my textfields

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value)
    setErrMessage(message)
    if (message) return

    // SignUp Login
    if (!isSignIn) {
      try {
        const res = await createUserWithEmailAndPassword(firebaseAuth, email.current.value, password.current.value)
        toast.success(
          <div>
            <div style={{ fontSize: '14px', textAlign: "center", color: 'gray' }}>
              "Congratulations!" Your account has been successfully created.
            </div>
            <div style={{ fontSize: '12px', textAlign: "center", color: 'black' }}>
              Click on the "Sign In Now" text below to Sign In..
            </div>
          </div>,
          {
            position: "top-center",
            newestOnTop: true,
            autoClose: 3000,
            closeButton: true,
            closeOnClick: true,
            pauseOnHover: true,
          }
        );
      } catch (err) {
        setErrMessage(err.message)
        toast.error(err.message);
      }
    }
    else {
      try {
        const res = await signInWithEmailAndPassword(firebaseAuth, email.current.value, password.current.value)
        console.log(res)
        toast.success(
          <div>
            <div style={{ fontSize: '14px', textAlign: "center", color: 'gray' }}>
              "Congratulations!" Signed In successfully .
            </div>
          </div>,
          {
            position: "top-center",
            newestOnTop: true,
            autoClose: 3000,
            closeButton: true,
            closeOnClick: true,
            pauseOnHover: true,
          }
        );
      } catch (err) {
        setErrMessage(err.message)
        toast.error(err.message);
      }
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      const res = await signInWithPopup(firebaseAuth, provider)
      // await signInWithRedirect(firebaseAuth, provider)
      console.log(res)
      toast.success(
        <div>
          <div style={{ fontSize: '14px', textAlign: "center", color: 'gray' }}>
            "Congratulations!" Signed In with google successfully .
          </div>
        </div>,
        {
          position: "top-center",
          newestOnTop: true,
          autoClose: 3000,
          closeButton: true,
          closeOnClick: true,
          pauseOnHover: true,
        }
      );
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  }

  return (
    <div className='bg-white md:w-[65%] p-10 rounded-3xl border-2 border-gray-200 shadow-2xl'>
      <h1 className='text-3xl font-semibold text-center'>Welcome Back 😊</h1>
      <p className='font-medium text-sm text-center text-gray-500 mt-3'>Welcome back! Please enter your details</p>
      <div className='mt-5'>
        {
          !isSignIn &&
          <div>
            <label className='text-sm font-medium'>UserName</label>
            <input
              className='w-full border-2 border-gray-200 rounded-lg px-3 py-2 bg-transparent text-sm'
              type="text"
              value={userName}
              placeholder='Enter your username'
              onChange={handleUserNameChange}
            />
          </div>
        }
        <div className='mt-2'>
          <label className='text-sm font-medium'>Email</label>
          <input
            className='w-full border-2 border-gray-200 rounded-lg px-3 py-2 bg-transparent text-sm'
            type="text"
            ref={email}  // useRef is used to create a ref object email
            placeholder='Enter your email' />
        </div>
        <div className='mt-2'>
          <label className='text-sm font-medium'>Password</label>
          <input
            className='w-full border-2 border-gray-200 rounded-lg px-3 py-2 bg-transparent text-sm'
            type="password"
            ref={password} // useRef is used to create a ref object password
            placeholder='Enter your password' />
        </div>
        {
          errMessage && (
            <div className='mt-2 text-red-500 text-sm'>
              {errMessage}
            </div>
          )
        }
        {
          isSignIn &&
          <div className='mt-5 flex gap-x-4 justify-between items-center'>
            <div className='flex'>
              <input
                type="checkbox"
                id='remember'
              />
              <label htmlFor="remember" className='ml-1 font-medium text-sm'>Remember for 30 days</label>
            </div>
            <button className='font-medium text-sm text-violet-500 hover:text-violet-800'>Forget password</button>
          </div>
        }
        <div className='mt-5 flex flex-col gap-y-4'>
          <button
            className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out px-3 py-2 rounded-xl bg-gradient-to-tr from-violet-400 to-pink-400 text-white text-md font-bold'
            onClick={handleClick}>
            {
              isSignIn ? "Sign in" : "Sign up"
            }
          </button>
          {
            isSignIn &&
            <button
              className='flex border-2 border-gray-200 rounded-xl px-3 py-2 justify-center items-center gap-x-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'
              onClick={handleGoogleSignIn}
            >
              <img className='w-5' src={Google} alt="Google Logo" />
              <span className='text-sm hover:font-bold'>Sign in with Google</span>
            </button>
          }
          <button
            className='border-2 border-gray-200 rounded-xl px-3 py-2 text-sm active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'
            onClick={toggleSignInForm}
          >
            {isSignIn ? "New User ? Sign Up Now" : "Already Registerd ? Sign In Now"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Form
