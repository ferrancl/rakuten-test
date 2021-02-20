import { URL, PARAMS } from "../constants/"


export const fetchMovies = async (id) => {
    const response = await fetch(`${URL}lists/${id + PARAMS}`, {
        method: 'GET',
    })
    const { status } = response

    if (status === 200){
        const { data: { id, name, contents: { data: movies }}} = await response.json()

        return {id, name, movies}
    }

    if (status >= 400 && status < 500) {
        const { error } = await response.json()
        throw new Error(error)
    }

    throw new Error('Server error')
}