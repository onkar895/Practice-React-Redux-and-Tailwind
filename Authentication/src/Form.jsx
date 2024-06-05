/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Google from './assets/google.png'

const Form = () => {

  const [isSignIn, setIsSignIn] = useState(true)

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className='bg-white w-[65%] p-10 rounded-3xl border-2 border-gray-200 shadow-2xl'>
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
              placeholder='Enter your username' />
          </div>
        }
        <div className='mt-2'>
          <label className='text-sm font-medium'>Email</label>
          <input
            className='w-full border-2 border-gray-200 rounded-lg px-3 py-2 bg-transparent text-sm'
            type="text"
            placeholder='Enter your email' />
        </div>
        <div className='mt-2'>
          <label className='text-sm font-medium'>Password</label>
          <input
            className='w-full border-2 border-gray-200 rounded-lg px-3 py-2 bg-transparent text-sm'
            type="password"
            placeholder='Enter your password' />
        </div>
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
          <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out px-3 py-2 rounded-xl bg-gradient-to-tr from-violet-400 to-pink-400 text-white text-md font-bold'>{isSignIn ? "Sign in" : "Sign up"}</button>
          {
            isSignIn &&
            <button className='flex border-2 border-gray-200 rounded-xl px-3 py-2 justify-center items-center gap-x-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'>
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
    </div>
  )
}

export default Form
