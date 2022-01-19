import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@mui/styles';
import bg from "../../../images/videobg.jpg";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SpaIcon from '@material-ui/icons/Spa';


const useStyle = makeStyles({
    bg:{
        background:`url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    header:{
        color:"#fff",
        padding:"20px 0px"
    },
    text:{
        color:"#fff",
        opacity:".7",
        fontSize:"18px"
    },
    icon:{
        marginRight:"5px"
    }
})

const SupportTeam = () => {
    const classes = useStyle();
    return (
        <Box sx={{py:10,mb:15}} className={classes.bg}>
           <Typography variant="h4" className={classes.header} gutterBottom>
              Need help? Call our award-winning support team 24/7 at 020 7084 1810
            </Typography>
            <Typography className={classes.text} variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
           </Typography>
           <Button 
             style={
                  {
                    background: "linear-gradient(to right,#49C5EE,#5AEBDE)",
                    fontSize: "18px",
                     padding: "7px 35px",
                     borderRadius: "30px",
                     boxShadow: 0,
                     margin:"25px 0px 10px 0px",
                      color:"#fff",
                   }
                   }
               variant="contained"><SpaIcon className={classes.icon}/> <span>LIVE CHAT</span> </Button>
        </Box>
    );
};

export default SupportTeam;