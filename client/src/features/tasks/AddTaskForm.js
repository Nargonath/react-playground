import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from './tasksSlice';

export default function AddTaskForm() {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const onTaskNameChange = e => setTaskName(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addTask({ taskName }));
    setTaskName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={taskName} onChange={onTaskNameChange} />
      <button type="submit">Add</button>
    </form>
  );
}
