import {fork} from 'redux-saga/effects';

import {watchIncrementAsync} from './counter';
import {watchApiRequest} from './apiTester';

export default function* rootSaga() {
  yield [
    fork(watchIncrementAsync),
    fork(watchApiRequest)
  ]
}
