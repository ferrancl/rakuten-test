import {errorReducer} from '../'
import { SET_ERROR, REMOVE_ERROR } from '../../actions/types'

describe('error reducer', () => {
    test('it is returning the initial state correctly', () => {
        expect(errorReducer(undefined, {})).toBe(null)
    })

    test('it is managing correctly SET_ERROR', () => {
        let payload = Math.random()

        expect(errorReducer(undefined, {type: SET_ERROR, payload})).toEqual(payload)
    })

    test('that it removes correctly the error with REMOVE_ERROR action', () => {
        const state = Math.random()
        
        expect(errorReducer(state, {type: REMOVE_ERROR})).toBe(null)
    })
})
