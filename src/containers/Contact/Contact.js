
import NavBar from '../../components/Navbar/NavBar';
import {Grid} from '@material-ui/core';
import useStyles from './styles';

const Contact = () => {
    const classes=useStyles();
    return ( 
        <>
            <NavBar/>
            <div className={classes.contactContainer}>
                <Grid item xs={12} className={classes.container}>
                    <Grid item xs={12} sm={6} >
                        <h1>Contact Us</h1>
                        <span><span className={classes.corporateText}>corporate  office :</span> 2nd floor,work easy space solutions,Urban Square,S.F No; 278/3A & 9A Kandanchavadi,Old Mahabalipuram Rd,Chennai,600041</span><br></br>
                        <span><span className={classes.corporateText}>E mail :</span>psiog@outlook.com</span>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.videoContainer}>
                        <iframe data-testid="psiogVideo" width="560" height="315" src="https://www.youtube.com/embed/azxZmlNh6-A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Grid>
                </Grid>
                
               
            </div>   
        </>
    );
};
 
export default Contact;
