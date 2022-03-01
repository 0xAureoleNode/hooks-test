import { useRef, useEffect } from "react";

// Target DOM nodes/elements
// Preserve values during re-render

const UncontrolledInputs = () => {
  const nameInputRef = useRef(null);
  const jobInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredJob = jobInputRef.current.value;
    console.log(enteredName, enteredJob);
  };

  useEffect(() => {
    jobInputRef.current.focus();
  }, []);

  // console.log(nameInputRef);

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Controlled Inputs</h1>
      <div className="--flex-center">
        <div className="--card --bg-light --width-500px --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" ref={nameInputRef} />
            </div>
            <div>
              <label htmlFor="Job">Job: </label>
              <input type="text" name="job" ref={jobInputRef} />
            </div>
            <button type="submit" className="--btn --btn-block">
              Submit User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledInputs;
