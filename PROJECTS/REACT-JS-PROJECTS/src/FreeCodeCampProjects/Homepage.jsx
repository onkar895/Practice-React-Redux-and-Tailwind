import React from 'react'
import Accordion from '../Components/Accordian/Accordion'
import Random from '../Components/Random-Color-Generator/Random'

const Homepage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-36 space-y-20'>
      <Accordion />
      <Random />
    </div>
  )
}

export default Homepage
