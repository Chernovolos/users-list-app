import * as ACTION from '../actions/types';
import { put, takeEvery } from 'redux-saga/effects';

async function getPeople() {
    const request = await fetch(ACTION.PEOPLE_URL);
    console.log(request)
    const data = await request.json();
    return data;
}
export function* workerPeople() {
    try {
        const data = yield getPeople();
        yield put({type: ACTION.GET_PEOPLE_SUCCESS, payload: data.results})
    } catch (error) {
        yield put({type: ACTION.GET_PEOPLE_ERROR, payload: error})
    }
}

export default function* watchPeople() {
    yield takeEvery(ACTION.GET_PEOPLE_START, workerPeople);
}
