import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    option:{
        display:"flex",
        backgroundColor:"rgb(243, 246, 249)",
        marginBottom:"100px",
        justifyContent:"space-between",
        width:{xs:"70%",md:"100%"},
        padding:"10px 20px 7px 20px",
        cursor:"pointer",
        transition:".3s",
        "&:hover":{
            backgroundColor:"red"
        }
    }
})

const DataAnalysis = () => {
    const classes = useStyle();
    return (
        <Container>
            <Grid container>
                <Grid md={8} sx={{textAlign:"start"}}>
                    <h2 style={{fontSize:"2.5rem",fontWeight:"300",marginBottom:"10px"}}>High Speed Server</h2>
                    <Typography variant="body1" sx={{opacity:".4",lineHeight:"30px",width:{xs:"90%",md:"80%"}}} gutterBottom>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum expedita praesentium enim quos optio iusto voluptatum totam harum rerum. Eius maxime delectus id, ratione ipsa vero labore adipisci, est ab cupiditate blanditiis repellendus mollitia earum, ea odit deserunt aspernatur?
                    </Typography>
                    <Box sx={{my:5}}>
                        <Typography sx={{width:{xs:"90%",md:"70%"},my:2}} className={classes.option} variant="subtitle2" gutterBottom component="div">
                            <span style={{fontSize:".9rem",fontWeight:"600"}}>Drag and Drop Website Builder</span>
                            <span > <ArrowForwardIosIcon sx={{fontSize:"15px",marginTop:"1px"}}/> </span>
                        </Typography>
                        <Typography sx={{width:{xs:"90%",md:"70%"},my:2}} className={classes.option}  variant="subtitle2" gutterBottom component="div">
                            <span style={{fontSize:".9rem",fontWeight:"600"}}>Include All Essential Installation Tools</span>
                            <span > <ArrowForwardIosIcon sx={{fontSize:"15px",marginTop:"1px"}}/> </span>
                        </Typography>
                        <Typography sx={{width:{xs:"90%",md:"70%"},my:2}} className={classes.option} variant="subtitle2" gutterBottom component="div">
                            <span style={{fontSize:".9rem",fontWeight:"600"}}>Backup Facility</span>
                            <span > <ArrowForwardIosIcon sx={{fontSize:"15px",marginTop:"1px"}}/> </span>
                        </Typography>
                        <Typography sx={{width:{xs:"90%",md:"70%"},my:2}} className={classes.option} variant="subtitle2" gutterBottom component="div">
                            <span style={{fontSize:".9rem",fontWeight:"600"}}>Free Domain Transfer</span>
                            <span > <ArrowForwardIosIcon sx={{fontSize:"15px",marginTop:"1px"}}/> </span>
                        </Typography>
                        
                    </Box>
                    
                </Grid>
                <Grid md={4}>Hanif</Grid>
            </Grid>
        </Container>
    );
};

export default DataAnalysis;