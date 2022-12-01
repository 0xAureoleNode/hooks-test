import React from 'react';
import './Task.css';

export const Task = ({ name, isCompleted }) => {
  if (isCompleted) {
    return (
      <del>
        <li className="complete">{name} ✓</li>
      </del>
    );
  }
  return <li>{name}</li>;
};
