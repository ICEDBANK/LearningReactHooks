// Importing useState, useEffect, and useRef hooks from React
import { useState , useEffect, useRef } from "react";

// Importing custom CSS styles from 'style.css' file
import './style.css';

// Define the functional component App
function useRefExample() {

  // Define state variable 'count' and its setter function
  const [count, setCount] = useState(0);

  // Create a ref using the useRef hook to access DOM elements
  const myFill = useRef();

  // Function to handle button click event
  function handleClick (){

    // If 'count' is less than 100, increment it by 5
    if (count < 100){
      setCount(count + 5);
    } else { // If 'count' reaches 100, reset it to 0
      setCount(0);
    }
  }

  // useEffect hook to update the width of the progress bar based on 'count' value
  useEffect(() => {
    // Access the DOM element referenced by 'myFill' and set its width based on 'count' value
    myFill.current.style.width = `${count}%`;
  },[count]);
    
  // JSX markup
  return (
    <>
      {/* Container */}
      <div className="container">
        {/* Heading */}
        <h2>Understanding useEffects / useState / useRef</h2>
        {/* Progress bar */}
        <div className="progress-bar">
          {/* Progress fill */}
          <div className="progress-fill" ref={myFill}></div>
          {/* Progress number (not implemented in this code) */}
          <div className="progress-number"></div>
        </div>
        {/* Button to trigger 'handleClick' function */}
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
}
/*
This component uses useState hook to manage the state variable count.
It also uses the useRef hook to create a reference (myFill) to access the DOM element representing the progress bar fill.
The handleClick function updates the count state. If count is less than 100, it increments count by 5. When count reaches 100, it resets count to 0.
The useEffect hook updates the width of the progress bar (myFill) based on the value of count. It runs whenever count changes.
JSX markup renders a progress bar with a fill whose width is dynamically updated based on the value of count, and a button to trigger the handleClick function.
*/
// Export the App component
export default useRefExample;
