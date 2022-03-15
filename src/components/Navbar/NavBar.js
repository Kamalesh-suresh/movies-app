import * as React from 'react';
import { useNavigate  } from 'react-router-dom';



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import RedButton from '../RedButton/RedButton';

import useStyles from './style.js';


export default function NavBar(){
    const classes=useStyles();
    const navigate=useNavigate();
     
    const home=()=>{
        navigate('/');
    };

    const favorite=()=>{
        navigate('/favorites');
    };

    const contact=()=>{
        navigate('/contact');
    };


    const buttons=[{title:'Home',testid:'homeButton',func:home},{title:'Favorites',testid:'favoritesButton',func:favorite},{title:'Contact us',testid:'contactButton',func:contact}];
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.appBar} position="static" >
                <Toolbar className={classes.appBarContainer} variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
            Movies
                    </Typography>
                    <Stack spacing={2} direction="row" className="buttonContainer">
                        {/*                   
                        <Button data-testid="homeButton" variant="contained" color="error" className={classes.buttonText} onClick={()=>navigate('/')}>Home</Button>
                        <Button  data-testid="favoritesButton"variant="contained" color="error"  className={classes.buttonText} onClick={()=>navigate('/favorites')}>Favorites</Button>
                        <Button data-testid="contactButton" variant="contained" color="error"  className={classes.buttonText} onClick={contact}>Contact</Button> */}
            
                        { buttons.map((button)=>(
                            <RedButton key={button.title} title={button.title} testid={button.testid} func={button.func}/>
                        ))}
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}