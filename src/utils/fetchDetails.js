import { URL, PARAMS, NOT_FOUND_ERROR } from "../constants/"


export const fetchDetails = async (id) => {
    const response = await fetch(`${URL}movies/${id + PARAMS}`, {
        method: 'GET'
    })

    const { status } = response

    if (status === 200){
        const { 
            data: { 
                title, 
                images: {snapshot: image}
            } 
        } = await response.json()

        return { id, title, image }
    }

    if (status === 404) {
        throw new Error(NOT_FOUND_ERROR)
    }

    throw new Error('Server error')
}