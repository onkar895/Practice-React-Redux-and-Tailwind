// You are having the button and on click of this button you have to create a random color, HEX color and rgb color.

import React, { useState } from 'react'

const Random = () => {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  return (
    <>
      <div className='w-[100vw] h-[100vh] text-black font-bold block m-auto text-center space-x-10 space-y-5' style={{ backgroundColor: color }}>
        <button className='bg-white px-5 py-1 rounded-md hover:brightness-150'>Create HEX Color</button>
        <button className='bg-white px-5 py-1 rounded-md hover:brightness-150'>Create RGB Color</button>
        <button className='bg-white px-5 py-1 rounded-md hover:brightness-150'>Create Random Color</button>
      </div>
    </>
  )
}

export default Random
