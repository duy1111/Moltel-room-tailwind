import actionTypes from "../actions/actionTypes";
const initState = {
    posts: [],
    msg:'',
    count:'',
    newPost:[],
    postOfCurrent:[],
    dataEdit: []
}
const postReducer = (state = initState,action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
        case actionTypes.GET_POST_LIMIT:

            return{
                ...state,
                posts: action.data || [],
                msg: action.msg || '',
                count: action.count || 0
            }
        case actionTypes.GET_NEW_POST:
            return{
                ...state,
                newPost: action.data || [],
                msg: action.msg || '',               
            }
        case actionTypes.GET_POST_ADMIN:
            return{
                ...state,
                postOfCurrent: action.data || [],
                msg: action.msg || '',
                count: action.count || 0
            }
        case actionTypes.EDIT_DATA:
            return{
                ...state,
                dataEdit: action.data || [],
            }
        case actionTypes.RESET_EDIT_DATA:
            return{
                ...state,
                dataEdit: [],
            }
        default:
            return state;
    }
}

export default postReducer