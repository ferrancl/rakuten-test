import { SET_DETAILS_FETCHED } from '../types'
import { setDetailsFetched } from '../index'

describe('Details actions', () => {

    let payload

    beforeEach(() => {
        payload = Math.random()
    })

    test('setDetailsFetched action should be created', ()=> {
        const expectedAction = { 
            type: SET_DETAILS_FETCHED, 
            payload 
        }

        expect(setDetailsFetched(payload)).toEqual(expectedAction)
    })

})