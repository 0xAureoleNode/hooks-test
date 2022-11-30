import { useState, useReducer } from "react";
import { countReducer } from "./countReducer";

// dispatch - replaces setCount() and tells the reducer function what to do
// payload - sends some information to the reducer function

const initialState = {
  count: 0,
};

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleSubtract = () => {
    const id = "12345";
    dispatch({
      type: "SUBTRACT",
      payload: id,
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
    });
  };

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
        <h3>React Counter App</h3>

        <h1>{state.count}</h1>

        <div className="buttons --flex-center">
          <button className=" --btn --btn-danger" onClick={handleSubtract}>
            Subtract
          </button>
          <button className=" --btn" onClick={handleReset}>
            Reset
          </button>
          <button className=" --btn --btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
