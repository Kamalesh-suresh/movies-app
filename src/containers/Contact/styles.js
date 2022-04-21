import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    corporateText:{
        fontWeight:'bold',
        fontSize:'1.1em'
    },
    container:{
        display:'flex',
        marginTop:'5em',

        '@media (max-width: 767px)': {
            flexDirection: 'column',
        }
    },
    videoContainer:{
        display:'flex',
        justifyContent:'center',

        '@media (max-width: 767px)': {
            marginTop: '1em',
        }
    }

   
   
}));