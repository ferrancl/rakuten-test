import { START_DETAILS_FETCHED, COMPLETED_DETAILS_FETCHED} from "../actions/types";

const initialState = {
    loading: false,
    details: []
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
                details: [...state.details, payload]
            }

        default:
            return state;
    }
}