import { useState , useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);
  

  return (

    <>

      <h1>Understanding useEffect</h1>
      <h2> {count} </h2>
      <button onClick={() => setCount( count + 1 )}>Increment</button>

    </>

  );
}

export default App;
