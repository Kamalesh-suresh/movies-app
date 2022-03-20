import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({

    root: {
     
        // marginLeft: "3.5em",
        // marginTop: "4em",
        // height: "24em",
        // boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
        // transition: " all .2s ease-in-out",
        // color: "#454444",
        // "&:hover": {
        //   transform: "scale(1.05)",
    },


    movieCard:{
        width:'95%',
        marginTop:'1em',
        flex:'1 1 24%',
        
       
    },
    cardFont:{
        fontSize:'0.7em',
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