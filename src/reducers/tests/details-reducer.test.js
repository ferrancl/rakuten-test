import {detailsReducer} from '../'
import { START_DETAILS_FETCHED, COMPLETED_DETAILS_FETCHED } from '../../actions/types'

describe('details reducer', () => {
    test('it is returning the initial state correctly', () => {
        expect(detailsReducer(undefined, {})).toEqual({
            loading: false, 
            details: []
        })
    })

    test('it is managing correctly START_DETAILS_FETCHED', () => {
        expect(detailsReducer(undefined, {type: START_DETAILS_FETCHED})).toEqual({
            loading: true, 
            details: []
        })
    })

    test('it is managing correctly COMPLETED_DETAILS_FETCHED', () => {
        const payload = Math.random()

        expect(detailsReducer(undefined, {type: COMPLETED_DETAILS_FETCHED, payload})).toEqual({
            loading: false, 
            details: [payload]
        })
    })
})
