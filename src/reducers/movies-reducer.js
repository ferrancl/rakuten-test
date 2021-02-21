import { START_MOVIES_LIST, COMPLETED_MOVIES_LIST, SET_ERROR } from "../actions/types";

const initialState = {
    loading: false,
    movies: []
}

export const moviesReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case START_MOVIES_LIST:
            return {
                ...state,
                loading: true
            }

        case COMPLETED_MOVIES_LIST:
            return {
                loading: false,
                movies: payload
            }
            
        case SET_ERROR:
            return {
                loading: false,
                movies: []
            }
    
        default:
            return state
    }
}