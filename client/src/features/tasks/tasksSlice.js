import { createSlice } from '@reduxjs/toolkit';

import { getTasks } from 'api/tasks';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const { reducer, actions } = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasksStart(state) {
      state.isLoading = true;
    },
    getTasksSuccess(state, { payload }) {
      state.data = payload.data;
      state.error = null;
      state.isLoading = false;
    },
    getTasksFailed(state, { payload }) {
      state.data = [];
      state.isLoading = false;
      state.error = payload.error;
    },
    addTask(state, action) {
      state.push(action.payload.taskName);
    },
  },
});

export const {
  addTask,
  getTasksFailed,
  getTasksStart,
  getTasksSuccess,
} = actions;
export default reducer;

export const fetchTasks = () => async dispatch => {
  let tasks = null;
  try {
    dispatch(getTasksStart());
    tasks = await getTasks();
  } catch (error) {
    dispatch(getTasksFailed({ error }));
    return;
  }

  dispatch(getTasksSuccess({ data: tasks }));
};
