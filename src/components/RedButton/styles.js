import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    buttonText:{
        textTransform:'capitalize !important',

        '@media (max-width: 767px)': {
            width: '50px',
            height:'40px',
            
        }
    },
}));