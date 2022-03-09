
import * as api from '../api';

export const getMovies=()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchMovies();
        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error.message);
    }
};

export const addFavorites=(movie)=>(dispatch)=>{
    const {data}=movie;
    dispatch({type:'ADD_FAVORITE',payload:data});
};