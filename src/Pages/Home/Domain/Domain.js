import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DomainModal from './DomainModal';

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




const Domain = () => {
    const classes = useStyle();
    const [suffix,setSuffix] = useState([]);
    const [Price,setPrice] = useState({});
    const [suffixValue, setSuffixValue] = React.useState('');
    const [writtenDomein,setWrittenDomein] = useState("");
    const [open, setOpen] = React.useState(false);
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    const buyDomain = value =>{
        const buyerSuffix= value.suffixValue;
        const data = suffix.filter(suffixs =>suffixs.suffix === buyerSuffix);
        setPrice(data[0].price);
        if(buyerSuffix && writtenDomein !== ""){
            handleBookingOpen()
        }
        else{
            alert("Please enter domain Suffix & Prefixes properly")
        }
        
    }


    const handleChange = (event) => {
        setSuffixValue(event.target.value);
    };

    const onHandleBlur = e =>{
        const domain = e.target.name;
        const suffix = e.target.value;
        setWrittenDomein(suffix)
     }


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(()=>{
        fetch("./offer.JSON")
        .then(res => res.json())
        .then(data => setSuffix(data))
    },[])
    
    return (
        <Box id="domain" sx={{my:{xs:8,md:12},py:{xs:2,md:4},borderTop: "1px solid #f1f1f1",borderBottom: "1px solid #f1f1f1"}}>
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
                        <input required name="domain" onBlur={onHandleBlur} className={classes.inputArea} type="text" placeholder="Enter Your Domain" />
                        <FormControl
                        name="suffix"
                        sx={{  minWidth: 100, boxShadow:"inset 0px 0px 7px 0px #b9b7b7" }}>
                        <InputLabel 
                        id="demo-controlled-open-select-label">Suffix</InputLabel>
                          <Select
                        style={{width:"100%"}}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={suffixValue}
                            label="suffix"
                            onChange={handleChange}
                        >
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".com"}>.com</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".net"}>.net</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".org"}>.org</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".info"}>.info</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".US"}>.US</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".eu"}>.eu</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".bd"}>.bd</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".lu"}>.lu</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".no"}>.no</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".bt"}>.bt</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".ex"}>.ex</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".cc"}>.cc</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".nu"}>.nu</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={".br"}>.br</MenuItem>
                            <MenuItem style={{display:"block",paddingLeft:"5px"}} value={'.bt'}>.bt</MenuItem>
                        </Select>

                        </FormControl>
                        <Button 
                        onClick={()=>buyDomain({suffixValue})}
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
            <Box>
                    <DomainModal
                    openBooking={openBooking}
                    handleBookingClose={handleBookingClose}
                    Price={Price}
                    suffixValu={suffixValue}
                    writtenDomein={writtenDomein}
                    >
                    </DomainModal>
                </Box>
        </Box>
    );
};

export default Domain;