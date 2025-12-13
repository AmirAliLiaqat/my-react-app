import { useState, useEffect } from "react";

const SimpleClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <h2 style={{ textAlign: "center", marginTop: "40px" }}>
      {time.toLocaleTimeString()}
    </h2>
  );
}

export default SimpleClock;
