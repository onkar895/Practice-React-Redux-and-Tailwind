// Single Selection Accordian

import React, { useState } from 'react'
import data from './data'
const Accordion = () => {

  const [selected, setSelected] = useState(null)

  const handleClick = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  return (
    <>
      <div className='my-44 bg-gray-200 block m-auto w-[50%] p-4 text-center'>
        <div>
          HIIIIIIIIIIIIIIII
        </div>
      </div >
    </>
  )
}

export default Accordion
