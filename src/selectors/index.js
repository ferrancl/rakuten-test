export const moviesSelector = state => {
    const loading = state.movies.loading
    const movies = state.movies.movies.map(item => {
        const { id, name: categoryName, contents: { data }} = item 
        const moviesList = data.map(({id: movieId, images: { artwork: image }}) => ({movieId, image}))
        return {id, categoryName, moviesList}
    })
    const existsList = movies.length !== 0
    return { movies, loading, existsList }
}

export const detailsSelector = state => {
    const loading = state.details.loading
    if (state.details.details!== null) {
        const {id: idMovieFetched, title, images: {snapshot: image}} = state.details.details
        const details = {title, image}
        return {details, loading, idMovieFetched}
    }
    return { details: null, loading, idMovieFetched: null}
}

export const errorSelector = state => {
    const notFoundError = state.error.status === 404 
    const existsError = state.error.status !== 404 && state.error.status && state.error.message
    const error = state.error
    return { notFoundError, existsError, error }  
}