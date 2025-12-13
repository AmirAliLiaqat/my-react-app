import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="mt-5">
      <h2>Counter: {count}</h2>
      <button className="btn btn-primary" onClick={increment}>Increase</button>
      <button className="btn btn-secondary" onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
      <button className="btn btn-danger" onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  )
}

export default Counter;