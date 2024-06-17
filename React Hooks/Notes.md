## useState and useEffect :

-   **Step 1:** Importing and Using State Hooks :

First, let's import the necessary hooks from React:

```js
import React, { useState, useEffect } from "react";
```

-   Then, we declare two pieces of state using the useState hook:

```js
const [scrollPosition, setScrollPosition] = useState(0);
const [isScrolled, setIsScrolled] = useState(false);
```

### What is useState?

`**useState** is a React hook that lets you add state to a functional component. It takes an initial state as an argument and returns an array with two elements:`

1. The current state value.
2. A function that updates the state.

Here, **scrollPosition** holds the current vertical scroll position (initially 0), and **isScrolled** is a boolean that indicates whether the scroll position is greater than a certain threshold (initially false).

-   **Step 2:** Setting Up an Effect :
    Next, we set up a side effect using the useEffect hook:

```js
useEffect(() => {
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);

        // Check if scroll position is greater than a certain threshold
        setIsScrolled(position > 100);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [scrollPosition]); // Only re-run the effect if scrollPosition changes
```

### What is useEffect?

`**useEffect** is a React hook that lets you perform side effects in functional components. It can be thought of as a combination of **componentDidMount, componentDidUpdate, and componentWillUnmount** in class components.`

-   Step 3: Defining the handleScroll Function
    Inside useEffect, we define a function called handleScroll:

```js
const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    // Check if scroll position is greater than a certain threshold
    setIsScrolled(position > 100);
};
```

This function does two things:

1. It gets the current scroll position using window.scrollY and updates the scrollPosition state with this value.
2. It checks if the position is greater than 100. If it is, it sets isScrolled to true; otherwise, it sets it to false.

-   **Step 4:** Attaching and Cleaning Up the Event Listener :
    We then attach the handleScroll function as an event listener to the window's scroll event:

```js
window.addEventListener("scroll", handleScroll);
```

This means that every time the user scrolls, the handleScroll function will be called.

To prevent memory leaks and potential performance issues, we clean up the event listener when the component is unmounted or when scrollPosition changes:

```
return () => {
window.removeEventListener('scroll', handleScroll);
};
```

-   **Step 5:** Dependency Array :
    Finally, useEffect has a dependency array [scrollPosition]. This means the effect will re-run every time scrollPosition changes. However, in this specific case, it might be better to leave the dependency array empty [] since we only want to set up the scroll event listener once, not every time the scroll position changes.

Corrected UseEffect for Best Practice :

Given the actual behavior we want (set up and clean up the scroll event listener once), the dependency array should be empty:

```js
useEffect(() => {
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);

        // Check if scroll position is greater than a certain threshold
        setIsScrolled(position > 100);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []); // Empty array means this effect runs only once after the initial render
```

### Summary :

1. **State Initialization:** scrollPosition starts at 0, and isScrolled starts at false.
2. **Effect Setup:** The useEffect hook sets up an event listener for the scroll event.
3. **Handle Scroll:** When the user scrolls, handleScroll updates the scroll position and sets isScrolled based on whether the position is greater than 100.
4. **Cleanup:** The effect cleans up the event listener when the component unmounts to avoid memory leaks.

**This code effectively tracks the scroll position and updates the component state based on whether the user has scrolled past a certain point.**
