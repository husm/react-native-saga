import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
  // apiMsg: ''
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    // case types.API_REQUEST_SUCCEEDED:
    //   return {
    //     ...state,
    //     apiMsg: 'API called succeeded!'
    //   };
    // case types.API_REQUEST_FAILED:
    //   return {
    //     ...state,
    //     apiMsg: 'API called failed!'
    //   };
    default:
      return state;
  }
}
