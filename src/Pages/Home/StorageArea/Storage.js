import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import useAuth from '../../Shared/Firebase/useAuth';
import StorageBuyModal from './StorageBuyModal';



const useStyle = makeStyles({
    header:{
        fontWeight: "300",
        paddingBottom: "60px",
    },
    circle:{
        width:"20px",
        height:"20px",
        backgroundColor:"#6633FF",
        borderRadius:"50%",
        cursor:"pointer"
    },
    core:{
        width: "20px",
        border: "0px"
    },
    storage:{
        width: "80px",
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
    },
    storageform:{
        display:"flex",
        justifyContent: "space-between",
        marginTop:"20px"
    },
    input:{
        border: "none",
        width: "70px",
        fontSize: "1.1rem",
        background: "#fff",
        color: "black"
    },
    buyButton:{
        
    }
})

const Storage = () => {
    const {users} = useAuth();
    const [value,setValue] = useState(false);
    const [hostings,setHostings] = useState([]);
    console.log(hostings)
    const [getid,setGetid]=useState(1);
    const [selected,setSelected] = useState(1);
    const [openBooking, setOpenBooking] = useState(false);
    const [buyerData,setBuyerData]= useState({});
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    
    const buyStorage = selected =>{
        const info = {
            email:users.email,
            storage:selected.storage,
            ram:selected.ram,
            bandwidth:selected.bandwidth,
            price:selected.price,
            core:selected.core,
            id:selected.id
        }
        setBuyerData(info)
        handleBookingOpen()

    }    

      useEffect(()=>{
            fetch("http://localhost:5000/storage")
            .then(res => res.json())
            .then(data => setHostings(data))
        },[getid])
    
        useEffect(()=>{
            const select = hostings.find(host=> parseInt(host.id)===parseFloat(getid))
            setSelected(select)
        },[hostings])

    const vps = (a,b,e) =>{
        setValue(a);
        setGetid(b);
    }
    
    const classes = useStyle();
   

    return (
        <Box sx={{my:10}}>
            <Container>
            <h1 className={classes.header}>
                Select Your Best Option
            </h1>
                <Box>
                    <Box style={{borderTop:"none"}} className={classes.vpsarea}>
                        <span>VPS1</span>
                        <span>VPS2</span>
                        <span>VPS3</span>
                        <span>VPS4</span>
                        <span>VPS5</span>
                        
                    </Box>
                    <Box className={classes.allCircle}>
                        
                        <p onClick={()=>vps(true,1)} id="vps1"
                         style={{width:"20px",
                         height:"20px",
                         backgroundColor:"#6633FF",
                         borderRadius:"50%",
                         cursor:"pointer"}}
                         ></p>

                        <p onClick={()=>vps(true,2)} 
                        style={{width:"20px",
                        height:"20px",
                        backgroundColor:"#6633FF",
                        borderRadius:"50%",
                        cursor:"pointer"}}
                        ></p> 

                        <p onClick={()=>vps(true,3)} 
                        style={{width:"20px",
                        height:"20px",
                        backgroundColor:"#6633FF",
                        borderRadius:"50%",
                        cursor:"pointer"}}
                        ></p>

                        <p onClick={()=>vps(true,4)} 
                        style={{width:"20px",
                        height:"20px",
                        backgroundColor:"#6633FF",
                        borderRadius:"50%",
                        cursor:"pointer"}}
                        ></p>

                        <p onClick={()=>vps(true,5)} 
                        style={{width:"20px",
                        height:"20px",
                        backgroundColor:"#6633FF",
                        borderRadius:"50%",
                        cursor:"pointer"}}
                        ></p>

                    </Box>
                    
                    
                  </Box>
                <Grid sx={{mt:5}}>
                    <Grid md={12}> 
                    <Box sx={{justifyContent: "space-between",ml:5,mr:25,opacity:".4",display:{xs:"none",md:"flex"}}}>
                        <span>CORE</span>
                        <span>STORAGE</span>
                        <span>RAM</span>
                        <span>BANDWIDTH</span>
                        <span>PRICE</span>
                        <span>Buy Now</span>
                    </Box>
                    </Grid>
                        <Box sx={{my:2,
                         border: "1px solid #f1f1f1",
                        padding: "25px 47px",
                        borderRadius: "50px",
                        display:{xs:"none",md:"block"}}}>
                        <Grid container>
                            <Grid md={12}>
                              
                            <Box sx={{}}>
                            <form className={classes.storageform} action="">
                                <input disabled className={classes.input} type="text" value={selected?.id} />
                                <input disabled className={classes.input} type="text" value={selected?.storage} />
                                <input disabled className={classes.input} type="text" value={selected?.ram} />
                                <input disabled className={classes.input} type="text" value={selected?.bandwidth} />
                                <input style={{width:"90px"}} disabled className={classes.input} type="text" value={selected?.price} />
                                <Button 
                                onClick = {()=>buyStorage(selected)}
                                style={{
                                    background: "linear-gradient(to right,#544CF9,#8F5FF9)",
                                    fontSize: "18px",
                                    padding: "7px 27px",
                                    borderRadius: "30px",
                                    boxShadow: 0
                                }}
                                variant="contained">BUY NOW</Button>
                            <Box>
                            <StorageBuyModal
                            openBooking={openBooking}
                            handleBookingClose={handleBookingClose}
                            data = {buyerData}
                            >
                            </StorageBuyModal> 
                            </Box>
                            </form>
                            
                            </Box>
                            </Grid>
                            {/* <Grid sx={{textAlign: "end"}} md={4}>
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
                             
                             </Grid> */}
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

export default Storage;