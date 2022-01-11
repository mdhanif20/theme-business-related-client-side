import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import iconImg from "../../../images/serverIcon.png";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from '@mui/material/Link';
import serverImg from "../../../images/server.jpg";



const HostingResource = () => {
    
    return (
       <Box sx={{borderBottom:"1px solid #f1f1f1",mb:12}}>
            <Container sx={{pb:3}}>
            <Grid container>
                <Grid item xs={12} md={7} sx={{textAlign:"start"}}>
                    <img src={iconImg} alt="" /> <br />
                    <Link
                    sx={{color:"black",
                    fontSize: "2.2rem", 
                    fontWeight:"300",
                    "&:hover:":{
                        color:"red"
                    }}} 
                    href="#" underline="none">
                       Seamlessly scale your hosting <br /> resources as your needs evolve.
                    </Link>
                    <Typography variant="subtitle1"
                    sx={{
                        fontSize: "18px",
                        opacity: ".7",
                        mt:5,
                        mb:3
                    }}
                    gutterBottom component="div">
                     Our cloud-vps servers provide the ultimate hosting <br /> experience, that will meet your exact demands.
                    </Typography>
                    <Typography sx={{fontSize:"17px",fontWeight: 'Bold',opacity:".8",mb:2}} variant="subtitle2" gutterBottom component="div">
                    All of our Cloud VPS Plans include:
                    </Typography>
                    <Box>
                        <Link
                        sx={{color:"black", 
                        fontWeight:"300",
                        display:"flex",
                        my:1
                        }} 
                        href="#" underline="none">
                        <CheckCircleIcon sx={{color:"#9636ff",mr:1,fontSize:"18px"}}/> 
                        <Typography sx={{opacity:".6"}} variant="subtitle2" gutterBottom component="div">
                        Enterprise quality hardware
                        </Typography>
                        </Link>
                      
                        <Link
                        sx={{color:"black", 
                        fontWeight:"300",
                        display:"flex",
                        my:1
                        }} 
                        href="#" underline="none">
                        <CheckCircleIcon sx={{color:"#9636ff",mr:1,fontSize:"18px"}}/> 
                        <Typography sx={{opacity:".6"}} variant="subtitle2" gutterBottom component="div">
                        world-class datacenters
                        </Typography>
                        </Link>
                      
                        <Link
                        sx={{color:"black", 
                        fontWeight:"300",
                        display:"flex",
                        my:1
                        }} 
                        href="#" underline="none">
                        <CheckCircleIcon sx={{color:"#9636ff",mr:1,fontSize:"18px"}}/> 
                        <Typography sx={{opacity:".6"}} variant="subtitle2" gutterBottom component="div">
                        Full root access
                        </Typography>
                        </Link>
                      
                        <Link
                        sx={{color:"black", 
                        fontWeight:"300",
                        display:"flex",
                        my:1
                        }} 
                        href="#" underline="none">
                        <CheckCircleIcon sx={{color:"#9636ff",mr:1,fontSize:"18px"}}/> 
                        <Typography sx={{opacity:".6"}} variant="subtitle2" gutterBottom component="div">
                        24/7/365 Expert Support Based in the USA
                        </Typography>
                        </Link>
                      
                    </Box>
                   
                </Grid>
                <Grid item xs={12} md={5}>
                    <Container sx={{mb:4,mt:{xs:8,md:0}}}>
                       <img width="100%" height="100%" src={serverImg} alt="" />
                    </Container>
                </Grid>
            </Grid>
        </Container>
       </Box>
    );
};

export default HostingResource;