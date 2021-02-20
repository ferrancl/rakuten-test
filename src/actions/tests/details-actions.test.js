import { START_DETAILS_FETCHED, COMPLETED_DETAILS_FETCHED } from '../types'
import { startDetailsFetched, completedDetailsFetched } from '../index'

describe('Details actions', () => {

    let payload

    beforeEach(() => {
        payload = Math.random()
    })

    test('startDetailsFetched action should be created', ()=> {
        const expectedAction = { 
            type: START_DETAILS_FETCHED, 
        }

        expect(startDetailsFetched()).toEqual(expectedAction)
    })

    test('completedDetailsFetched action should be created', ()=> {
        const expectedAction = { 
            type: COMPLETED_DETAILS_FETCHED,
            payload
        }

        expect(completedDetailsFetched(payload)).toEqual(expectedAction)
    })

})