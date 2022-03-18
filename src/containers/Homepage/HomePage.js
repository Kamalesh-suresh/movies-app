import { useDispatch } from 'react-redux';
import { useEffect } from 'react';




import NavBar from '../../components/Navbar/NavBar';
import MovieCards from '../../containers/MovieCards/MovieCards';
import { getMovies } from '../../actions/movies';
import { useSelector } from 'react-redux';


export default function HomePage(){
    const dispatch=useDispatch();

    const {results} =useSelector((state)=>state?.movies?.movies);
    
    const fav =useSelector((state)=>state?.movies?.favorites);


    console.log(results);
    console.log(fav);

    useEffect(()=>{
        dispatch(getMovies());
    },[dispatch]);

    return(
        <>
            <NavBar/>
            <MovieCards results={results} fav={fav}/>
        </>
    );
}