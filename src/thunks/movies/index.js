import { startMoviesList, completeMoviesList } from "../../actions"
import { fetchMovies } from "../../utils/fetchMovies"

export const fetchMoviesList = ( contentsList ) => {
    return async (dispatch) => {
        try {
            dispatch(startMoviesList())
            const fetchedList = await Promise.all(contentsList.map(async ()=> fetchMovies))
            return dispatch(completeMoviesList(fetchedList))
        }
        catch({message}){
            
        }
    } 
}