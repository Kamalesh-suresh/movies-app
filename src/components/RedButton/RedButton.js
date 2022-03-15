import Button from '@mui/material/Button';
import useStyles from './styles';


const RedButton=({title,testid,func})=>{
    const classes=useStyles();
    return(
        <>
            <Button data-testid={testid} variant="contained" color="error" className={classes.buttonText} onClick={func}>{title}</Button>
        
        </>
    );
};


export default RedButton;