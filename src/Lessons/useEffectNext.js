// Importing useState and useEffect hooks from React
import { useState , useEffect } from "react";

// Importing custom CSS styles from 'jm_style.css' file
import './jm_style.css';

// Define the functional component App
function useEffectNext() {

  // Define state variables 'count' and 'myString' along with their setter functions
  const [count, setCount] = useState(0);
  const [myString, setMyString] = useState('');

  // useEffect hook is used to perform side effects in function components
  // It takes two parameters: a function and an array of dependencies

  useEffect(() => {
    // Side effect function that logs the current values of 'count' and 'myString'
    console.log(count);
    console.log(myString);

    // This effect will run whenever 'count' or 'myString' state changes
    // The effect depends on both 'count' and 'myString' state variables

  }, [myString , count]);

  // Function to handle button click event
  const doSomething = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Update 'count' state by incrementing its value
    setCount(count + 1);

    // Update 'myString' state by concatenating 'hello' with the current value of 'count'
    setMyString("hello " + count);
  }
    
  // JSX markup
  return (
    <>
      {/* Heading */}
      <h2>Understanding useEffects</h2>

      {/* Container with form */}
      <div className="container">
        <form action="">
          {/* Displaying the value of 'count' inside a heading */}
          <h1>{count}</h1>

          {/* Button to trigger 'doSomething' function on click */}
          <button onClick={doSomething}>Click</button>
        </form>
      </div>
    </>
  );
}

// This component uses useState hook to manage two state variables: count and myString.
// The useEffect hook is used to log the current values of count and myString whenever either of them changes.
// The useEffect hook specifies [myString, count] as its dependency array, meaning it will run whenever either myString or count changes.
// The doSomething function updates the state variables count and myString when the button is clicked.
// The JSX markup renders a heading to display the value of count, and a button to trigger the doSomething function.

// Export the App component
export default useEffectNext;
