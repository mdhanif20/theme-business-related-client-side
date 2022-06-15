import React from 'react';
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

const DomainEdit = () => {
    return (
        <> 
        <Box sx={{px:{xs:2,sm:3,md:5}}}>
        <Box sx={{display:"flex",color:"#fff",bgcolor:"#8F40FB",justifyContent:"space-around",borderRadius:"30px",margin:"15px 0px",}}>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/editTheme"> <Button style={{color:"#fff",fontSize:"18px"}}>Theme</Button> </Link>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/editDomain"> <Button style={{color:"#fff",fontSize:"18px"}}>Domain</Button> </Link>
            <Link style={{textDecoration:'none',color:"#fff"}} to="/deshboard/editHosting"> <Button style={{color:"#fff",fontSize:"18px"}}>Hosting</Button> </Link>
        </Box>
            <Box sx={{opacity:"0",mb:{xs:-15,sm:-12,md:-3}}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque repudiandae totam error,unde possimus, commodi officia, dolorum accusamus vitae quia dicta. Minus totam nobis ratione.repudiandae totam error, unde possimus, commodi officia, dolorum accusamus vitae quia dicta. Minus totam nobis ratione.
            </Box> 
            <Card> 
                <Scrollbars style={{ width:"100%", height:"70vh" }}>

                <TableContainer style={{overflowX:"visible"}} component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="simple table">
                        <TableHead style={{position:"sticky",top:0,background:"#8F40FB"}}>
                            <TableRow sx={{}}>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>No</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Website</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Email</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Price</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Delivery</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        
                            <TableRow
                                style={{color:"red"}}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell sx={{padding:"10px"}} align="left">1</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">Lorem ipsum dolor sit amet consectetur.</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">mdhanif123@gmail.com</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">$30USD</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">Update</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell sx={{padding:"10px"}} align="left">1</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">Lorem ipsum dolor sit amet consectetur.</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">mdhanif123@gmail.com</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">$30USD</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">Update</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell sx={{padding:"10px"}} align="left">1</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">Lorem ipsum dolor sit amet consectetur.</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">mdhanif123@gmail.com</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">$30USD</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">Update</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Scrollbars>
            </Card>
        </Box>
        </>
    );
};

export default DomainEdit;