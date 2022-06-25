import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Card from '@material-ui/core/Card';
import bg1 from "../../../images/hostImg/img1.jpg";
import icon1 from "../../../images/hostImg/icon1.png";
import icon2 from "../../../images/hostImg/icon2.png";
import bg2 from "../../../images/hostImg/img2.jpg";
import bg3 from "../../../images/hostImg/img3.jpg";
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    headerDetails:{
        fontSize:"1.5rem",
        opacity:".7"
    },
    hosting:{
        background: `URL(${bg1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width:'100%',
        height:"100%"
    },
    find:{
        background: `URL(${bg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width:'100%',
        height:"100%"
    },
    started:{
        background: `URL(${bg3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width:'100%',
        height:"100%"
    },
    textArea:{
        textAlign:"center",
        background: "linear-gradient(to top,rgb(40 255 255 / 92%),rgb(3 253 218 / 0%))",
        width:"auto",
        height:'100%',
        bottom:"-28%",
        position:'relative',
        transition:".8s",
        "&:hover":{
            bottom:"0%",
            
        }
    }
});


const GetHost = () => {
    const classes = useStyle();
    return (
        <Container style={{padding:"70px 0px",margin:"50px auto"}}>
            <Box sx={{textAlign:"center",pb:5}}>
                <h1 style={{fontWeight:"400",fontSize:"2.5rem"}}>
                Go with GetHost.
                </h1>
                <Typography className={classes.headerDetails} variant="body1" gutterBottom>
                We have 100's of domains to choose from, not to mention prices that other companies only dream about.
                </Typography>
            </Box>

            <Grid container>
                <Grid sx={{ width:'100%', height:"530px",px:1,py:2}} xs={12} sm={6} md={4}>
                    <Card className={classes.hosting}>
                        
                        <Box sx={{p:1}} className={classes.textArea}>
                        <Box sx={{marginTop:'230px'}}>
                        <img className={classes.img} src={icon1} alt="" />
                        <Typography sx={{color:"#fff"}}  variant="h6" gutterBottom>
                        Choose Hosting
                        </Typography>
                        <Typography sx={{color:"#fff"}} variant="body1" gutterBottom>
                        See how brands and agencies power their influencer marketing campaigns with #paid.
                        </Typography>
                        <Button 
                            style={
                                    {
                                        backgroundColor: "#fff",
                                        fontSize: "15px",
                                        fontWeight:"600",
                                        padding: "8px 10px",
                                        width:"150px",
                                        borderRadius: "30px",
                                        boxShadow: 0,
                                        color:"black",
                                        margin:"15px 0px 10px 0px"
                                        }
                                }
                        variant="contained" href="#hostings">GET HOSTING</Button>
                        </Box>
                        </Box>
                    </Card>
                </Grid>
               
                <Grid sx={{ width:'100%', height:"530px",px:1,py:2}} xs={12} sm={6} md={4}>
                    <Card className={classes.find}>
                    <Box sx={{p:1}} className={classes.textArea}>
                        <Box sx={{marginTop:'230px'}}>
                        <img className={classes.img} src={icon2} alt="" />
                        <Typography style={{marginTop:"-7px"}} sx={{color:"#fff"}}  variant="h6" gutterBottom>
                        Search a Domain
                        </Typography>
                        <Typography sx={{color:"#fff"}} variant="body1" gutterBottom>
                        See how brands and agencies power their influencer marketing campaigns with #paid.
                        </Typography>
                        <Button 
                            style={
                                    {
                                        backgroundColor: "#fff",
                                        fontSize: "15px",
                                        fontWeight:"600",
                                        padding: "8px 10px",
                                        width:"150px",
                                        borderRadius: "30px",
                                        boxShadow: 0,
                                        color:"black",
                                        margin:"15px 0px 10px 0px"
                                        }
                                }
                        variant="contained" href="#">FIND NOW</Button>
                        </Box>
                        </Box>
                    </Card>
                </Grid>
               
                <Grid sx={{ width:'100%', height:"530px",px:1,py:2}} xs={12} sm={6} md={4}>
                    <Card className={classes.started}>
                    <Box sx={{p:1}} className={classes.textArea}>
                        <Box sx={{marginTop:'230px'}}>
                        <img className={classes.img} src={icon1} alt="" />
                        <Typography sx={{color:"#fff"}}  variant="h6" gutterBottom>
                        30 Days Trial
                        </Typography>
                        <Typography sx={{color:"#fff"}} variant="body1" gutterBottom>
                        See how brands and agencies power their influencer marketing campaigns with #paid.
                        </Typography>
                        <Button 
                            style={
                                    {
                                        backgroundColor: "#fff",
                                        fontSize: "15px",
                                        fontWeight:"600",
                                        padding: "8px 10px",
                                        width:"150px",
                                        borderRadius: "30px",
                                        boxShadow: 0,
                                        color:"black",
                                        margin:"15px 0px 10px 0px"
                                        }
                                }
                        variant="contained" href="#">GET STARTED</Button>
                        </Box>
                        </Box>
                    </Card>
                </Grid>
               
            </Grid>
        </Container>
    );
};

export default GetHost;