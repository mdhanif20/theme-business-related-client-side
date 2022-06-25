import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Theme from './Theme';
import { Link } from 'react-router-dom';


const Themes = () => {

    const [themes,setThemes]= useState([]);

    useEffect(()=>{
        fetch("https://calm-anchorage-79518.herokuapp.com/themes")
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
            
                 <h3 style={{textAlign:'center',fontSize:"2rem",fontWeight:"400",padding:"60px 0px 100px 0px",marginBottom:'0px'}}>
                 <Link style={{textDecoration:"none"}} to="/themes"> 
                 Show All Theme
                 </Link>
                </h3>
            
        </Box>
    );
};

export default Themes;