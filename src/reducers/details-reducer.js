import { SET_DETAILS_FETCHED } from "../actions/types";

const initialState = []

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case SET_DETAILS_FETCHED:
            return [...state, payload]

        default:
            return state;
    }
}