import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import bg from "../../../images/background.png";
import smallBg from "../../../images/smallScreenbg.png";
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    bgImage:{
        background:`url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top"
    },
    smallScreenbgImg:{
        background:`url(${smallBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    sliderButton:{
        background:"linear-gradient(to right, #564CF9, #CB34FF)",
        fontSize:"1.5rem",
        color:"#fff",
        padding:"10px 40px",
        borderRadius:"30px"
    }
})

const Slider = () => {
    const classes = useStyle();
    return (
        <>
        <Box sx={{pb:10,display:{xs:"none",sm:"none",md:"flex"}}} className={classes.bgImage}>
            <Grid container>
                <Grid item xs={12} md={6}>
                <Box   sx={{textAlign:"start",ml:{xs:5,md:15},my:30}}>
                    <Typography variant="h2" sx={{fontSize:"2.75rem"}} gutterBottom component="div">
                        Powerful Hosting, <br />
                        Exceptional Service.
                    </Typography>
                    <Typography sx={{mt:4,mb:5,opacity:.7,pb:5,fontSize:"18px"}} variant="body2" gutterBottom>
                    Web hosting made EASY and AFFORDABLE
                    </Typography>
                    <Link style={{textDecoration:"none"}} to="/themes">
                    <span as={Button} className={classes.sliderButton} >Get Started</span>
                    </Link>
                    
                </Box>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{pb:10,display:{xs:"flex",sm:"flex",md:"none"}}} className={classes.smallScreenbgImg}>
            <Grid container>
                <Grid item xs={12} md={6}>
                <Box   sx={{textAlign:"start",ml:{xs:5,md:20},my:30}}>
                    <Typography variant="h2" sx={{fontSize:"2.30rem",color:"#fff"}} gutterBottom component="div">
                        Powerful Hosting, 
                        Exceptional Service.
                    </Typography>
                    <Typography sx={{mt:4,mb:5,opacity:.7,fontSize:"18px"}} variant="body2" gutterBottom>
                    Web hosting made EASY and AFFORDABLE
                    </Typography>
                    <Box sx={{pt:5}}></Box>
                    <Link style={{textDecoration:"none"}} to="/themes">
                    <span className={classes.sliderButton} >Get Started</span>
                    </Link>
                </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    );
};

export default Slider;