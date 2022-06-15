import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import HostingModal from '../HostingModal/HostingModal';

const Hosting = ({hosting}) => {
    const {type,text1,text2,text3,img}= hosting;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} md={3}>
                    <Card sx={{boxShadow: 0,border:"1px solid #f1f1f1",borderRadius:0}}>
                    <Typography sx={{fontSize:"1.75rem",py:3,px:1,borderBottom: "1px solid #f1f1f1"}} variant="h5" gutterBottom component="div">
                     {type}
                    </Typography>
                        <Box sx={{display:"flex",justifyContent:"space-around",mt:3,mb:3}}>
                            <Box sx={{opacity:".9",textAlign:"start"}}>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    {text1}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    {text2}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    {text3}
                                </Typography>
                                <Typography sx={{mt:3}} variant="caption" display="block" gutterBottom>
                                Starting 
                                <Typography sx={{display:"inline",color:"#F6A22D"}} variant="h5" gutterBottom component="div">
                                 $3.99/mo*
                                </Typography>
                            </Typography>
                            </Box>
                            <Box>
                                <img src={img} alt="" />
                            </Box>
                        </Box>
                       
                        <Box sx={{px:1}}>
                        <Button 
                        onClick={handleBookingOpen}
                            style={
                                {
                                    background: "linear-gradient(to right,#544CF9,#8F5FF9)",
                                    fontSize: "18px",
                                    padding: "7px 27px",
                                    borderRadius: "30px",
                                    boxShadow: 0,
                                    margin:"5px 0px 40px 0px"
                                    }
                            }

                            variant="contained">GET STARTED</Button>
                        </Box>
                    </Card>
                </Grid>
                <Box>
                    <HostingModal
                    openBooking={openBooking}
                    handleBookingClose={handleBookingClose}
                    hosting={hosting}
                    >
                    </HostingModal>
                </Box>
        </>
        
    );
};

export default Hosting;