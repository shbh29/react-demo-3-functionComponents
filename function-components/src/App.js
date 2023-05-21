import './App.css';
import React, {useState} from 'react';

function App () {
  const [value, setValue] = useState(65);
  const [asciiCode, setAsciiCode] = useState(value);
  return (
    <>
      <h1>{value}</h1> 
      <h1>{String.fromCodePoint(asciiCode)}</h1> 
      <button onClick={() => {
        setValue(value + 1);
        setAsciiCode(asciiCode + 1);
      }}>Increment</button>
    </>
  )
}

export default App;
