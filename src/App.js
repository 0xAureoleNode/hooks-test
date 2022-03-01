import React, { useState, createContext } from "react";
import UserList from "./components/propsDrilling/UserList";
import { userData } from "./components/propsDrilling/data";
import UserContext from "./context/userContext";

// 1. Create the context in a seperate file
// 2. Provide the context to the components
// 3. Use the context

function App() {
  const [users, setusers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setusers(newUsers);
  };

  return (
    <UserContext.Provider value={{ users, deleteUser }}>
      <div className="--flex-center ">
        <div className="--width-500px --my --p">
          <h2>Props Drilling</h2>
          <UserList />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
