export const moviesSelector = state => {
    const loading = state.movies.loading || false
    const movies =  state.movies.movies.map(item => {
        const { id, name: categoryName, contents: { data }} = item 
        const moviesList = data.map(({id: movieId, images: { artwork: image }}) => ({movieId, image}))
        return {id, categoryName, moviesList}
    })
    const existsList = movies.length !== 0
    return { movies, loading, existsList }
}