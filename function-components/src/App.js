import './App.css';
import React, {useRef} from 'react';

function App() {
  const inputTextRef = useRef(null);

  const onButtonClick = () => {
    inputTextRef.current.focus();
  }

  return (
    <>
      <input ref={inputTextRef} type='text' />
      <button onClick={onButtonClick}>Focus on Button</button>
    </>
  )
}

export default App;
