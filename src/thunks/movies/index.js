import { startMoviesList, completedMoviesList, setError } from "../../actions"
import { CONTENT_LIST } from "../../constants"
import { fetchMovies } from "../../utils/fetchMovies" 

export const fetchMoviesList = ( ) => {
    return async (dispatch) => {
        try {
            dispatch(startMoviesList())
            const fetchedList = await Promise.all(CONTENT_LIST.map(async (list)=> fetchMovies(list)))
            return dispatch(completedMoviesList(fetchedList))
        }
        catch({message}){
            dispatch(setError(message))
        }
    } 
}