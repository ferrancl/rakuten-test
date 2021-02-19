import { START_LOADING, FINISH_LOADING } from '../types'
import { startLoading, finishLoading } from '../index'

describe('Loading actions', () => {

    test('startLoading action should be created', ()=> {
        const expectedAction = { 
            type: START_LOADING 
        }

        expect(startLoading()).toEqual(expectedAction)
    })

    test('finishLoading action should be created', ()=> {
        const expectedAction = { 
            type: FINISH_LOADING 
        }

        expect(finishLoading()).toEqual(expectedAction)
    })

})