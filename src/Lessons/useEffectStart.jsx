// Importing useState and useEffect hooks from React
import { useState , useEffect } from "react";

// Define the functional component App
function useEffectStart() {

  // Define state variable count and its setter function setCount, initial value is 0
  const [count, setCount] = useState(0);

  // useEffect hook is used to perform side effects in function components
  // It takes two parameters: a function and an array of dependencies

  useEffect(() => { // Arrow function to execute the side effect
    
    // This side effect logs the double of count to the console
    console.log(count * 2);

    // This effect will run whenever the count state changes
    // If the count state doesn't change, this effect won't run again
    // This behavior is determined by the dependency array passed as the second argument

  }, [ // The dependency array containing variables that trigger the effect when they change

    count // The effect depends on the count state variable

  ])
  

  return (
    // JSX markup
    <>
      {/* Heading */}
      <h1>Understanding useEffect</h1>
      
      {/* Display the value of count */}
      <h2> {count} </h2>
      
      {/* Button to increment count */}
      <button onClick={() => setCount( count + 1 )}>Increment</button>
    </>
  );
}

// Export the App component
export default useEffectStart;
