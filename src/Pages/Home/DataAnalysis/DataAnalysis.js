import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import logo1a from "../../../images/securityimg/icon_1a.png";
import logo2a from "../../../images/securityimg/icon_2a.png";
import logo2b from "../../../images/securityimg/icon_2b.png";
import logo3a from "../../../images/securityimg/icon_3a.png";
import logo3b from "../../../images/securityimg/icon_3b.png";
import logo4a from "../../../images/securityimg/icon_4a.png";
import logo4b from "../../../images/securityimg/icon_4b.png";
import logo5a from "../../../images/securityimg/icon_5a.png";
import logo5b from "../../../images/securityimg/icon_5b.png";
import logo6a from "../../../images/securityimg/icon_6a.png";
import logo6b from "../../../images/securityimg/icon_6b.png";


const useStyle = makeStyles({
    option:{
        display:"flex",
        backgroundColor:"rgb(243, 246, 249)",
        marginBottom:"100px",
        justifyContent:"space-between",
        width:{xs:"70%",md:"100%"},
        padding:"10px 20px 7px 20px",
        cursor:"pointer",
        transition:".3s",
        "&:hover":{
            backgroundColor:"#09B1EC",
            color:"#fff"
        }
    },
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
        marginTop:"-7px",
        opacity:".6"
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
        fontWeight:"600",
        opacity:".5"
    }
})

const DataAnalysis = () => {
    const [header,setHeader]= useState("DATA ANALYSIS");
    const [icon1,setIcon1] = useState(`${logo1a}`);
    const [icon2,setIcon2] = useState(`${logo2b}`);
    const [icon3,setIcon3] = useState(`${logo3b}`);
    const [icon4,setIcon4] = useState(`${logo4b}`);
    const [icon5,setIcon5] = useState(`${logo5b}`);
    const [icon6,setIcon6] = useState(`${logo6b}`);
    const classes = useStyle();
    
    const changingInfo = (a,b) =>{
        setHeader(a)
    }
    return (
        <Container>
            <Grid container>
                <Grid md={8} sx={{textAlign:"start"}}>
                    <h2 style={{fontSize:"2.5rem",fontWeight:"300",marginBottom:"10px"}}> {header} </h2>
                    <Typography variant="body1" sx={{opacity:".4",lineHeight:"30px",width:{xs:"90%",md:"80%"}}} gutterBottom>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum expedita praesentium enim quos optio iusto voluptatum totam harum rerum. Eius maxime delectus id, ratione ipsa vero labore adipisci, est ab cupiditate blanditiis repellendus mollitia earum, ea odit deserunt aspernatur?
                    </Typography>
                    <Box sx={{my:5}}>
                        <Typography onClick={()=>changingInfo("DATA ANALYSIS")} sx={{width:{xs:"90%",md:"70%"},my:2}} className={classes.option} variant="subtitle2" gutterBottom component="div">
                            <span style={{fontSize:".9rem",fontWeight:"600"}}>Drag and Drop Website Builder</span>
                            <span > <ArrowForwardIosIcon sx={{fontSize:"15px",marginTop:"1px"}}/> </span>
                        </Typography>
                        <Typography onClick={()=>changingInfo("UNLIMITED DOMAIN HOSTING",`${logo2a}`)} sx={{width:{xs:"90%",md:"70%"},my:2}} className={classes.option}  variant="subtitle2" gutterBottom component="div">
                            <span style={{fontSize:".9rem",fontWeight:"600"}}>Include All Essential Installation Tools</span>
                            <span > <ArrowForwardIosIcon sx={{fontSize:"15px",marginTop:"1px"}}/> </span>
                        </Typography>
                        <Typography onClick={()=>changingInfo("HIGH SPEED SERVER",`${logo3a}`)} sx={{width:{xs:"90%",md:"70%"},my:2}} className={classes.option} variant="subtitle2" gutterBottom component="div">
                            <span style={{fontSize:".9rem",fontWeight:"600"}}>Backup Facility</span>
                            <span > <ArrowForwardIosIcon sx={{fontSize:"15px",marginTop:"1px"}}/> </span>
                        </Typography>
                        <Typography onClick={()=>changingInfo("HIGH SECURITY",`${logo4a}`)} sx={{width:{xs:"90%",md:"70%"},my:2}} className={classes.option} variant="subtitle2" gutterBottom component="div">
                            <span style={{fontSize:".9rem",fontWeight:"600"}}>Free Domain Transfer</span>
                            <span > <ArrowForwardIosIcon sx={{fontSize:"15px",marginTop:"1px"}}/> </span>
                        </Typography>
                        
                    </Box>
                    
                </Grid>
                <Grid md={4}>
                <Box sx={{my:5}}>
                    <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                        <span className={classes.positionImg}>
                            <img src={icon1} alt="" />
                        </span>
                        <span sx={{width:"25%"}} className={classes.textPosition}>
                        <p className={classes.radio}></p> 
                        </span>
                        <span className={classes.text}> DATA ANALYSIS</span>
                    </Typography>
                    <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                        <span  className={classes.positionImg}>
                            <img src={icon2} alt="" />
                        </span>
                        <span className={classes.textPosition}>
                        <p className={classes.radio}></p> 
                        </span>
                        <span className={classes.text}> UNLIMITED DOMAIN HOSTING</span>
                    </Typography>
                    <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                        <span  className={classes.positionImg}>
                            <img src={icon3} alt="" />
                        </span>
                        <span className={classes.textPosition}>
                        <p className={classes.radio}></p>      
                        </span>
                        <span className={classes.text}> HIGH SPEED SERVER</span>
                    </Typography>
                    <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                        <span  className={classes.positionImg}>
                            <img src={icon4}alt="" />
                        </span>
                        <span className={classes.textPosition}> 
                        <p className={classes.radio}></p> 
                        </span>
                        <span className={classes.text}> HIGH SECURITY</span>
                    </Typography>
                    <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                        <span  className={classes.positionImg}>
                            <img src={icon5} alt="" />
                        </span>
                        <span className={classes.textPosition}>
                        <p className={classes.radio}></p>    
                        </span>
                        <span className={classes.text}> UNLIMITED EMAIL</span>
                    </Typography>
                    <Typography className={classes.hostIconArea} variant="subtitle1" gutterBottom component="div">
                        <span  className={classes.positionImg}>
                            <img src={icon6} alt="" />
                        </span>
                        <span className={classes.textPosition}>
                        <p className={classes.radio}></p>    
                        </span>
                        <span className={classes.text}> 24/7 LIVE SUPPORT</span>
                    </Typography>
                </Box>
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default DataAnalysis;