import {detailsReducer} from '../'
import { COMPLETED_DETAILS_FETCHED, SET_ERROR } from '../../actions/types'

describe('details reducer', () => {
    test('it is returning the initial state correctly', () => {
        expect(detailsReducer(undefined, {})).toEqual(null)
    })

    test('it is managing correctly completedDetailsFetched', () => {
        const payload = Math.random()

        expect(detailsReducer(undefined, {type: COMPLETED_DETAILS_FETCHED, payload})).toEqual(payload)
    })

    test('it is managing correctly setError', () => {
        expect(detailsReducer(undefined, {type: SET_ERROR })).toEqual(null)
    })
})
