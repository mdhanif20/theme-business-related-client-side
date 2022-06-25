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
import UpdateDomainModal from './UpdateDomainModal';
import AddDomainModal from './AddDomainModal';



const DomainAdmin = () => {
    const [domains,setDomains] = useState([]);
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
        fetch("https://calm-anchorage-79518.herokuapp.com/domain")
        .then(res=> res.json())
        .then(data => setDomains(data))
    },[openBooking,openUpdate])


    // for delete 
  const deleteDomain = id =>{
        const proceed = window.confirm("Are you sure, you want to delete?")
        if(proceed){
            const url = `https://calm-anchorage-79518.herokuapp.com/domain/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert("Delete Successfully")
                    const remainingUser = domains.filter(theme=> theme._id !== id) 
                    setDomains(remainingUser) 
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
                variant="contained"> <AddIcon/> Add New Domain</Button>
            </p>
            
           <Card> 
                <Scrollbars style={{ width:"100%", height:"70vh" }}>
                <TableContainer style={{overflowX:"visible"}} component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="simple table">
                        <TableHead style={{position:"sticky",top:0,background:"#8F40FB"}}>
                            <TableRow sx={{}}>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>No</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Suffix</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Price</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Update</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
 
                       {
                            domains.map(domain=> <TableRow
                                style={{color:"red"}}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key={domain._id}
                                >
                                    {
                                        domain._id && serialNumber()
                                    }
                                <TableCell sx={{padding:"10px"}} align="left">{value}</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">{domain.suffix}</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">${domain.price}/year</TableCell>
                                <TableCell onClick={()=>updateModalOpen(domain)} sx={{padding:"10px",cursor:"pointer",color:'#357EDD'}} align="left">Update</TableCell>
                                <TableCell onClick={()=>deleteDomain(domain._id)} sx={{padding:"10px",cursor:"pointer",color:'#ff7373'}} align="left">Delete</TableCell>
                                <Box>
                                    <UpdateDomainModal
                                        openBooking={openUpdate}
                                        handleBookingClose={handleUpdateClose}
                                        domain={update} 
                                        >
                                    </UpdateDomainModal>   
                                </Box>
                                </TableRow>  )
                        }  
                         
                        </TableBody>
                    </Table>
                </TableContainer>
                </Scrollbars>
            </Card> 
            <AddDomainModal
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            >
            </AddDomainModal> 
            
        </Box>
        
        </>
    );
};

export default DomainAdmin;