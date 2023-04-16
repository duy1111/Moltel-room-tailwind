import actionTypes from "../actions/actionTypes";
const initState = {
    posts: [],
    msg:'',
    count:''
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
        
    
        default:
            return state;
    }
}

export default postReducer