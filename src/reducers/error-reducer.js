import { REMOVE_ERROR, SET_ERROR } from "../actions/types";

const initialState = {
    error: false
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ERROR:
            return {
                error: action.payload,
            }
        
        case REMOVE_ERROR:
            return {
                error: false
            }

        default:
            return state
    }
}