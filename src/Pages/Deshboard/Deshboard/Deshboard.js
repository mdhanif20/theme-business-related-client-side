import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../../Shared/Navbar/Navbar';
import FooterReall from '../../Shared/FooterReall/FooterReall';
import LeftSideBar from './../SideBar/LeftSideBar';


const Deshboard = () => {
    return (
        <Box>
            <Box>
                <Navbar></Navbar>
            </Box>
            <Box sx={{margin:{xs:"0px",sm:"50px"},display:"flex",boxShadow: "0px 1px 3px #c4bdbd;"}}>
                <LeftSideBar></LeftSideBar>
            </Box>
            <Box>
                <FooterReall></FooterReall>
            </Box>
        </Box>
    );
};

export default Deshboard;