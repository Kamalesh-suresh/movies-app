import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(()=>({
    appBar:{
        background:'black !important'
    },
    buttonText:{
        textTransform:'capitalize !important'
    },
    appBarContainer:{
        display:'flex',
        justifyContent:'space-between'
    },
    buttonContainer:{
        width:'100%',
    },
}));