import { SET_MOVIES_LIST } from "../actions/types";

const initialState = []

export const moviesReducer = (state = initialState, {type, payload}) => {
    switch (type){

        case SET_MOVIES_LIST:
            return payload

        default:
            return state
    }
}