import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';



const SimpleButton=({func,title})=>{
    return(
        <> 
            <CardActions>
                <Button size="small" color="error" onClick={func}>{title}</Button>
            </CardActions>
        </>
        
    );
};


export default SimpleButton;