import { START_DETAILS_FETCHED, COMPLETED_DETAILS_FETCHED, SET_ERROR } from "../actions/types";

const initialState = {
    loading: false,
    details: null
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case START_DETAILS_FETCHED:
            return {
                ...state,
                loading: true
            }

        case COMPLETED_DETAILS_FETCHED:
            return {
                loading: false,
                details: payload
            }

        case SET_ERROR:
            return {
                loading: false,
                details: null
            }

        default:
            return state;
    }
}