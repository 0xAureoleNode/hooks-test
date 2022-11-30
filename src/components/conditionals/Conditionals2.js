import { useState } from "react";

// Logical AND (&&) OPERATOR
const Conditionals2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      {isLoggedIn && <h1 className="--text-center --p2">Welcome, Zino</h1>}
      {!isLoggedIn && <h1 className="--text-center --p2">Welcome, Guest</h1>}
    </div>
  );
};

export default Conditionals2;
