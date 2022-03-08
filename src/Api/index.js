import axios from 'axios';

const url='https://api.themoviedb.org/3/movie/550?api_key=a0ca8990b314619303c44821b7d192aa';

export const fetchMovies= ()=>axios.get(url);
