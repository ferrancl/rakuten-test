import { REMOVE_ERROR, SET_ERROR } from "../actions/types";

const initialState = null

export const errorReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case SET_ERROR:
            return payload
        
        case REMOVE_ERROR:
            return null

        default:
            return state
    }
}