import actionTypes from "../actions/actionTypes";
const initState = {
    categories: [],
    msg:'',
    prices:[],
    areas:[],
}
const appReducer = (state = initState,action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
        

            return{
                ...state,
                categories: action.data || [],
                msg: action.msg || '',
                
            }
        case actionTypes.GET_PRICES:
            return{
                ...state,
                prices: action.data || [],
                msg: action.msg || '',
            }
        case actionTypes.GET_AREA:
            return {
                ...state,
                areas : action.data || [],
                msg : action.msg || '',
            }
        
    
        default:
            return state;
    }
}

export default appReducer