import { combineReducers } from "redux";

import { RECIEVE_DATA } from "actions";

const RECEIVE_DATA_PENDING = "RECEIVE_DATA_PENDING";
const RECEIVE_DATA_FULFILLED = "RECEIVE_DATA_FULFILLED";
const RECEIVE_DATA_REJECTED = "RECEIVE_DATA_REJECTED";

const rDataDefaultState = {
  isLoading: true,
  data: []
};

const receiveData = (state = rDataDefaultState, action) => {
  switch (action.type) {
    case RECEIVE_DATA_PENDING:
    case RECEIVE_DATA_FULFILLED:
    case RECEIVE_DATA_REJECTED:
    case RECIEVE_DATA:
      return {
        data: action.dataPayload,
        isLoading: false
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  receiveData
});

export default rootReducer;
