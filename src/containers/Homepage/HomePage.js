import { useDispatch } from 'react-redux';
import { useEffect } from 'react';



import NavBar from '../../components/Navbar/NavBar';
import MovieCards from '../../components/MovieCards/MovieCards';
import { getMovies } from '../../actions/movies';


export default function HomePage(){
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getMovies());
    },[dispatch]);

    return(
        <>
            <NavBar/>
            <MovieCards/>
        </>
    );
}