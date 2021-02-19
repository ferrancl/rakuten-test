import {loadingReducer} from '../'
import { START_LOADING, FINISH_LOADING } from '../../actions/types'

describe('loading reducer', () => {

    test('it is returning the initial state correctly', () => {
        expect(loadingReducer(undefined, {})).toBe(false)
    })

    test('it is managing correctly START_LOADING', () => {
        const state = false

        expect(loadingReducer(state, {type: START_LOADING})).toBe(true)
    })

    test('it is managing correctly FINISH_LOADING', () => {
        const state = true
        
        expect(loadingReducer(state, {type: FINISH_LOADING})).toBe(false)
    })
})
