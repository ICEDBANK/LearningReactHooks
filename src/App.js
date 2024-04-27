import { useState , useEffect } from "react";
import './jm_style.css';

function App() {

  const [count, setCount] = useState(0);
  const [myString, setMyString] = useState('');


  useEffect(() => {

    console.log(count);
    console.log(myString);

  }, [myString , count]);

  const doSomething = (e) => {

    e.preventDefault();
    setCount(count + 1);
    setMyString ("hello " + count);

  }
    
  return (

    <>
      <h2>Understanding useEffects</h2>
      <div className="container">
        <form action="">
          <h1>1</h1>
          <button onClick={doSomething}>Click</button>
        </form>
      </div>

    </>

  );
}

export default App;
