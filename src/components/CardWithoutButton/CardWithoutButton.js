import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useStyles from './styles';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';


const CardWithoutButton=({movie})=>{
    const classes =useStyles();
    const dispatch=useDispatch();
    return(
        <>
            <Card  className={classes.movieCard} data-testid="card">
                <CardMedia
                    component="img"
                    alt="Movie Image"
                    height="300"
                    image={movie?.primaryImage?.url ||'https://www.unityhighschool.org/wp-content/uploads/2014/08/default-placeholder.png'}
                />
                <CardContent className={classes.cardText}>
                    <Typography gutterBottom className={classes.cardFont} data-testid="cardText"component="div">
                        {movie?.titleText.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="error" onClick={()=>dispatch({type:'REMOVE_FAVORITE',payload:movie.id})}>Remove favorite</Button>
                </CardActions>
                           
            </Card>
        </> 
    );
};

export default CardWithoutButton;