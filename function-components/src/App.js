import './App.css';
import React, {useReducer} from 'react';

function counterReducer(state, action) {
  switch(action) {
    case "RESET":
      return { count: 0};
    case "INC":
      return {count: state.count + 1};
    case 'DEC':
      return {count: state.count - 1};
    default:
      throw new Error("Invalid action");
  }
}


function Counter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, {count: 0})
  return (
    <div class='App'>
      <h1> {state.count}</h1>
      <button onClick={() => {
        dispatch("INC")
      }}>Inc</button>
      <button onClick={() => (
        dispatch("RESET")
      )}>Reset</button>
      <button onClick={() => (
        dispatch("DEC")
      )}>Dec</button>
    </div>
  )
}

export default Counter;
