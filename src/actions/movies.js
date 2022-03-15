
import * as api from '../api';

export const getMovies=()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchMovies();
        console.log(data);
        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error.message);
    }
};

// export const addFavorites=(movie)=>{
//     console.log(movie);
//     const {data}=movie;
//     console.log(data);
//     // dispatch({type:'ADD_FAVORITE',payload:data});
// };