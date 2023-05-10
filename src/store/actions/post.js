import actionTypes from "./actionTypes";
import { apiGetPosts,apiGetPostsLimit,apiGetNewPost,apiGetPostsLimitAdmin } from "../../services/post";

const getPosts = (payload) => async (dispatch) => {
  try {
    let response = await apiGetPosts(payload);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        data: response.data.data,
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        data: [],
        msg: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_POSTS,
      data: [],
    });
  }
};

const getPostsLimit = (query) => async (dispatch) => {
  try {
    let response = await apiGetPostsLimit(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POST_LIMIT,
        data: response.data.data?.rows,
        count:response.data.data?.count,
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_LIMIT,
        data: [],
        msg: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_POST_LIMIT,
      data: [],
    });
  }
};

const getNewPost = () => async (dispatch) => {
  try {
    let response = await apiGetNewPost();
    
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_NEW_POST,
        data: response.data.data,
        count:response.data.data,
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_NEW_POST,
        data: [],
        msg: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_NEW_POST,
      data: [],
    });
  }
};
const getPostsAdmin = (query) => async (dispatch) => {
  try {
    let response = await apiGetPostsLimitAdmin(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POST_ADMIN,
        data: response.data.data?.rows,
        count:response.data.data?.count,
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_ADMIN,
        data: [],
        msg: response.data.msg,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_POST_ADMIN,
      data: [],
    });
  }
};
const getPostsData = (data) => ({
  type: actionTypes.EDIT_DATA,
  data:data
});
const resetPostsData = () => ({
  type: actionTypes.RESET_EDIT_DATA,
  
});
export {
  getPosts,getPostsLimit,getNewPost,getPostsAdmin,getPostsData,resetPostsData
}