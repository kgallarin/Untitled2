import axios from "axios";

export const ERROR = "ERROR";
export const RECIEVE_DATA = "RECIEVE_DATA";
export const FETCH = "FETCH";

export const QUERY = "QUERY";

// export const query = text => ({
//   type: QUERY,
//   text
// });

export const fetcherAPI = () => {
  const settings = {
    params: {
      gender: "female"
    }
  };
  return dispatch => {
    return dispatch({
      type: FETCH,
      payload: axios.get(process.env.REACT_APP_USERGEN, settings)
    })
      .then(({ value, action }) => {
        dispatch(receiveData(value));
        // console.log(action.type, " :=> action");
      })
      .catch(e => {
        dispatch(errHandler(e));
      });
  };
};

export const errHandler = err => ({
  type: ERROR,
  err
});

export const receiveData = value => ({
  type: RECIEVE_DATA,
  dataPayload: value.data.results
});
