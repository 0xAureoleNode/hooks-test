import React from 'react';
import { useState } from 'react';

const Conditionals = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let message;
  isLoggedIn ? (message = 'Welcome aureole') : (message = 'Welcome Guest');
  return (
    <div>
      <h1 className="--text-center --p2">{message}</h1>
    </div>
  );
};

export default Conditionals;
