import React, { useState, useEffect } from 'react'

const [scrollPosition, setScrollPosition] = useState(0)
const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)

    // Check if scroll position is greater than a certain threshold
    setIsScrolled(position > 100)
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll)

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [scrollPosition]); // Only re-run the effect if scrollPosition changes
