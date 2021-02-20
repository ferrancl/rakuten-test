import { startFetchingDetails } from "../../utils/fetchDetails"

export const fetchDetail = (id) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const fetchedDetails = await fetchDetails(id)

        }
        catch({message}){

        }
    } 
}