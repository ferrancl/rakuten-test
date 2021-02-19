import { SET_MOVIES_LIST } from '../types'
import { setMoviesList } from '../index'

describe('Movies List actions', () => {

    let payload

    beforeEach(() => {
        payload = Math.random()
    })

    test('setMoviesList action should be created to add movies to the list', ()=> {
        const expectedAction = { 
            type: SET_MOVIES_LIST,
            payload
        }

        expect(setMoviesList(payload)).toEqual(expectedAction)
    })
})