import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    container:{
        display: 'flex',
        flexWrap: 'wrap',

        '@media (max-width: 767px)': {
            display: 'block',
        }
     
    },
    favHeading:{
        width:'100%',
        textAlign:'center',
        margin:'2em 0'
    },
    favContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center'
    },
    noFavText:{
        width:'100%',
        textAlign:'center',
        margin:'2em 0',
        fontSize:'2em'
    },
    movieCard:{
        width:'100%',
        marginTop:'1em',
       
    },
    cardFont:{
        fontSize:'1.2em',
        padding:'0em !important',
        fontFamily: 'Poppins',
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