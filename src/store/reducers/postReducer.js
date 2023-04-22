import actionTypes from "../actions/actionTypes";
const initState = {
    posts: [],
    msg:'',
    count:'',
    newPost:[],
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
    
        default:
            return state;
    }
}

export default postReducer