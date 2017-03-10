import {fork} from 'redux-saga/effects';

import {watchIncrementAsync} from './counter';

export default function* rootSaga() {
  yield [
    fork(watchIncrementAsync)
  ]
}
