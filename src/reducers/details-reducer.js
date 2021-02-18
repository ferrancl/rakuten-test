import { SET_DETAILS_FETCHED } from "../actions/types";

const initialState = {
    detailsFetched: []
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_DETAILS_FETCHED:
            return {
                detailsFetched: action.payload
            }
        default:
            return state;
    }
}