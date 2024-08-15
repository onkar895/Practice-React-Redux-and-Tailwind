import React from 'react'
import Accordion from '../Components/Accordian/Accordion'
import Random from '../Components/Random-Color-Generator/Random'

const Homepage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Accordion />
      <Random />
    </div>
  )
}

export default Homepage
