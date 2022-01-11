import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@mui/styles';
import HostCard from './HostCard';
import Grid from '@material-ui/core/Grid';
const useStyle = makeStyles({
    header:{
        fontWeight: "300"
    },
    details:{
        opacity:".7",
        marginBottom:"50px"
    }
})

const GetHost = () => {
    const classes = useStyle();
    const [hosts,setHosts] = useState([]);
    useEffect(()=>{
        fetch("./gethosting.JSON")
        .then(res => res.json())
        .then(data => setHosts(data))
    },[])
    return (
        <Box sx={{my:20}}>
            <Box>
                <h1 className={classes.header}>
                  Go with GetHost.
                </h1>
                <Typography className={classes.details} variant="h6" gutterBottom>
                We have 100's of domains to choose from, not to mention prices that other companies only dream about.
                </Typography>
            </Box>
            <Container>
                <Grid container>
                    {
                        hosts.map(host=><HostCard key={host.id} host={host}></HostCard>)
                    }
                  
                </Grid>
            </Container>
        </Box>
    );
};

export default GetHost;