import axios from "axios";

const base_Url = "http://localhost:3001/";
var next_id = 4;

export const fetchLatestMovies = () => {
    console.log("aaa")
    return (dispatch) => {
        return axios.get(base_Url + "movies").then(response => {
            console.log(response)
            dispatch(fetchLatestMoviesSuccess(response.data))
        }).catch(e => {
            throw (e)
        })

    }
}

export const fetchLatestMoviesSuccess = (data) => {
    return {
        type: "FETCH_LATEST_MOVIES",
        payload: data
    }
}

export const fetchMoviesById = (id) => {
    return (dispatch) => {
        return axios.get(base_Url + "movies?id=" + id).then(response => {
            dispatch(fetchMoviesByIdSuccess(response.data))
        }).catch(e => {
            throw (e)
        })

    }
}

export const fetchMoviesByIdSuccess = (data) => {
    return {
        type: "FETCH_MOVIE_ID",
        payload: data
    }
}

export const bookMovieTicket = (data) => {
    return (dispatch) => {
        let form_data = { ...data, id: next_id }
        return axios.post(base_Url + "transactions", form_data).then(response => {
            dispatch(bookMovieTicketSuccess(response.data))
        }).catch(e => {
            throw (e)
        })

    }
}

export const bookMovieTicketSuccess = (data) => {
    next_id += 1;
    return {
        type: "BOOK_MOVIE_TICKETS",
        payload: {
            id: data.id,
            movieId: data.movie_id,
            ticketCount: data.count,
            price: data.price,
            bookingDate: data.date,
            bookingTime: data.bookingTime,
            totalAmount: data.totalAmount
        }
    }
}
