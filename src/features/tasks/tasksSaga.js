import { call, put, delay, takeLatest, takeEvery, select } from "redux-saga/effects";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, setTasks, selectTasks, setTasksState } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";


function* fetchExampleTasksHandler() {
    try {
        yield put(setTasksState("loading"));
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(setTasksState("done"));
    } catch (error) {
        yield call(alert, "Something bad happened!");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}