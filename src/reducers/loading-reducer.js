import { FINISH_LOADING, START_LOADING } from "../actions/types"

const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type){
        case START_LOADING:
            return {
                loading: true
            }
        
        case FINISH_LOADING:
            return {
                loading: false
            }

        default:
            return state
    }
}