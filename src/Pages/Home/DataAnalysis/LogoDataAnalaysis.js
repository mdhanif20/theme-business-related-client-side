import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo1a from "../../../images/securityimg/icon_1a.png";
import logo2a from "../../../images/securityimg/icon_2a.png";
import logo3a from "../../../images/securityimg/icon_3a.png";
import logo4a from "../../../images/securityimg/icon_4a.png";
import logo5b from "../../../images/securityimg/icon_5b.png";
import logo6a from "../../../images/securityimg/icon_6a.png";
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    hostIconArea:{
        display: "flex",
        justifyContent: "flexStart",
        alignItems: "center",
        padding:"10px 0px"
    },
    radio:{
        width:"15px",
        height:"15px",
        backgroundColor:"#6633FF",
        position:"absolute",
        borderRadius:"50%",
        marginTop:"-7px"
    },
    positionImg:{
        width:"20%",
        textAlign:"start"
    },
    textPosition:{
        width:"10%",
        textAlign:"start"
    },
    text:{
        fontSize:"14px",
        fontWeight:"600"
    }
})

const LogoDataAnalaysis = () => {
    const classes = useStyle();
    return (
        <Box sx={{my:5}}>
             <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                <span className={classes.positionImg}>
                    <img src={logo1a} alt="" />
                </span>
                <span sx={{width:"25%"}} className={classes.textPosition}>
                <p className={classes.radio}></p> 
                </span>
                <span className={classes.text}> DATA ANALYSIS</span>
             </Typography>
             <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                <span  className={classes.positionImg}>
                    <img src={logo2a} alt="" />
                </span>
                <span className={classes.textPosition}>
                <p className={classes.radio}></p> 
                </span>
                <span className={classes.text}> UNLIMITED DOMAIN HOSTING</span>
             </Typography>
             <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                <span  className={classes.positionImg}>
                    <img src={logo3a} alt="" />
                </span>
                <span className={classes.textPosition}>
                <p className={classes.radio}></p>      
                </span>
                <span className={classes.text}> HIGH SPEED SERVER</span>
             </Typography>
             <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                <span  className={classes.positionImg}>
                    <img src={logo4a} alt="" />
                </span>
                <span className={classes.textPosition}> 
                <p className={classes.radio}></p> 
                </span>
                <span className={classes.text}> HIGH SECURITY</span>
             </Typography>
             <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                <span  className={classes.positionImg}>
                    <img src={logo5b} alt="" />
                </span>
                <span className={classes.textPosition}>
                <p className={classes.radio}></p>    
                </span>
                <span className={classes.text}> UNLIMITED EMAIL</span>
             </Typography>
             <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                <span  className={classes.positionImg}>
                    <img src={logo6a} alt="" />
                </span>
                <span className={classes.textPosition}>
                <p className={classes.radio}></p>    
                </span>
                <span className={classes.text}> 24/7 LIVE SUPPORT</span>
             </Typography>
        </Box>
    );
};

export default LogoDataAnalaysis;