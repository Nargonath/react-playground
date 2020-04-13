import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import tasksReducer from 'features/tasks/tasksSlice';

const store = configureStore({
  reducer: combineReducers({ tasks: tasksReducer }),
});

export { store };
