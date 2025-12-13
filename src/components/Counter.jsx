import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1);
    } else {
      alert('Value is less then zero');
    }
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment} className="btn btn-primary mx-2">Increment</button>
      <button onClick={decrement} className="btn btn-secondary mx-2">Decrement</button>
      <button onClick={reset} className="btn btn-danger">Reset</button>
    </>
  )
}

export default Counter;