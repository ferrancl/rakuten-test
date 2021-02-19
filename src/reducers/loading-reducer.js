import { FINISH_LOADING, START_LOADING } from "../actions/types"

const initialState = false

export const loadingReducer = (state = initialState, {type}) => {
    switch (type){
        case START_LOADING:
            return true
        
        case FINISH_LOADING:
            return false

        default:
            return state
    }
}