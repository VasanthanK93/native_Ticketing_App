import React, { useEffect } from 'react';
import { View } from 'react-native';
import CardView from './CardView';
import axios from 'axios';
import { useState } from 'react';

const LatestMovies = ()=> {

    const [movies, setMovie] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/movies").then(function(response){
            return response
        })
        setMovie(response.data)
    }, [])

    // render() {
        console.log(movies)
        return (
            <View>
                <CardView movieData={movies} />
            </View>
        )
    }
// }

export default LatestMovies;

// const mapStateToProps = (state) => {
//     return {
//         movieList: state.movie
//     }
// }

// export default connect(mapStateToProps)(LatestMovies)