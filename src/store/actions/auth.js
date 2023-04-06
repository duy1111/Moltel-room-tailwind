import actionTypes from "./actionTypes";
import { apiRegister } from "../../services/auth";

let register = (payload) => async(dispatch) => {
    try{
        let response = await apiRegister(payload)
        console.log('check res redux',response)
        if(response?.data.err === 0){
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token
            })
        }
        else{
            dispatch({
                type:actionTypes.REGISTER_FAIL,
                data: response.data.msg
            })
        }
    }catch(e){
        dispatch({
            type:actionTypes.REGISTER_FAIL,
            data: null
        })
    }
}

export {
    register
}