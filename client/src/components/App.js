import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddTaskForm from 'features/tasks/AddTaskForm';
import TasksList from 'features/tasks/TasksList';
import { fetchTasks } from 'features/tasks/tasksSlice';

export function App() {
  const { tasks, error, isLoading } = useSelector(({ tasks }) => ({
    tasks: tasks.data,
    error: tasks.error,
    isLoading: tasks.isLoading,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <AddTaskForm></AddTaskForm>
      {isLoading ? (
        <p>chargement ...</p>
      ) : (
        <TasksList tasks={tasks}></TasksList>
      )}
    </>
  );
}
