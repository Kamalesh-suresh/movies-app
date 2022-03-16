import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import React from 'react';
import Snackbr from '../Snackbr/Snackbr';


const CardWithSnackbar = (props) => {
    const [open, setOpen] = React.useState(false);
    const classes=useStyles();
    const dispatch=useDispatch();
    const {movie,fav,type,message,title}=props;

 
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    

    return ( 
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
                <CardActions className={classes.buttonContainer}>
                    
                    {fav.map(i=>i.id).indexOf(movie.id)<0? <Button size="small" color="error" className={classes.favText2} onClick={()=>{dispatch({type:type,payload:movie});
                        setOpen(true);console.log(open);}}>Add to {title}</Button>:<span className={classes.favText}>ADDED TO {title}</span>}
                    
                </CardActions>
                
                <Snackbr open={open} close={handleClose} message={message}/>
            </Card>
        </> );
};
 
export default CardWithSnackbar;