import React from 'react'
import Nav from './Responsive NavBar/Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <div className='my-36 bg-black text-white font-bold block md:w-[50%] m-auto text-center py-5  text-2xl'>
        <h1>Different Responsive Navigation Bar and Basic TodoList App</h1>
      </div>
    </div>
  )
}

export default Home
