import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const subtractHandler = () => {
    setCount(count - 1);
  };
  const addHandler = () => {
    setCount((count) => count + 1);

    // have previous state
  };
  const resetHandler = () => {
    setCount(0);
  };

  let color = '#444';
  count >= 1
    ? (color = 'blue')
    : count < 0
    ? (color = 'red')
    : (color = '#444');
  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2">
        <h3>React Counter App</h3>
        <h1 className="count" style={{ color: color }}>
          {count}
        </h1>
        <div className="buttons --flex-center">
          <button
            className="subtract --btn --btn-danger"
            onClick={subtractHandler}
          >
            Subtract
          </button>
          <button className="reset --btn" onClick={resetHandler}>
            Reset
          </button>
          <button className="add --btn --btn-primary" onClick={addHandler}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
