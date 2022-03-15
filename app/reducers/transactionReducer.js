const transactionReducer = (state=[], action) => {
    switch(action.type) {
        case 'BOOK_MOVIE_TICKETS':
            return [...state, action.payload]
        default:
            return state
    }
}

export default transactionReducer