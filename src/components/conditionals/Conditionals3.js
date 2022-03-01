import { useState } from "react";
import "./Conditionals3.css";

// Ternary Operator
const Conditionals3 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <div className={isLoggedIn ? "user" : "guest"}>
        {isLoggedIn ? (
          <h5 className="--text-center --p2">Welcome, Zino</h5>
        ) : (
          <h5 className="--text-center --p2">Welcome, Guest</h5>
        )}
      </div>
      <div className="--center-all">
        <button className="--btn --btn-primary" onClick={toggleLogin}>
          {isLoggedIn ? "LogOut" : "LogIn"}
        </button>
      </div>
    </>
  );
};

export default Conditionals3;
