import { useState } from "react";

// if else
const Conditionals = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let message;
  if (isLoggedIn) {
    message = "Welcome, Zino";
    setIsLoggedIn(true);
  } else {
    message = "Welcome, Guest";
  }
  return (
    <div>
      <h1 className="--text-center --p2">{message}</h1>
    </div>
  );
};

export default Conditionals;
