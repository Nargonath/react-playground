import React from 'react';
import { useSelector } from 'react-redux';

import AddTaskForm from 'features/tasks/AddTaskForm';
import TasksLists from 'features/tasks/TasksList';

export function App() {
  const tasks = useSelector(state => state.tasks);

  return (
    <>
      <AddTaskForm></AddTaskForm>
      <TasksLists tasks={tasks}></TasksLists>
    </>
  );
}
