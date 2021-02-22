import { START_DETAILS_FETCHED, COMPLETED_DETAILS_FETCHED, SET_ERROR } from "../actions/types";

const initialState = null

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case COMPLETED_DETAILS_FETCHED:
            return payload

        case SET_ERROR:
            return null

        default:
            return state;
    }
}