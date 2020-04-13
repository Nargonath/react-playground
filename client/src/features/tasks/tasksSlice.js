import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    fetchTasks(state) {
      return state;
    },
    addTask(state, action) {
      state.push(action.payload.taskName);
    },
  },
});

export const { fetchTasks, addTask } = actions;
export default reducer;
