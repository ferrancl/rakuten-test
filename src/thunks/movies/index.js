import { startMoviesList, completedMoviesList, setError } from "../../actions"
import { MOVIES_ENDPOINT } from "../../constants"
import { fetchData } from "../../utils/fetchData" 

const { endpoint, method } = MOVIES_ENDPOINT

export const fetchMoviesList = (list) => {
    return async (dispatch) => {
        try {
            dispatch(startMoviesList())
            const fetchedList = await Promise.all(list.map(async (movieList)=> fetchData(movieList, endpoint , method)))
            return dispatch(completedMoviesList(fetchedList))
        }
        catch(error){
            console.log(error.message);
            dispatch(setError(error.message))
        }
    } 
}