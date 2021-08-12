import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        state: "none"
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: task }) => {
            const index = tasks.findIndex(({ id }) => id === task);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }, { payload: task }) => {
            tasks.forEach((task, index) => {
                tasks[index].done = true;
            })
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        setTasksState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
    setTasksState
} = tasksSlice.actions;

export const selectTasks = state => state.tasks.tasks;
export const selectHideDone = state => state.tasks.hideDone;
export const selectState = state => state.tasks.state;
export const selectIfAllDone = state => state.tasks.tasks.every(({ done }) => done);

export const getTasksById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
}


export default tasksSlice.reducer;