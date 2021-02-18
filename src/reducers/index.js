import { combineReducers } from 'redux'
import {detailsReducer} from './details-reducer'
import {errorReducer} from './error-reducer'
import {loadingReducer} from './loading-reducer'
import {moviesReducer} from './movies-reducer'

export const rootReducer = combineReducers({
    loading: loadingReducer,
    error: errorReducer,
    movies: moviesReducer,
    details: detailsReducer
})

