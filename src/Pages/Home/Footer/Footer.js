import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import bg from "../../../images/footer.png";

const Footer = () => {
    return (
        <Box sx={{background:`url(${bg})`,backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",pt:22}}>
            <Container>
                <Box sx={{borderBottom:"1px solid #f1f1f1",pb:5}}>
                <Grid container>
                    <Grid xs={12} md={3}>
                        <Box sx={{textAlign:"start"}} >
                            <Typography  sx={{ fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                                company
                            </Typography>
                            <Box sx={{ opacity:".6",py:2}}>
                                <Typography variant="body1" gutterBottom>
                                    Associates
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    About
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Pricing
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Careers
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Contact
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Blog
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={3}>
                        <Box sx={{textAlign:"start"}} >
                            <Typography  sx={{ fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                               PRODUCTS
                            </Typography>
                            <Box sx={{ opacity:".6",py:2}}>
                                <Typography variant="body1" gutterBottom>
                                    Shared hosting
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Wordpress hosting
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    VPS hosting
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Dedicated hosting
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Reseller hosting
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Hosting features
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={3}>
                        <Box sx={{textAlign:"start"}} >
                            <Typography  sx={{ fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                             SUPPORT
                            </Typography>
                            <Box sx={{ opacity:".6",py:2}}>
                                <Typography variant="body1" gutterBottom>
                                    Chat
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Tickets
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Knowledgebase
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    System Status
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Terms of service
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Privacy policy
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={3}>
                        <Box sx={{textAlign:"start"}} >
                            <Typography  sx={{ fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                                Follow us
                            </Typography>
                            <Box sx={{display: "flex", justifyContent: "space-around",my:3}}>
                                <span><InstagramIcon/></span>
                                <span><FacebookIcon/></span>
                                <span><TwitterIcon/></span>
                                <span><YouTubeIcon/></span>
                                <span><GitHubIcon/></span>
                            </Box>
                                <Typography  sx={{ fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                                SUBSCRIBE US
                                </Typography>
                            <Box sx={{ opacity:".6",py:2}}>
                                
                                <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                </Typography>

                                <span style={{display:"flex",marginTop:"25px"}}>
                                    <input style={{
                                            fontSize: "18px",
                                            padding: "10px 15px",
                                            border: "0px",
                                            boxShadow:" inset 2px 1px 10px 19px #e8e8e8"
                                    }} type="text" placeholder='Your Email Address' />
                                    <Button 
                            style={
                                {
                                    background: "linear-gradient(to right,#544CF9,rgb(113 48 255))",
                                    fontSize: "18px",
                                    padding: "10px",
                                    boxShadow: 0,
                                    
                                    }
                            }
                            variant="contained"><ArrowForwardIcon/></Button>
                                </span>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                </Box>
                <Box sx={{py:5}}>
                    <Grid container>
                        <Grid xs={12} md={6}>
                            <Typography sx={{textAlign:"start"}} variant="caption" display="block" gutterBottom>
                             © 2017 Hogash.com | All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Typography sx={{
                                display:"flex",
                                justifyContent: "flex-end",
                                alignItems:"center"
                                }} variant="caption" display="block" gutterBottom>
                            <span>For emergency cases</span> <LocalPhoneIcon sx={{fontSize:"17px",mx:.5}}/> <span>+8801609015767</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;