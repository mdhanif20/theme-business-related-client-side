import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Hosting from './SingleHostings/Hosting';

const Hostings = () => {
    const [hostings,setHosting] = useState([]);
    useEffect(()=>{
        fetch("./hosting.JSON")
        .then(res => res.json())
        .then(data => setHosting(data))
    },[])

    return (
        <Container id="hostings">
            <Grid sx={{my:{xs:10,md:20}}} container>
                {
                    hostings.map(hosting=><Hosting key={hosting.id} hosting={hosting}></Hosting>)
                }
                
            </Grid>
        </Container>
    );
};

export default Hostings;