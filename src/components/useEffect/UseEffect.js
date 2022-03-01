import { useState, useEffect } from "react";

// On every re-render
// On initial render
// On when a state or prop changes

const UseEffect = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("UseEffect Triggered everytime");
  //   });

  useEffect(() => {
    console.log(`UseEffect Triggered once ${count}`);
  }, [count]);

  //   setTimeout(() => {
  //         console.log("some text");
  //     }, 3000)

  return (
    <div className="--center-all">
      <h1>{count}</h1>
      <button
        className="--btn --btn-primary"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
    </div>
  );
};

export default UseEffect;
