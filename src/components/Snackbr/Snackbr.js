import Snackbar from '@mui/material/Snackbar';
import React from 'react';

import useStyles from './styles';



const Snackbr=({open,close,message})=>{

    const classes=useStyles();
 
    return(
        <>
         
            <Snackbar
                className={classes.snack}
                open={open}
                autoHideDuration={3000}
                onClose={close}
                message={message}
                
            />
          
        </>
    );
};


export default Snackbr;