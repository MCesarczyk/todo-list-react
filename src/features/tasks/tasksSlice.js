import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: (state, action) => {
            state.hideDone = !state.hideDone;
        },
    },
});

export const { addTask, toggleHideDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

console.log(tasksSlice.reducer({ tasks: [] }, addTask({
    content: "jedziemy",
    done: true
})));