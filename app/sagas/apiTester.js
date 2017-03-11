import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

export function* handleApiRequest(action) {
  try {
    const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', {section_id: action.payload.section_id});
    console.log(response);
    yield put({type: 'API_REQUEST_SUCCEEDED', payload: response.data });
  } catch (e) {
    console.log(e);
    yield put({type: 'API_REQUEST_FAILED', payload: e.message });
  }
}

export function* watchApiRequest() {
  yield takeEvery('API_REQUEST', handleApiRequest);
}
