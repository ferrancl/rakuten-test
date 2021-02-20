import { completedDetailsFetched, setError, startDetailsFetched } from "../../actions"
import { fetchDetails } from "../../utils/fetchDetails"

export const fetchDetail = (id) => {
    return async (dispatch) => {
        try {
            dispatch(startDetailsFetched())
            const fetchedDetails = await fetchDetails(id)
            return dispatch(completedDetailsFetched(fetchedDetails))
        }
        catch({message}){
            dispatch(setError(message))
        }
    } 
}