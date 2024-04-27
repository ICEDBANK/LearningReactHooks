import { useState , useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  //useEffect takes two parameters 1.) anonomous arrow Function and an Array

  useEffect(() => {
    
    console.log(count);

  }, [ // The dependency Array


  ])
  

  return (

    <>

      <h1>Understanding useEffect</h1>
      <h2> {count} </h2>
      <button onClick={() => setCount( count + 1 )}>Increment</button>

    </>

  );
}

export default App;
