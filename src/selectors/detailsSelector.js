export const detailsSelector = state => {
    if (state.details!== null) {
        const {id: idMovieFetched, title, images: {snapshot: image}} = state.details
        const details = {title, image}
        return {details, idMovieFetched}
    }
    return { details: null, idMovieFetched: null}
}