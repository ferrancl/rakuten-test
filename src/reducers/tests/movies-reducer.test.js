import {moviesReducer} from '../'
import { SET_MOVIES_LIST } from '../../actions/types'

describe('movie reducer', () => {
    test('it is returning the initial state correctly', () => {
        expect(moviesReducer(undefined, {})).toEqual([])
    })

    test('it is managing correctly SET_MOVIES_LIST', () => {
        let payload = Math.random()

        expect(moviesReducer(undefined, {type: SET_MOVIES_LIST, payload})).toEqual(payload)
    })
})
