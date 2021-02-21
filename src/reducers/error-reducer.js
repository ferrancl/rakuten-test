import { REMOVE_ERROR, SET_ERROR } from "../actions/types";
import { ERROR_TEXT } from "../constants";

const initialState = {
    status: null,
    message: null
}

export const errorReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case SET_ERROR:
            return {
                status: payload,
                message: ERROR_TEXT
            }
        
        case REMOVE_ERROR:
            return {
                status: null,
                message: null
            }

        default:
            return state
    }
}