import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@mui/styles';
import bg from "../../../images/footer.png";
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';


const useStyle = makeStyles({
    fullArea:{
        background:`url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
});

const FooterReall = () => {
    const classes = useStyle();
    return (
        <> 
        <Box sx={{display:{xs:"none",sm:"block"}}}>
        <p style={{position:"fixed",right:"5px",bottom:"30px",zIndex:100}}>
            <a href="#appBar" >
            < KeyboardControlKeyIcon sx={{color:"#fff",backgroundColor:"#8200B9"}} />
            </a>
        </p>
        <p style={{position:"fixed",right:"5px",bottom:"0px",zIndex:100}}>
            <a href="#footer">
            < KeyboardArrowDownIcon sx={{color:"#fff",backgroundColor:"#8200B9"}}/>
            </a>
        </p>
       
        </Box> 
        <Box id="footer" sx={{pt:10}} className={classes.fullArea}>
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={3} >
                    <Box sx={{textAlign:"start",my:5,mx:{xs:1,sm:0}}} style={{textAlign:"start",color:"#000000",background:"none",border:"0px",borderRadius:"0px"}} >
                            <Typography  sx={{ fontWeight: 'bold',pb:2}} variant="button" display="block" gutterBottom>
                                company
                            </Typography>
                            <Box style={{ opacity:".6",py:2,display:"block",border:"0px",borderRadius:"0px"}}>
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
                    <Grid xs={12} sm={3} style={{color:"black"}} sx={{}}>
                    <Box style={{border:"none",padding:0,boxShadow:'none',background:"none"}} sx={{textAlign:"start",my:5,display:{xs:"none",sm:"block"}}} >
                            <Typography  sx={{ fontWeight: 'bold',pb:2}} variant="button" display="block" gutterBottom>
                               PRODUCTS
                            </Typography>
                            <Box style={{backgroundColor:"transparent",padding:"0px"}} sx={{ opacity:".6",py:2}}>
                                <Typography style={{display:"block"}} variant="body1" gutterBottom>
                                    Shared
                                </Typography>
                                <Typography style={{display:"block"}} variant="body1" gutterBottom>
                                    Wordpress
                                </Typography>
                                <Typography style={{display:"block"}} variant="body1" gutterBottom>
                                    VPS
                                </Typography>
                                <Typography style={{display:"block"}} variant="body1" gutterBottom>
                                    Dedicated
                                </Typography>
                                <Typography style={{display:"block"}} variant="body1" gutterBottom>
                                    Reseller
                                </Typography>
                                <Typography style={{display:"block"}} variant="body1" gutterBottom>
                                    Hosting
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={3} sx={{}}>
                    <Box sx={{textAlign:"start",py:5,display:{xs:"none",sm:"block"}}} >
                            <Typography  sx={{ fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                             SUPPORT
                            </Typography>
                            <Box style={{backgroundColor:"transparent",width:"100%"}} sx={{ opacity:".6",py:2}}>
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
                    <Grid xs={12} sm={3}>
                    <Box style={{width:'100%',display:"block"}} sx={{textAlign:"start",py:5,mx:{xs:1,sm:0}}} >
                            <Typography  sx={{ fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                                Follow us
                            </Typography>
                            <Box style={{width:'100%'}} sx={{display: "flex", justifyContent: "space-around",my:3}}>
                                <a target="_blank" rel="noreferrer" href="https://web.facebook.com/?_rdc=1&_rdr"><InstagramIcon sx={{color:"#8200B9",cursor:"pointer"}}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100055606685759"><FacebookIcon sx={{color:"#8200B9",cursor:"pointer"}}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100055606685759"><TwitterIcon sx={{color:"#8200B9",cursor:"pointer"}}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100055606685759"><YouTubeIcon sx={{color:"#8200B9",cursor:"pointer"}}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100055606685759"><GitHubIcon sx={{color:"#8200B9",cursor:"pointer"}}/></a>
                            </Box>
                                <Typography  sx={{ fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                                SUBSCRIBE US
                                </Typography>
                            <Box style={{width:"100%",display:"block"}} sx={{ opacity:".6",py:2}}>
                                
                                <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                </Typography>

                                <span style={{display:"flex",marginTop:"25px",width:"100%",zIndex:1}}>
                                    <input style={{
                                            fontSize: "16px",
                                            width:'100%',
                                            padding: "5px 10px",
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
            </Container>
            
        </Box>

            <p style={{padding:"15px 5px 5px 5px", textAlign:'start',borderTop:"1px solid rgb(203 203 203)",backgroundColor:"#FCFEFF"}}>
            © 2022 Hogash.com | All rights reserved.
            </p>

        </>
    );
};

export default FooterReall;