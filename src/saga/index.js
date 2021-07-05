import { all } from 'redux-saga/effects';
import watchPeople from './peopleSaga';

export function* rootWatcher() {
    yield all([watchPeople()])
}
