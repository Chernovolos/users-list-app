import { put, takeEvery } from 'redux-saga/effects';
import {decrementCreator, incrementCreator} from "../actions/counterAction";
import * as ACTION from '../actions/types';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementCreator()) //передаем action
}

function* decrementWorker() {
    yield delay(1000)
    yield put(decrementCreator()) //передаем action
}

export default function* countWatcher() {
    yield takeEvery(ACTION.ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ACTION.ASYNC_DECREMENT, decrementWorker)
}
