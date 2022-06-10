import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    header:{
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
    
    details:{
        marginBottom:"0px",
       color:"#fff",
       width: "70%",
       margin: "auto",
       padding: "15px 0px",
       fontSize:"18px"
    }
   
})

const HostCard = (props) => {
    const classes = useStyle();
    const {bgImg,icon,header,details,button} = props.host;
    return (
        <Grid item xs={12} md={4}>
            <Card style={{
                background:`url(${bgImg})`,
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
                <img className={classes.img} src={icon} alt="" />
                <Typography className={classes.header} variant="h6" gutterBottom>
                    {header}
                </Typography>

               <Box>
                   <Typography className={classes.details} variant="body1" gutterBottom>
                        {details}
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
                    variant="contained" href="#">{button}</Button>
               </Box>
                       
            </Box>
           </Card>
        </Grid>
        
    );
};

export default HostCard;