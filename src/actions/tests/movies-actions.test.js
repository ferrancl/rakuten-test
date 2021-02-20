import { START_MOVIES_LIST, COMPLETED_MOVIES_LIST } from '../types'
import { startMoviesList, completedMoviesList } from '../index'

describe('Movies List actions', () => {

    let payload

    beforeEach(() => {
        payload = Math.random()
    })

    test('startMoviesList action should be created to add movies to the list', ()=> {
        const expectedAction = { 
            type: START_MOVIES_LIST,
        }

        expect(startMoviesList()).toEqual(expectedAction)
    })

    test('completedMoviesList action should be created to add movies to the list', ()=> {
        const expectedAction = { 
            type: COMPLETED_MOVIES_LIST,
            payload
        }

        expect(completedMoviesList(payload)).toEqual(expectedAction)
    })
})