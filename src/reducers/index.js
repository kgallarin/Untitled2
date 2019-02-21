import { combineReducers } from "redux";

import { RECIEVE_DATA } from "actions";

const FETCH_PENDING = "FETCH_PENDING";
const FETCH_FULFILLED = "FETCH_FULFILLED";

const prDefaultState = {
  isLoading: false,
  error: ""
};
const promiseReducer = (state = prDefaultState, action) => {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        isLoading: true
      };
    case FETCH_FULFILLED:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};

const rDataDefaultState = {
  isLoading: true,
  data: []
};

const receiveData = (state = rDataDefaultState, action) => {
  switch (action.type) {
    case RECIEVE_DATA:
      return {
        data: [...state.data, ...action.dataPayload]
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  receiveData,
  promiseReducer
});

export default rootReducer;
