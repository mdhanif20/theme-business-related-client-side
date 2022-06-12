import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Theme from './Theme';
import { Link } from 'react-router-dom';
import useAuth from './../../Shared/Firebase/useAuth';


const Themes = () => {
    const [themes,setThemes]= useState([]);

    useEffect(()=>{
        fetch("./theme.JSON")
        .then(res=>res.json())
        .then(data => setThemes(data))
    },[]);


    return (
        <Box sx={{p:2}}>
            <h4 style={{textAlign:"center",fontSize:'2.5rem',fontWeight:"400",paddingBottom:'30px'}}>Choose The Theme</h4>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                   {
                       themes.slice(0,6).map(theme=><Theme
                        key={theme.id}
                        data={theme}
                        >
                       </Theme>)
                   }
                    
                </Grid>
            </Box>
            <Link style={{textDecoration:"none"}} to="/themes">
                 <h3 style={{textAlign:'center',fontSize:"2rem",fontWeight:"400",paddingTop:"60px",marginBottom:'0px'}}>Show All Theme</h3>
            </Link>
        </Box>
    );
};

export default Themes;