const movieReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LATEST_MOVIES':
            return action.payload
        case 'FETCH_MOVIE_ID':
            return action.payload
        default:
            return state
    }
}

export default movieReducer