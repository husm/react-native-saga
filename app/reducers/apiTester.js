import * as types from '../actions/actionTypes';

const initialState = {
  apiMsg: ''
};

export default function apiTester(state = initialState, action = {}) {
  switch (action.type) {
    case types.API_REQUEST_SUCCEEDED:
      return {
        ...state,
        apiMsg: 'API called succeeded!'
      };
    case types.API_REQUEST_FAILED:
      return {
        ...state,
        apiMsg: 'API called failed!'
      };
    default:
      return state;
  }
}
