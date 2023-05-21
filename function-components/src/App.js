import './App.css';
import React, {useEffect, useState} from 'react';

function useMouseMove() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() =>{
    const handler = (event) => {
      const {offsetX, offsetY} = event;

      setX(offsetX);
      setY(offsetY);
    }
    window.addEventListener('mousemove', handler);
    return function () {
      window.removeEventListener('mousemove', handler);
    }
  });

  return [x, y];
}

function MouseMove() {
  const [x, y] = useMouseMove();
  return (
    <h1> X {x}, Y {y}</h1>
  )
}

function App () {
  const [x, y] = useMouseMove();
  return (
    <>
      <MouseMove />
      <h1> Sqaure of mouse move values</h1>
      <h1> X {Math.sqrt(x)}, Y {Math.sqrt(y)} </h1>
    </>
  )
}

export default App;
