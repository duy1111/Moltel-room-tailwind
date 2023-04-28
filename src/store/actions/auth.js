import actionTypes from "./actionTypes";
import { apiRegister, apiLogin } from "../../services/auth";

let register = (payload) => async (dispatch) => {
  try {
    let response = await apiRegister(payload);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};

let login = (payload) => async (dispatch) => {
  try {
    let response = await apiLogin(payload);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
  }
};
const logout = () => ({
  type: actionTypes.LOGOUT
})
export { register, login ,logout};
