import { combineReducers } from "redux";

import { ERROR, RECIEVE_DATA, FETCH, QUERY } from "actions";

const RECEIVE_DATA_PENDING = "RECEIVE_DATA_PENDING";
const RECEIVE_DATA_FULFILLED = "RECEIVE_DATA_FULFILLED";
const RECEIVE_DATA_REJECTED = "RECEIVE_DATA_REJECTED";

const txtQuery = (state = "hello", action) => {
  switch (action.type) {
    case QUERY:
      return action.text;
    default:
      return state;
  }
};

const receiveData = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA_PENDING:
    case RECEIVE_DATA_FULFILLED:
    case RECEIVE_DATA_REJECTED:
    case RECIEVE_DATA:
      return {
        ...state
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  receiveData,
  txtQuery
});

export default rootReducer;
