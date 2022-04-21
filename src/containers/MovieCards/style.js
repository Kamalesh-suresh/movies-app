import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(()=>({
    
    container:{
        display: 'flex',
        flexWrap: 'wrap',

        '@media (max-width: 767px)': {
            display: 'block',
        }
     
    },
    
    
    
    progress:{
        width:'90vw',
        height:'90vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    },
    
}));