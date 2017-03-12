import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';

export function* handleIncrementAsync() {
  yield delay(1000);
  yield put({type: 'INCREMENT'});
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', handleIncrementAsync);
}
