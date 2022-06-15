import React,{useEffect,useState} from 'react';
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
import UpdateTheme from './UpdateTheme';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddThemeModal from './AddThemeModal';



const ThemeEdit = () => {
    const [themes,setThemes] = useState([]);
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    let value = 1;
        const serialNumber = (n)=>{
            value = value+1;
        }

    //load theme
    useEffect(()=>{
        fetch("http://localhost:5000/themes")
        .then(res=> res.json())
        .then(data => setThemes(data))
    },[])

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
            <p style={{marginTop:'0px',textAlign:"end"}}>
            <Button 
            onClick={handleBookingOpen}
                style={
                    {
                        background:"#8F40FB",
                        fontSize: "15px",
                        fontWeight:"600",
                        padding: "8px 10px",
                        width:"auto",
                        borderRadius: "30px",
                        boxShadow: 0,
                        color:"#fff",
                        margin:"0px 0px 15px 0px"
                        }
                    }
                variant="contained"> <AddIcon/> Add New Theme</Button>
            </p>
            
            <Card> 
                <Scrollbars style={{ width:"100%", height:"70vh" }}>
                <TableContainer style={{overflowX:"visible"}} component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="simple table">
                        <TableHead style={{position:"sticky",top:0,background:"#8F40FB"}}>
                            <TableRow sx={{}}>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>No</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Website</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Price</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Rating</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Total Review</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Update</TableCell>
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                        {
                            themes.map(theme=><UpdateTheme 
                            key={theme._id}
                            theme={theme}
                            value={value}
                            >
                            {
                                theme._id && serialNumber()
                            }
                            </UpdateTheme>)
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
                </Scrollbars>
            </Card>
            <AddThemeModal
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            >
        </AddThemeModal> 
        </Box>
        </>
    );
};

export default ThemeEdit;