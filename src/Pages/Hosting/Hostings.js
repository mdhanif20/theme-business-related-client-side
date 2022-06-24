import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Hosting from './SingleHostings/Hosting';
import Box from '@mui/material/Box';
import Navbar from '../Shared/Navbar/Navbar';
import FooterReall from '../Shared/FooterReall/FooterReall';

const Hostings = () => {
    const [hostings,setHosting] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/hosting")
        .then(res => res.json())
        .then(data => setHosting(data))
    },[])

    return (
        <Box>
            <Box>
                <Navbar></Navbar>
            </Box>
            <h2 style={{textAlign: "center",
                fontSize:" 2rem",
                fontWeight: "400",
                paddingTop: "60px"
            }}>Buy Hosting</h2>
            <Container id="hostings">
                <Grid sx={{my:12}} container>
                    {
                        hostings.map(hosting=><Hosting key={hosting.id} hosting={hosting}></Hosting>)
                    }
                    
                </Grid>
             </Container>
             <Box>
                <FooterReall></FooterReall>
             </Box>
        </Box>
        
    );
};

export default Hostings;