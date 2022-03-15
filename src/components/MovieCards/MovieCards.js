// import { useSelector } from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core';
import useStyles from './style';
import MovieCard from '../MovieCard/MovieCard';


export default function MovieCards({results,fav}){
  
    const classes=useStyles();

    return(
        !results?.length?<Grid className={classes.progress}><CircularProgress/></Grid>:(
            <Grid className={classes.container} container spacing={2} direction="row" alignItems="center" justifyContent="center">
                {results?.map((movie)=>(<Grid key={movie.id} item xs={12} sm={6} md={2}>
                    <MovieCard  movie={movie} fav={fav}/>
                </Grid>))}
            </Grid>
        )
    );
}