import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from './styles';


const MovieCard = () => {

    const classes=useStyles();
    return ( 
        <>
            <Card  className={classes.movieCard}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image="https://www.unityhighschool.org/wp-content/uploads/2014/08/default-placeholder.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
          Game of thrones
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="error">Add to favorites</Button>
                </CardActions>
            </Card>
        </> );
};
 
export default MovieCard;