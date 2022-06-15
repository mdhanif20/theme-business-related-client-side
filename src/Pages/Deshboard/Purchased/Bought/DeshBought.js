import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeshThemes from './../Theme/DeshThemes';
import DeshDomains from './../Domain/DeshDomains';
import DeshHostings from '../Hosting/DeshHostings';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const DeshBought = () => {
    return (
    
        <Box >
            {/* <Box sx={{display:"flex",color:"#fff",bgcolor:"#8F40FB",justifyContent:"space-around",width:"90%",margin:"18px auto",borderRadius:"30px"}}>
                <Link to="/deshboard/deshTheme"> <Button sx={{color:"#fff",fontSize:"18px"}}>Theme</Button> </Link>
                
                <Button sx={{color:"#fff",fontSize:"18px"}}>Domain</Button>
                <Button sx={{color:"#fff",fontSize:"18px"}}>Hosting</Button>
            </Box> */}
           
        </Box>
    );
};

export default DeshBought;