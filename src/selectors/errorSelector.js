export const errorSelector = state => {
    const notFoundError = state.error.status === '404' 
    const existsError = state.error.status !== '404' && state.error.status && state.error.message
    const error = state.error
    return { notFoundError, existsError, error }  
}