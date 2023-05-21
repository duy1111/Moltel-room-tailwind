import actionTypes from "./actionTypes";

import { apiCurrentUser,apiGetUserLimit } from "../../services/user";

const getCurrentUser = () => async (dispatch) => {
    try {
      let response = await apiCurrentUser();
      if (response?.data.err === 0) {
        dispatch({
          type: actionTypes.GET_CURRENT,
          data: response.data.data,
          msg: response.data.msg,
        });
      } else {
        dispatch({
          type: actionTypes.GET_CURRENT,
          data: [],
          msg: response.data.msg,
        });
        dispatch({
          type: actionTypes.LOGOUT
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_CURRENT,
        data: [],
        msg: e,
      });
      dispatch({
        type: actionTypes.LOGOUT
      });
    }
  };
  const getUserLimit = (query) => async (dispatch) => {
    try {
      let response = await apiGetUserLimit(query);
      if (response?.data.err === 0) {
        dispatch({
          type: actionTypes.GET_USER_LIMIT,
          data: response.data.data?.rows,
          count:response.data.data?.count,
          msg: response.data.msg,
        });
      } else {
        dispatch({
          type: actionTypes.GET_USER_LIMIT,
          data: [],
          msg: response.data.msg,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_USER_LIMIT,
        data: [],
      });
    }
  }
  export{
    getCurrentUser,getUserLimit
  }