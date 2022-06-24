import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Scrollbars } from 'react-custom-scrollbars';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AddNewHosting from './AddNewHosting';
import HostingUpdateModal from "./HostingUpdateModal";


const HostingAdmin = () => {
    const [hostings,setHostings] = useState([]);
    const [update,setUpdate]= useState({});
    const [openBooking, setOpenBooking] = useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const handleUpdateOpen = () => setOpenUpdate(true);
    const handleUpdateClose = () => setOpenUpdate(false);
    const updateModalOpen = e =>{
        setUpdate(e)
        handleUpdateOpen()
    }
    let value = 0;
    const serialNumber = (n)=>{
        value = value+1;
    }

    //load theme
    useEffect(()=>{
        fetch("http://localhost:5000/hosting")
        .then(res=> res.json())
        .then(data => setHostings(data))
    },[openBooking,openUpdate])


    // for delete 
  const deleteHosting = id =>{
        const proceed = window.confirm("Are you sure, you want to delete?")
        if(proceed){
            const url = `http://localhost:5000/hosting/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert("Delete Successfully")
                    const remainingUser = hostings.filter(theme=> theme._id !== id) 
                    setHostings(remainingUser) 
                }
            }) 
        }
    } 

    return (
        <> 
        <Box sx={{px:{xs:2,sm:3,md:5}}}>
        <Box sx={{display:"flex",color:"#fff",bgcolor:"#8F40FB",justifyContent:"space-around",borderRadius:"30px",margin:"15px 0px",}}>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/editTheme"> <Button style={{color:"#fff",fontSize:"18px"}}>Theme</Button> </Link>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/editDomain"> <Button style={{color:"#fff",fontSize:"18px"}}>Domain</Button> </Link>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/editHosting"> <Button style={{color:"#fff",fontSize:"18px"}}>Hosting</Button> </Link>
        </Box> 
            <Box sx={{opacity:"0",mb:{xs:-12,sm:-10,md:-3}}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque repudiandae totam error,unde possimus, commodi officia, dolorum accusamus vitae quia dicta. Minus totam nobis ratione.repudiandae totam error, unde possimus, commodi officia, dolorum accusamus vitae quia dicta. Minus totam nobis ratione.
            </Box> 
            <p style={{marginTop:'0px',textAlign:"end"}}>
            <Button 
            onClick={handleBookingOpen}
                style={
                    {
                        background:"#8F40FB",
                        fontSize: "15px",
                        fontWeight:"600",
                        padding: "8px 10px",
                        width:"auto",
                        borderRadius: "30px",
                        boxShadow: 0,
                        color:"#fff",
                        margin:"0px 0px 15px 0px"
                        }
                    }
                variant="contained"> <AddIcon/> Add New Hosting</Button>
            </p>
            
           <Card> 
                <Scrollbars style={{ width:"100%", height:"70vh" }}>
                <TableContainer style={{overflowX:"visible"}} component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="simple table">
                        <TableHead style={{position:"sticky",top:0,background:"#8F40FB"}}>
                        <TableRow sx={{}}>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>No</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Hosting</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Speed</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Price</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Update</TableCell>
                                <TableCell  sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                        {
                            hostings.map(hosting=><TableRow
                                key={hosting._id}
                                style={{color:"red"}}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {
                                        hosting._id && serialNumber()
                                    }
                                <TableCell sx={{padding:"10px"}} align="left">
                                {value}
                                </TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">{hosting.type}</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">{hosting.speed}</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">${hosting.price}/mo*</TableCell>
                                <TableCell onClick={()=>updateModalOpen(hosting)} sx={{padding:"10px",color:"#357EDD",cursor:"pointer"}} align="left">Update</TableCell>
                                <TableCell onClick={()=>deleteHosting(hosting._id)} sx={{padding:"10px",color:"#ff7373",cursor:"pointer"}} align="left">Delete</TableCell>
                                <Box>
                                    <HostingUpdateModal
                                        openBooking={openUpdate}
                                        handleBookingClose={handleUpdateClose}
                                        hosting={update} 
                                        >
                                    </HostingUpdateModal>   
                                </Box>

                            </TableRow>)
                        }  
                        </TableBody>
                    </Table>
                </TableContainer>
                </Scrollbars>
            </Card> 
        </Box>
        <Box>
        <AddNewHosting
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            >
            </AddNewHosting> 
        </Box>
        </>
    );
};

export default HostingAdmin;
