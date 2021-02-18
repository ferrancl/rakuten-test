import { SET_MOVIES_LIST } from "../actions/types";

const initialState = {
    moviesList: []
}

export const moviesReducer = (state= initialState, action) => {
    switch (action.type){
        case SET_MOVIES_LIST:
            return {
                moviesList: action.payload
            }
        default:
            return state
    }
}