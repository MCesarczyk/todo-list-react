import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from './features/tasks/tasksSlice';
import languageReducer from './features/languages/languageSlice';
import { tasksSaga } from "./features/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        languages: languageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(tasksSaga);

export default store;