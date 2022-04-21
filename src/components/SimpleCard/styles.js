import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    movieCard:{
        width:'95%',
        marginTop:'1em',
        flex:'1 1 24%',

        '@media (max-width: 767px)': {
            width: '100%',
        }
    },
    cardFont:{
        fontSize:'0.7em',
        padding:'0em !important'
    },
    cardText:{
        padding:'0em !important',
        marginTop:'1em',
        marginLeft:'15px'
    },
    MuiCardContent:{
        padding:'0em'
    }
}));