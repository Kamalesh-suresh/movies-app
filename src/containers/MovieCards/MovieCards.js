// import { useSelector } from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core';
import useStyles from './style';
import CardWithSnackbar from '../../components/CardWithSnackbar/CardWithSnackbar';


export default function MovieCards({results,fav}){
  
    const classes=useStyles();

    return(
        !results?.length?<Grid className={classes.progress}><CircularProgress/></Grid>:(
            <div className={classes.container} >
                {results?.map((movie)=>(<Grid key={movie.id} item xs={12} sm={6} md={2}>
                    <CardWithSnackbar  movie={movie} fav={fav} type='ADD_FAVORITE' message='Added to favorites' title='favorites'/>
                </Grid>))}
            </div>
        )
    );
}