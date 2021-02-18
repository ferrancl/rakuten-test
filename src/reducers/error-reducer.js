import { REMOVE_ERROR, SET_ERROR } from "../actions/types";

const initialState = {
    error: undefined
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ERROR:
            return {
                error: action.payload,
            }
        
        case REMOVE_ERROR:
            return {
                error: undefined
            }

        default:
            return state
    }
}