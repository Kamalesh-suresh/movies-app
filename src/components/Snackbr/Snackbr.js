import Snackbar from '@mui/material/Snackbar';
import React from 'react';




const Snackbr=({open,close,message})=>{
    const styles = {
       
        snakbar: {
         
            
            display:'flex',
            justifyContent:'center'
           
        }
    };
    return(
        <>
            <Snackbar
                style = {styles.snakbar}
                open={open}
                autoHideDuration={3000}
                onClose={close}
                message={message}
                
            />
        </>
    );
};


export default Snackbr;