import { START_LOADING, FINISH_LOADING } from "./types"

// Two different actions instead of only one that toggles because if we clicked 
// somewhere when the app is loading, it wouldn't work correctly

export const startLoading = () => ({ 
    type: START_LOADING
})

export const finishLoading = () => ({ 
    type: FINISH_LOADING
})