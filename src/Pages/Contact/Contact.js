import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './../Shared/Navbar/Navbar';
import FooterReall from './../Shared/FooterReall/FooterReall';
import ContactInfo from './ContactInfo';


const ContactUs = () => {
    return (
        <Box >
            <Navbar></Navbar>
           <Box sx={{mt:{xs:5,sm:10},mx:{xs:2,sm:2,md:5}}}>
                <ContactInfo></ContactInfo>
           </Box>
           <FooterReall></FooterReall>
        </Box>
    );
};

export default ContactUs;