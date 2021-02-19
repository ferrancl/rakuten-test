import {detailsReducer} from '../'
import { SET_DETAILS_FETCHED } from '../../actions/types'

describe('details reducer', () => {
    test('it is returning the initial state correctly', () => {
        expect(detailsReducer(undefined, {})).toEqual([])
    })

    test('it is managing correctly SET_DETAILS_FETCHED', () => {
        let payload = Math.random()

        expect(detailsReducer(undefined, {type: SET_DETAILS_FETCHED, payload})).toEqual([payload])
    })
})
