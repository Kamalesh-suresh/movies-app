import Snackbar from '@mui/material/Snackbar';
import React from 'react';




const Snackbr=({open,close,message})=>{
    return(
        <>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={close}
                message={message}
                
            />
        </>
    );
};


export default Snackbr;