import React, { useState } from 'react';
import './ConditionalsCss.css';

const ConditionalsCss = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <div className={isLoggedIn ? 'user' : 'guest'}>ConditionalsCss</div>;
};

export default ConditionalsCss;
