import './App.css';
import React, {useState} from 'react';

function App () {
  const [value, setValue] = useState(10);
  return (
    <>
      <h1>{value}</h1> 
      <button onClick={() => {
        setValue(value + 1)
      }}>Increment</button>
    </>
  )
}

export default App;
