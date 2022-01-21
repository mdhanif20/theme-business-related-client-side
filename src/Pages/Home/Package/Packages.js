import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Packages = () => {
    return (
        <Box>
            <Container>
                <Grid container>
                    <Grid xs={12} md={6}>
                        <Box sx={{textAlign:"start"}}>
                            <Typography variant="overline" display="block" sx={{opacity:".3"}} gutterBottom>
                                web hosting
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div">
                                Trust your site to the <br />
                                world's #1 web host.
                            </Typography>
                            <Typography sx={{opacity:".3"}} variant="caption" display="block" gutterBottom>
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
                                    margin:"5px 0px 40px 0px"
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
                                    margin:"5px 0px 40px 0px"
                                    }
                            }
                            variant="contained">Yearly</Button>
                            </span>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6}></Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Packages;