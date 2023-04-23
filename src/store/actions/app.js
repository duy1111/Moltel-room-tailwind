import actionTypes from "./actionTypes";
import { apiGetCategories } from "../../services/category";
import { apiGetPrices,apiGetArea,apiGetProvince } from "../../services/app";
const getCategories = (payload) => async (dispatch) => {
  try {
    let response = await apiGetCategories(payload);
    
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        data: response.data.data,
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        data: [],
        msg: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_CATEGORIES,
      data: [],
    });
  }
};


const getPrices = () => async (dispatch) => {
  try {
    let response = await apiGetPrices();
    
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PRICES,
        data: response.data.data.sort((a,b) => {
          return +a.order - +b.order
        }),
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_PRICES,
        data: [],
        msg: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_PRICES,
      data: [],
    });
  }
};


const getArea = () => async (dispatch) => {
  try {
    let response = await apiGetArea();
    console.log(response)
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_AREA,
        data: response.data.data.sort((a,b) => {
          return +a.order - +b.order
        }),
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_AREA,
        data: [],
        msg: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_AREA,
      data: [],
    });
  }
};
const getProvince = () => async (dispatch) => {
  try {
    let response = await apiGetProvince();
    console.log(response)
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PROVINCE,
        data: response.data.data || [],
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_PROVINCE,
        data: [],
        msg: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_PROVINCE,
      data: [],
    });
  }
};
export {
    getCategories,getPrices,getArea,getProvince
}