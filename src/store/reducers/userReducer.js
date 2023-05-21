import actionTypes from "../actions/actionTypes";

const initState = {
  currentData: {},
  users:[],
  count:'',

};

const userReducers = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT:
      return {
        ...state,
        currentData : action.data || {}
      }
    case actionTypes.GET_USER_LIMIT:
      return {
        ...state,
        users: action.data || [],
        count: action.count || 0

      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        currentData: {}
      }
    default:
      return state;
  }
};

export default userReducers;
