import { all } from 'redux-saga/effects';
import countWatcher from './countSaga';

export function* rootWatcher() {
    yield all([countWatcher()])
}
