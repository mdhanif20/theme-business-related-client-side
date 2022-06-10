import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@mui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';
import Card from '@material-ui/core/Card';
import bgImg1 from "../../../images/hostImg/img1.jpg";
import bgImg2 from "../../../images/hostImg/img2.jpg";
import bgImg3 from "../../../images/hostImg/img3.jpg";
import icon1 from "../../../images/hostImg/icon1.png";
import icon2 from "../../../images/hostImg/icon2.png";
import icon3 from "../../../images/hostImg/icon3.png";
import Stack from '@mui/material/Stack';

const useStyle = makeStyles({
    header:{
        fontWeight: "300"
    },
    details:{
        opacity:".7",
        marginBottom:"50px"
    },
    title:{
        color:"#fff"
    },
    img:{
        width: "100px",
        height: "100px",
        transition:".8s",
    },
    backgroundColor:{
        background: "linear-gradient(to top,rgb(40 255 255 / 92%),rgb(3 253 218 / 0%))",
        padding: "400px 0px 100px 0px",
        height:"100%",
        position:"absolute",
        left:"0",
        bottom:"-90%",
        transition:".8s",
        "&:hover":{
            bottom:"-50%",
            
        }
    },
    info:{
       marginBottom:"0px",
       color:"#fff",
       width: "70%",
       margin: "auto",
       padding: "15px 0px",
       fontSize:"18px"
    },
    getHosting:{
        background: "none",
        backgroundSize: "none",
        backgroundRepeat: "none",
        backgroundPosition: "none"
    }
})

const HostingArea = () => {
    const classes = useStyle();
    return (
        <Stack className={classes.getHosting} sx={{my:10}}> 
            
            <Container>
            <Box sx={{background:"none"}}>
                <h1 className={classes.header}>
                  Go with GetHost.
                </h1>
                <Typography className={classes.details} variant="h6" gutterBottom>
                We have 100's of domains to choose from, not to mention prices that other companies only dream about.
                </Typography>
            </Box>
                <Grid container>
                    <Grid item xs={12} md={4}>
                            <Card style={{
                                background:`url(${bgImg1})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                margin:"10px 5px",
                                height:"500px",
                                borderRadius:"0px",
                                boxShadow:"0",
                                position:"relative",
                                textAlign:"center"
                                }}>
                            <Box className={classes.backgroundColor}>
                                <img className={classes.img} src={icon1} alt="" />
                                <Typography className={classes.title} variant="h6" gutterBottom>
                                Choose Hosting
                                </Typography>

                            <Box>
                                <Typography className={classes.info} variant="body1" gutterBottom>
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
                                    variant="contained" href="#">GET HOSTING</Button>
                            </Box>      
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                            <Card style={{
                                background:`url(${bgImg2})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                margin:"10px 5px",
                                height:"500px",
                                borderRadius:"0px",
                                boxShadow:"0",
                                position:"relative",
                                textAlign:"center"
                                }}>
                            <Box className={classes.backgroundColor}>
                                <img className={classes.img} src={icon2} alt="" />
                                <Typography className={classes.title} variant="h6" gutterBottom>
                                Search a Domain
                                </Typography>

                            <Box>
                                <Typography className={classes.info} variant="body1" gutterBottom>
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
                    <Grid item xs={12} md={4}>
                            <Card style={{
                                background:`url(${bgImg3})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                margin:"10px 5px",
                                height:"500px",
                                borderRadius:"0px",
                                boxShadow:"0",
                                position:"relative",
                                textAlign:"center"
                                }}>
                            <Box className={classes.backgroundColor}>
                                <img className={classes.img} src={icon3} alt="" />
                                <Typography className={classes.title} variant="h6" gutterBottom>
                                30 Days Trial
                                </Typography>

                            <Box>
                                <Typography className={classes.info} variant="body1" gutterBottom>
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
        </Stack>
    );
};

export default HostingArea;