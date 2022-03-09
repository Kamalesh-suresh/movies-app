import { useSelector } from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core';
import useStyles from './style';
import MovieCard from '../MovieCard/MovieCard';


export default function MovieCards(){
    const {results} =useSelector((state)=>state?.movies.movies);
    console.log(results);
    const fav =useSelector((state)=>state);
    const classes=useStyles();

    console.log(fav);
    return(
        !results?.length?<Grid className={classes.progress}><CircularProgress/></Grid>:(
            <Grid className={classes.container} container spacing={2} direction="row" alignItems="center" justifyContent="center">
                {results?.map((movie)=>(<Grid key={movie.id} item xs={12} sm={6} md={2}>
                    <MovieCard  movie={movie}/>
                </Grid>))}
            </Grid>
        )
    );
}