import React, { useState } from 'react';

const Conditionals2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let message = 'Welcome aureole';
  return (
    <div>{isLoggedIn && <h1 className="--text-center --p2">{message}</h1>}</div>
  );
};

export default Conditionals2;
