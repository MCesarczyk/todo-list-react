import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './features/tasks/tasksSlice';
import languageReducer from './features/languages/languageSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        languages: languageReducer,
    },
});