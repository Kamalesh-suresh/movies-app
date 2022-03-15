import NavBar from '../../components/Navbar/NavBar';
import { useSelector } from 'react-redux';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import useStyles from './style';

import {Grid} from '@material-ui/core';
import CardWithButton from '../../components/CardWithButton/CardWithButton';

const Favorites = () => {
    const classes=useStyles();
    const fav =useSelector((state)=>state?.movies.favorites);
    console.log(fav);
    return ( 
        <>
            <NavBar/>      
            <h1 data-testid="fav-heading" className={classes.favHeading}>Your Favorites</h1>
           
            {!fav?.length? <div className={classes.favContainer}><span className={classes.noFavText}>No Favorites! please add </span></div>:(
                <Grid className={classes.container} container spacing={2} direction="row" alignItems="center" justifyContent="center">
                    {fav?.map((movie)=>(<Grid key={movie.id} item xs={12} sm={6} md={2}>
                        <CardWithButton movie={movie} />


                    </Grid>))}
                </Grid>)}
            
          

        </> );
};
 
export default Favorites;