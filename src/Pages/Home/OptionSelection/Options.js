import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Option from './Option';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';



const useStyle = makeStyles({
    header:{
        fontWeight: "300",
        paddingBottom: "65px"
    },
    circle:{
        width:"20px",
        height:"20px",
        lineHeight:"20px",
        backgroundColor:"#6633FF",
        borderRadius:"50%"
    },
    core:{
        width: "20px",
        border: "0px"
    },
    storage:{
        width: "70px",
        border: "0px",
        fontSize: "18px",
        fontWeight: "500",
        opacity: ".7"
    },
    price:{
        width: "130px",
        border: "0px",
        fontSize: "18px",
        fontWeight: "500",
        opacity: ".7"
    },
    vpsarea:{
        display: "flex",
        justifyContent: "space-between"
    },
    allCircle:{
        display: "flex",
        justifyContent: "space-between",
        marginBottom:"40px"
    }
})

const Options = () => {
    const [value,setValue] = useState(false);
    const [hostings,setHostings] = useState([]);
    const [getid,setGetid]=useState(1);
    const [selected,setSelected] = useState(1);
  
      useEffect(()=>{
            fetch("./selectOption.JSON")
            .then(res => res.json())
            .then(data => setHostings(data))
        },[getid])
    
        useEffect(()=>{
            const select = hostings.find(host=> host.id===parseFloat(getid))
            setSelected(select)
        },[hostings])

    const vps = (a,b,e) =>{
        setValue(a);
        setGetid(b);
        console.log(e.target.id) 
    }
    
    const classes = useStyle();
   

    return (
        <Box sx={{my:20}}>
           
             <h1 className={classes.header}>
                Select Your Best Option
            </h1>
            <Container>
                <Box>
                    <Box className={classes.vpsarea}>
                        <span>VPS1</span>
                        <span>VPS2</span>
                        <span>VPS3</span>
                        <span>VPS4</span>
                        <span>VPS5</span>
                        
                    </Box>
                    <Box className={classes.allCircle}>
                        <p onClick={()=>vps(true,1)} id="vps1" className={classes.circle}></p>
                        <p onClick={()=>vps(true,2)} className={classes.circle}></p> 
                        <p onClick={()=>vps(true,3)} className={classes.circle}></p>
                        <p onClick={()=>vps(true,4)} className={classes.circle}></p>
                        <p onClick={()=>vps(true,5)} className={classes.circle}></p>
                    </Box>
                    
                    
                  </Box>
                <Grid sx={{mt:5}}>
                    <Grid md={8}> 
                    <Box sx={{justifyContent: "space-between",mx:5,opacity:".4",display:{xs:"none",md:"flex"}}}>
                        <span>CORE</span>
                        <span>STORAGE</span>
                        <span>RAM</span>
                        <span>BANDWIDTH</span>
                        <span>PRICE</span>
                    </Box>
                    </Grid>
                        <Box sx={{my:2,
                         border: "1px solid #f1f1f1",
                        padding: "25px 47px",
                        borderRadius: "50px",
                        display:{xs:"none",md:"block"}}}>
                        <Grid container>
                            <Grid md={8}>
                              
                            <Box sx={{display:"flex",justifyContent: "space-between",mt:1}}>
                            <span style={{marginLeft:""}}>
                              {selected?.id}
                            </span>
                            <span  style={{marginLeft:"20px"}}>
                              {selected?.storage}
                            </span>
                            <span style={{marginLeft:"15px"}}>
                              {selected?.ram}
                            </span>
                            <span style={{marginLeft:"5px"}}>
                              {selected?.bandwidth}
                            </span>
                            <span style={{paddingLeft:"5px"}}>
                              {selected?.price}
                            </span>
                            </Box>
                            </Grid>
                            <Grid sx={{textAlign: "end"}} md={4}>
                            <Button 
                            style={
                                {
                                    background: "linear-gradient(to right,#544CF9,#8F5FF9)",
                                    fontSize: "18px",
                                    padding: "7px 27px",
                                    borderRadius: "30px",
                                    boxShadow: 0,
                                    
                                    }
                            }
                            variant="contained">BUY NOW</Button>
                            </Grid>
                            </Grid>
                        </Box>
                    
                </Grid>


                <Box sx={{my:5,pb:5,display:{xs:"block",md:"none"}}}>
                    <TableContainer>
                       
                            <TableRow>
                                <TableCell sx={{width:"100%"}}>CORE</TableCell>
                                <TableCell align="right">{selected?.id}</TableCell>
                            </TableRow>
                       
                            <TableRow>
                                <TableCell>STORAGE</TableCell>
                                <TableCell align="right">{selected?.storage}</TableCell>
                            </TableRow>
                       
                            <TableRow>
                                <TableCell>RAM</TableCell>
                                <TableCell align="right"> {selected?.ram}</TableCell>
                            </TableRow>
                       
                            <TableRow>
                                <TableCell>BANDWIDTH</TableCell>
                                <TableCell align="right">{selected?.bandwidth}</TableCell>
                            </TableRow>
                       
                            <TableRow>
                                <TableCell>PRICE</TableCell>
                                <TableCell align="right">{selected?.price}</TableCell>
                            </TableRow>
                       
                    </TableContainer>
                </Box>
            </Container>
        </Box>
    );
};

export default Options;