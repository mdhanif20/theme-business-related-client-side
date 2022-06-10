import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Theme = () => {
    return (
        <div>
            <h4 style={{textAlign:"center",fontSize:'2.5rem',fontWeight:"400"}}>Choose The Theme</h4>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>

                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={8}>

                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Theme;