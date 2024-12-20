// Single Selection and Multi Accordian

import React, { useState } from 'react'
import data from './data'
const Accordion = () => {

  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleSingleSelection = (getCurrentId) => {
    // console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple]   // Creating a Copy of the Current State : The spread operator [...multiple] is used to create a new array that is a shallow copy of the multiple array. This prevents direct mutation of the state.
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
    console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(copyMultiple)
  }

  console.log(selected, multiple)

  return (
    <>
      <div className='block m-auto w-[100vw] h-[100vh] p-4 text-center font-extrabold shadow-2xl rounded-xl relative'>
        <div className='w-[100vw] md:w-[60vw] absolute top-1/4 left-1/2 transform -translate-x-1/2'>
          <button className='bg-indigo-800 text-white py-3 w-[50%] m-auto hover:bg-indigo-500 mb-5' onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
            {
              enableMultiSelection ? (
                <span>Enable Single Selection</span>
              ) : (
                <span>Enable Multi Selection</span>
              )
            }
          </button>
          <div className='space-y-5'>
            {
              data && data.length > 0 ? (
                data.map((dataItems) => (
                  <div className=' bg-white text-indigo-800 hover:text-indigo-500 cursor-pointer py-3 px-5 border-b-2 border-blue-100 rounded-xl text-start' key={dataItems.id}>
                    <div className={`flex items-center justify-between gap-10`}
                      onClick={
                        enableMultiSelection
                          ? () => handleMultiSelection(dataItems.id) : () => handleSingleSelection(dataItems.id)}>
                      Que: {dataItems.question}
                      <div className='text-2xl'>
                        {
                          enableMultiSelection
                            ? (multiple.indexOf(dataItems.id) !== -1 ? "-" : "+")
                            : (selected === dataItems.id ? "-" : "+")
                        }
                      </div>
                    </div>
                    <div className='text-justify'>
                      {
                        enableMultiSelection ?
                          multiple.indexOf(dataItems.id) !== -1 &&
                          (<h5> Ans: {dataItems.answer}</h5>) :
                          selected === dataItems.id &&
                          (<h5> Ans: {dataItems.answer}</h5>)
                      }
                      {/* {
                      selected === dataItems.id || multiple.indexOf(dataItems.id !== -1
                        ? (<h5> Ans: {dataItems.answer}</h5>)
                        : null
                      )
                    } */}
                    </div>
                  </div>
                ))
              ) : (
                <div>No Data Found !</div>
              )
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default Accordion
