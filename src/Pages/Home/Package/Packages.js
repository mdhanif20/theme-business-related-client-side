import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


const Packages = () => {
    return (
        <Box>
            <Container>
                <Grid container>
                    <Grid sx={{my:3}} xs={12} md={6}>
                        <Box sx={{textAlign:"start"}}>
                            <Typography variant="overline" display="block" sx={{opacity:".3"}} gutterBottom>
                                web hosting
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div">
                                Trust your site to the <br />
                                world's #1 web host.
                            </Typography>
                            <Typography sx={{opacity:".3",my:4}} variant="caption" display="block" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, <br /> nobis. Lorem ipsum dolor sit amet.
                            </Typography>

                            <span>
                            <Button 
                            style={
                                {
                                    background: "linear-gradient(to right,#8F5FF9,#544CF9)",
                                    fontSize: "16px",
                                    padding: "10px 20px",
                                    borderRadius: "30px 0px 0px 30px",
                                    boxShadow: 0,
                                    margin:"20px 0px 40px 0px"
                                    }
                            }
                            variant="contained">Monthly</Button>
                            <Button 
                            style={
                                {
                                    background: "#fff",
                                    fontSize: "16px",
                                    padding: "10px 20px",
                                    borderRadius: "0px 30px 30px 0px",
                                    color:"black",
                                    boxShadow: 0,
                                    margin:"20px 0px 40px 0px"
                                    }
                            }
                            variant="contained">Yearly</Button>
                            </span>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} sx={{display:"flex",my:5}}>
                        
                            <Card sx={{width:"50%",textAlign:"center",py:5,px:1}}>
                                <Box>
                                <Typography variant="button" display="block" sx={{fontWeight:"600"}} gutterBottom>
                                    Business
                                </Typography>
                                <Typography variant="caption" display="block" sx={{opacity:".5"}} gutterBottom>
                                    Yearly Package
                                </Typography>
                                <Typography variant="h4" sx={{fontWeight:"600"}} gutterBottom component="div">
                                    $89.<sup>99</sup>
                                </Typography>
                                <Typography variant="h5" display="block" sx={{opacity:".5",fontSize:"1rem"}} gutterBottom>
                                    
                                </Typography>
                                <Typography variant="h5" sx={{fontSize:"16px",opacity:".4"}} gutterBottom component="div">
                                    50GB Bandwidth <br />
                                    Business & Finance Analysis <br />
                                    24 hour support <br />
                                    Customer Management
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
                                        margin:"15px 0px 10px 0px",
                                        position:"revert"
                                        }
                                }
                                variant="contained" href="#">Sing Up</Button>
                                </Box>
                            </Card>
                      
                        
                            <Card sx={{width:"50%",textAlign:"center",py:5,px:1}}>
                                <Box>
                                <Typography variant="button" display="block" sx={{fontWeight:"600"}} gutterBottom>
                                    Business
                                </Typography>
                                <Typography variant="caption" display="block" sx={{opacity:".5"}} gutterBottom>
                                    Yearly Package
                                </Typography>
                                <Typography variant="h4" sx={{fontWeight:"600"}} gutterBottom component="div">
                                    $89.<sup>99</sup>
                                </Typography>
                                <Typography sx={{fontSize:"16px",opacity:".4"}} variant="h5" gutterBottom component="div">
                                    50GB Bandwidth <br />
                                    Business & Finance Analysis <br />
                                    24 hour support <br />
                                    Customer Management
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
                                        margin:"15px 0px 10px 0px",
                                        position:"revert"
                                        }
                                }
                                variant="contained" href="#">Sing Up</Button>
                                </Box>
                            </Card>
                      
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Packages;