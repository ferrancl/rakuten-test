export const detailsSelector = state => {
    const loading = state.details.loading
    if (state.details.details!== null) {
        const {id: idMovieFetched, title, images: {snapshot: image}} = state.details.details
        const details = {title, image}
        return {details, loading, idMovieFetched}
    }
    return { details: null, loading, idMovieFetched: null}
}