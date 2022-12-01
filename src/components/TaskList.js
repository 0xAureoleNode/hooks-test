import { Task } from './Task';
import React from 'react';

const TaskList = () => {
  return (
    <div className="container">
      <h2>List of Tasks</h2>
      <ul className="--text-p --fw-bold">
        <Task name={'Task1'} isCompleted={true} />
        <Task name={'Task2'} isCompleted={false} />
        <Task name={'Task3'} isCompleted={true} />
      </ul>
    </div>
  );
};

export default TaskList;
