import {combineReducers} from 'redux';
import movie from './movieReducer';
import transaction from './transactionReducer' 

const rootReducer = combineReducers({
    movie,
    transaction
})

export default rootReducer;