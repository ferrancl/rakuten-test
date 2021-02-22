import {moviesReducer} from '../'
import { COMPLETED_MOVIES_LIST, SET_ERROR } from '../../actions/types'

describe('movie reducer', () => {
    test('it is returning the initial state correctly', () => {
        expect(moviesReducer(undefined, {})).toEqual([])
    })

    test('it is managing correctly completedMoviesList', () => {
        let payload = Math.random()

        expect(moviesReducer(undefined, {type: COMPLETED_MOVIES_LIST, payload})).toEqual(payload)
    })

    test('it is managing correctly setError', () => {
        expect(moviesReducer(undefined, {type: SET_ERROR })).toEqual([])
    })
})
