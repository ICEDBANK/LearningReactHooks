// Importing useEffect and useState hooks from React
import { useEffect, useState } from 'react';

// Importing custom CSS styles from 'timer_style.css' file
import './timer_style.css';

// Define the functional component App
function App() {
  // Define state variables for seconds, minutes, and isTimerRunning
  const [seconds, setSeconds] = useState(0); // State for seconds in the timer
  const [minutes, setMinutes] = useState(0); // State for minutes in the timer
  const [isTimerRunning, setTimerRunning] = useState(false); // State to track if the timer is running, initially set to false

  // useEffect hook to manage the timer functionality
  useEffect(() => {
    let myTimer;
    if (isTimerRunning) {
      // If the timer is running, create an interval to update the timer
      myTimer = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            // If seconds reach 59, reset to 0 and increment minutes
            setMinutes(prevMinutes => prevMinutes + 1); // Increment minutes
            return 0; // Reset seconds to 0
          } else {
            // Otherwise, increment seconds
            return prevSeconds + 1;
          }
        });
      }, 1000); // Update timer every second (1000 milliseconds)
    }

    // Cleanup function to clear the interval when the component unmounts or when the dependency array changes
    return () => clearInterval(myTimer);
  }, [isTimerRunning]); // Dependency array containing isTimerRunning

  // Function to toggle the timer state between running and paused
  const toggleTimer = () => {
    setTimerRunning(prevState => !prevState); // Toggle the value of isTimerRunning
  };

  // JSX markup
  return (
    <>
      {/* Heading for the timer */}
      <h1><span>React Hooks: Creating A Simple Timer With useEffect plus Coding Challenge</span></h1>
      {/* Form to prevent default form submission behavior */}
      <form onSubmit={e => e.preventDefault()}>
        {/* Display the timer */}
        <h2>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
        {/* Button to toggle the timer */}
        <button onClick={toggleTimer}>{isTimerRunning ? 'Pause' : 'Start'}</button>
      </form>
    </>
  );
}

// Export the App component
export default App;
