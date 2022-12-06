import React,{useState,useEffect} from 'react';
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
import useAuth from './../../../Shared/Firebase/useAuth';

const StoragePurchased = () => {
    const {users,token} = useAuth(); 
    const [storages,setStorages] = useState([]);
    console.log(storages)
    let value = 0;
    const serialNumber = e =>{
        value = value + 1;
    }

    useEffect(()=>{
        const url = `https://theme-domain-hosting.onrender.com/purchasedStorage?email=${users.email}`;
         fetch(url,{
           headers:{
             'authorization':`Bearer ${token}`
           }
         })
        .then(res => res.json())
        .then(data => setStorages(data))
    },[users.email,token])

    return (
        <> 
        <Box sx={{px:{xs:2,sm:3,md:5}}}>
        {/* <Box sx={{display:"flex",color:"#fff",bgcolor:"#8F40FB",justifyContent:"space-around",borderRadius:"30px",margin:"15px 0px",}}>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/purchasedstorages"> <Button style={{color:"#fff",fontSize:"18px"}}>storages</Button> </Link>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/purchasedDomain"> <Button style={{color:"#fff",fontSize:"18px"}}>Domain</Button> </Link>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/purchasedstorage"> <Button style={{color:"#fff",fontSize:"18px"}}>storage</Button> </Link>
        </Box> */}
            <Box sx={{opacity:"0",mb:{xs:-12,sm:-10,md:-3}}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque repudiandae totam error,unde possimus, commodi officia, dolorum accusamus vitae quia dicta. Minus totam nobis ratione.repudiandae totam error, unde possimus, commodi officia, dolorum accusamus vitae quia dicta. Minus totam nobis ratione.
            </Box>  
            <Card> 
            <Scrollbars style={{ width:"100%", height:"70vh" }}>

            <TableContainer style={{overflowX:"visible"}} component={Paper}>
                <Table sx={{ width: "100%" }} aria-label="simple table">
                    <TableHead style={{position:"sticky",top:0,background:"#8F40FB"}}>
                        <TableRow sx={{}}>
                            <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>No</TableCell>
                            <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Core</TableCell>
                            <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Storage</TableCell>
                            <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Ram</TableCell>
                            <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Price</TableCell>
                            <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Delivered</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        storages.map(storage => <TableRow key={storage._id}
                            style={{color:"red"}}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {
                                    storage._id && serialNumber()
                                }
                            <TableCell sx={{padding:"10px"}} align="left">{value}</TableCell>
                            <TableCell sx={{padding:"10px"}} align="left">{storage.core}</TableCell>
                            <TableCell sx={{padding:"10px"}} align="left">{storage.storage}</TableCell>
                            <TableCell sx={{padding:"10px"}} align="left">{storage.ram}</TableCell>
                            <TableCell sx={{padding:"10px"}} align="left">{storage.price}</TableCell>
                            <TableCell sx={{padding:"10px",color:"#357EDD"}} align="left">Yes/No</TableCell>
                        </TableRow>)
                    }
                        
                        
                    </TableBody>
                </Table>
            </TableContainer>
            </Scrollbars>
            </Card>
        </Box>
        </>
    );
};

export default StoragePurchased;