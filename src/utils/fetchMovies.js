import { URL, PARAMS } from "../constants/"


export const fetchMovies = async (id) => {
    const response = await fetch(`${URL}lists/${id + PARAMS}`, {
        method: 'GET',
    })
    const { status } = response

    if (status === 200){
        const { data: { id, name: categoryName, contents: { data }}} = await response.json()
        const movies = data.map(({id: movieId, images: { artwork: image }}) =>  { return ({ movieId, image })})
        return {id, categoryName, movies}
    }

    if (status >= 400 && status < 500) {
        const { error } = await response.json()
        throw new Error(error)
    }

    throw new Error('Server error')
}

export const fetchData = async (id, endpoint, method = 'GET') => {
    const response = await fetch(URL + endpoint + "/"+ id + PARAMS, {
        method,
    })
    const { status } = response

    if (status === 200){
        const { data } = await response.json()
        return data 
    }

    if (status >= 400 && status < 500) {
        console.log(response)
        const res = await response.json()
        console.log(res)
        throw new Error()
    }

    throw new Error('Server error')
}