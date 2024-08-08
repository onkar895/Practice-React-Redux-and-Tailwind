// You are having the button and on click of this button you have to create a random color, HEX color and rgb color.

import React, { useState } from 'react'

const [typeOfColor, setTypeOfColor] = useState('hex')
const [color, setColor] = useState('#000000')

const Random = () => {
  return (
    <>
      <div className={`w-[100vw] h-[100vh] bg-${color}`}>
        <button>Create HEX Color</button>
        <button>Create RGB Color</button>
        <button>Create Random Color</button>
      </div>
    </>
  )
}

export default Random
