import {moviesReducer} from '../'
import { START_MOVIES_LIST, COMPLETED_MOVIES_LIST } from '../../actions/types'

describe('movie reducer', () => {
    test('it is returning the initial state correctly', () => {
        expect(moviesReducer(undefined, {})).toEqual({
            loading: false,
            movies: []
        })
    })

    test('it is managing correctly START_MOVIES_LIST', () => {
        expect(moviesReducer(undefined, {type: START_MOVIES_LIST})).toEqual({
            loading: true,
            movies: []
            
        })
    })

    test('it is managing correctly COMPLETED_MOVIES_LIST', () => {
        let payload = Math.random()

        expect(moviesReducer(undefined, {type: COMPLETED_MOVIES_LIST, payload})).toEqual({
            loading: false,
            movies: [payload]    
        })
    })
})
