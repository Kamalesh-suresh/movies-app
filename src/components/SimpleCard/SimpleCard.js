import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import SimpleButton from '../SimpleButton/SimpleButton';
import React from 'react';




const SimpleCard=({movie,title,type})=>{
    
    const classes= useStyles();
    const dispatch=useDispatch();
    
   

    const fn=()=>{
        dispatch({type:type,payload:movie.id});
      
    };

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
                <SimpleButton func={fn} title={title} />
                       
            </Card>
        </> 
    );
};


export default SimpleCard;