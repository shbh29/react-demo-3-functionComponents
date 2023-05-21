import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello World!');
  useEffect(()=> {
    document.title = `${text} - ${count}`
  }, [text])
  return (
    <>
      <input type='text' onChange={(event) => {
        setText(event.target.value);
      }}></input>
      <button onClick={() => {
        setCount(count + 1);
      }}>Click</button>
      <h1>{text} - {count}</h1>
    </>
  )
}

export default App;
