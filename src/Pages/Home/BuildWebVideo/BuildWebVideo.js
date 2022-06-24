import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import bg from "../../../images/videobg.jpg";
import Typography from '@mui/material/Typography';
import img from "../../../images/videobg.png";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';



const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  height: "60vh";
  width:"60vh",
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: "100%",
  bgcolor: 'background.paper',
  height:"100%"
};

const smallStyle = {
  width: "80%",
  bgcolor: 'background.paper',
  height:"80%"
};


const useStyle = makeStyles({
    bg:{
        background:`url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
    },
    smallbg:{
        background:`url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    header:{
        color: "#fff",
        opacity: ".9"
    },
    img:{
        width:"70%",
        border:'55px solid #fff',
        borderRadius: "50px 50px 0px 0px",
        borderBottom:"0px",
        marginBottom: "-8px"
    },
    smallImg:{
        width:"80%",
        border:'15px solid #fff',
        borderRadius: "10px 10px 0px 0px",
        marginBottom: "-7px",
        borderBottom:"0px"
    },
    videoPlayerBtn:{
        padding: "1.4rem",
        border: "0",
        borderRadius:" 50%",
        backgroundColor: "#99FFFF",  
        marginTop: "-45vh",
        cursor:"pointer"
    },
    smallvideoPlayerBtn:{
        padding: "1rem",
        border: "0",
        borderRadius:" 50%",
        backgroundColor: "#99FFFF",  
        marginTop: "-15vh",
        cursor:"pointer"
    },
    buttonBox:{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around"
    }
})




const BuildWebVideo = () => {
    const classes = useStyle();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
       <Box sx={{pt:{xs:5,md:10}}}>
            <Box sx={{display:{xs:"none",md:"block",textAlign:"center"}}} className={classes.bg}>
                <Typography sx={{pt:{xs:10,md:20},pb:5}} className={classes.header} variant="h5"  gutterBottom>
                Your hands can do incredible things. Like build a website in under an hour.
                </Typography>
                <img className={classes.img} src={img} alt="" />
                
                <Box>
                    <div>
                        <Box className={classes.buttonBox}>
                            <button className={classes.videoPlayerBtn} type="button" onClick={handleOpen}>
                            <PlayArrowIcon sx={{fontSize:"5rem",color: "#fff"}}/>
                            </button>
                        </Box>
                        
                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={handleClose}
                            BackdropComponent={Backdrop}
                        >
                            <Box sx={style}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kKn6H7A0Uvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Box>
                        </StyledModal>
                    </div>
                </Box>
                
            </Box>


        
        <Box sx={{display:{xs:"block",md:"none"}}} className={classes.smallbg}>
            <Typography sx={{pt:6,pb:4,px:2}} className={classes.header} variant="h5"  gutterBottom>
            Your hands can do incredible things. Like build a website in under an hour.
            </Typography>
            <img className={classes.smallImg} src={img} alt="" />
            
            <Box>
                <div>
                    <Box className={classes.buttonBox}>
                        <button className={classes.smallvideoPlayerBtn} type="button" onClick={handleOpen}>
                        <PlayArrowIcon sx={{fontSize:"2rem",color: "#fff"}}/>
                        </button>
                    </Box>
                    
                    <StyledModal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={open}
                        onClose={handleClose}
                        BackdropComponent={Backdrop}
                    >
                        <Box sx={smallStyle}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kKn6H7A0Uvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Box>
                    </StyledModal>
                </div>
            </Box>
        
        </Box>

       </Box>
    );
};

export default BuildWebVideo;