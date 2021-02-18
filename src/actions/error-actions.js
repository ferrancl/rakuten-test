import { SET_ERROR, REMOVE_ERROR} from "./types"

export const setError = (payload) => ({
    type: SET_ERROR,
    payload
})

export const removeError = () => ({
    type: REMOVE_ERROR
})