import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import BuyThemeModal from './../BuyThemeModal';


const Theme = ({data}) => {
    const [learn,setLearn] = useState(false);
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    const readDetails = (condition,id)=>{
        if(id===data.id){
            setLearn(condition)
        }
        else{
            setLearn(false)
        }
    }



    return (
        <>
            <Grid sx={{pt:10}} item xs={12} sm={6}  >
                            <Card sx={{ width: "100%",pt:1,pb:3 }}>
                                <CardMedia
                                    component="img"
                                    style={{padding:"20px 0px",width:"90%",margin:"auto"}}
                                    image={data.websiteImg}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {data.websiteName}
                                    </Typography>
                                    <Box sx={{display:"flex",justifyContent: "space-between",alignItems: "center"}}>
                                        <Typography style={{fontSize:"2rem",fontWeight:"600",color:"#FAAF00"}} component="legend">{data.price}</Typography>
                                        <Box sx={{display:"flex"}}>
                                            <Rating name="half-rating-read" defaultValue={data.review} precision={0.5} readOnly />
                                            <span component="legend">{data.totalReview}</span>
                                        </Box>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                   {
                                        learn? <>
                                            {
                                                data.details 
                                            }
                                            <Button onClick={()=>readDetails(false,data.id)}>Minimize</Button>
                                         </>:<>
                                            {
                                            data.details.slice(0,150) 
                                            }...
                                            <Button onClick={()=>readDetails(true,data.id)}>Read more</Button>
                                         </>
                                    } 
                                    
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button target="_blank" rel="noreferrer" href={`${data.clientCodeLink}`} size="small">Client Side Code</Button>
                                    <Button target="_blank" rel="noreferrer" href={`${data.serverCodeLink}`} size="small">Server Side Code</Button>
                                    <Button target="_blank" rel="noreferrer" href={`${data.liveSide}`} size="small">Live Side</Button>
                                </CardActions>
                                <Button 
                                onClick={handleBookingOpen}
                                    style={
                                            {
                                                background:"linear-gradient(to right, #564CF9, #CB34FF)",
                                                fontSize: "15px",
                                                fontWeight:"600",
                                                padding: "8px 10px",
                                                width:"150px",
                                                borderRadius: "30px",
                                                boxShadow: 0,
                                                color:"#fff",
                                                margin:"15px 0px 10px 15px"
                                                }
                                        }
                                variant="contained">BUY NOW</Button>
                            </Card>
                </Grid>
            <Box>
                    <BuyThemeModal
                    openBooking={openBooking}
                    handleBookingClose={handleBookingClose}
                    data={data}
                    >
                    </BuyThemeModal>
            </Box>

        </>
            
    );
};

export default Theme;