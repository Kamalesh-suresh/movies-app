import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../actions/movies';

const MovieCard = (props) => {
    
    const classes=useStyles();
    const dispatch=useDispatch();
    const {movie}=props;

    console.log(movie);
    
    const addFavoritesHandler=()=>{
        dispatch(addFavorites(movie));
    };


    return ( 
        <>
            <Card  className={classes.movieCard}>
                <CardMedia
                    component="img"
                    alt="Movie Image"
                    height="300"
                    image={movie?.primaryImage?.url ||'https://www.unityhighschool.org/wp-content/uploads/2014/08/default-placeholder.png'}
                />
                <CardContent className={classes.cardText}>
                    <Typography gutterBottom className={classes.cardFont} component="div">
                        {movie?.titleText.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="error" onClick={addFavoritesHandler}>Add to favorites</Button>
                </CardActions>
            </Card>
        </> );
};
 
export default MovieCard;