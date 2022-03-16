import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
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
        marginLeft:'15px',
        fontFamily: 'Poppins',
    },
    MuiCardContent:{
        padding:'0em'
    },
    favText:{
        fontSize:'0.9em',
        padding:'0 0 0 0',
        margin:'0 0 0 0',
        color:'#E98195',
        fontFamily: 'Poppins',
        textTransform:'uppercase'
        
    },
    favText2:{
        fontFamily: 'Poppins',
        textTransform:'uppercase'
        
    },
    buttonContainer:{
        display:'flex',
        alignItems:'center',
        height:'2em',
        fontWeight:'400'
    }
}));