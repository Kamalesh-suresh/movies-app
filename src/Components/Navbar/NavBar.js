import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import useStyles from './style.js';


export default function NavBar(){
    const classes=useStyles();

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.appBar} position="static" >
                <Toolbar className={classes.appBarContainer} variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
            Movies
                    </Typography>
                    <Stack spacing={2} direction="row" className="buttonContainer">
                        <Button variant="contained" color="error" className={classes.buttonText}>Home</Button>
                        <Button variant="contained" color="error"  className={classes.buttonText}>Favorites</Button>
                        <Button variant="contained" color="error"  className={classes.buttonText}>Contact</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}