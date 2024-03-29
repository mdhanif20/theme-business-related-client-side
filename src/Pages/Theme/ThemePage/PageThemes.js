import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageTheme from './PageTheme';
import Navbar from './../../Shared/Navbar/Navbar';
import FooterReall from './../../Shared/FooterReall/FooterReall';


const PageThemes = () => {
    const [themes,setThemes]= useState([]);
    useEffect(()=>{
        fetch("https://theme-domain-hosting.onrender.com/themes")
        .then(res=>res.json())
        .then(data => setThemes(data))
    },[]);


    return (
        <Box>
            <Navbar></Navbar>
            <Box sx={{p:2}}>
                <h4 style={{textAlign:"center",fontSize:'2.5rem',fontWeight:"400",paddingBottom:'30px'}}>Choose The Theme</h4>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    {
                        themes.map(theme=><PageTheme
                            key={theme.id}
                            data={theme}
                            >
                        </PageTheme>)
                    }
                        
                    </Grid>
                </Box>
            </Box>
            
            <FooterReall></FooterReall>
        </Box>
    );
};

export default PageThemes;