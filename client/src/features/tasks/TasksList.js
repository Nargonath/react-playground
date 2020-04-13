import React from 'react';

export default function TasksList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}
