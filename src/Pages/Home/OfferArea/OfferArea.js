import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DomainSuffix from './DomainSuffix/DomainSuffix';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    domainArea:{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    inputArea:{
        padding: "17px 14px",
        fontSize: "17px",
        border: "1px solid #bfbfbf",
        borderRadius: "30px 0px 0px 30px",
        width:"85%",
        boxShadow: "inset 0px 0px 7px 0px #b9b7b7"
    },
    checkButton:{
        backgroundColor: "red",
        fontSize: "18px",
        padding: "11px 27px",
        borderRadius: "0px 30px 30px 0px",
        boxShadow: 0
        }
})

const OfferArea = () => {
    const classes = useStyle();

    const [suffix,setSuffix] = useState([]);

    useEffect(()=>{
        fetch("./offer.JSON")
        .then(res => res.json())
        .then(data => setSuffix(data))
    },[])
    
    return (
        <Box sx={{my:{xs:8,md:12},py:{xs:2,md:4},borderTop: "1px solid #f1f1f1",borderBottom: "1px solid #f1f1f1"}}>
            <Container>
                <Grid sx={{display:"flex",alignItems:"center"}} container>
                    <Grid item sx={{textAlign:"start", my:{xs:2,md:5}}} xs={12} md={5}>
                        <Typography variant="h2" sx={{fontSize:"2.75rem"}} gutterBottom component="div">
                        Get 10% off today
                        </Typography>
                        <Typography sx={{opacity:".7"}} variant="body1" gutterBottom>
                        by register a domain name
                        </Typography>
                    </Grid>
                    <Grid item sx={{my:{xs:2,md:5}}}  xs={12} md={7}>
                       <Box className={classes.domainArea}>
                        <input className={classes.inputArea} type="text" placeholder="Enter Your Domain" />
                            <DomainSuffix></DomainSuffix>
                            <Button 
                            style={
                                {
                                    background: "linear-gradient(to right,#544CF9,#8F5FF9)",
                                    fontSize: "18px",
                                    padding: "12px 27px",
                                    borderRadius: "0px 30px 30px 0px",
                                    boxShadow: 0
                                    }
                            }
                            variant="contained">Check</Button>
                       </Box>
                       <Box sx={{display:{xs:"grid",md:"flex"},
                       gridTemplateColumns: "repeat(3, 1fr)",
                       justifyContent:"space-between",mt:3}}>
                           {
                               suffix.map(suffixs=><Box key={suffixs.id}>
                                <Typography variant="h6" sx={{mb:0}} gutterBottom component="div">
                                    {suffixs.suffix}
                                </Typography>
                                <Typography sx={{opacity:".7"}} variant="body2" gutterBottom>
                                    {suffixs.payment}
                                </Typography>
                               </Box>)
                           }
                           
                           
                       </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OfferArea;