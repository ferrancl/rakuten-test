import { SET_ERROR, REMOVE_ERROR } from '../types'
import { setError, removeError } from '../index'

describe('Error actions', () => {

    let payload

    beforeEach(() => {
        payload = Math.random()
    })

    test('setError action should be created', ()=> {
        const expectedAction = { 
            type: SET_ERROR, 
            payload 
        }

        expect(setError(payload)).toEqual(expectedAction)
    })

    test('removeError action should be created', ()=> {
        const expectedAction = { 
            type: REMOVE_ERROR 
        }

        expect(removeError()).toEqual(expectedAction)
    })

})