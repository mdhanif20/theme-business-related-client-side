import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CommentSlider from "./CommentSlider";

const Comment = () => {
 
    return (
        <Box sx={{bgcolor:"#F9FDFE",py:{xs:10,md:20}}}>
            <Typography sx={{pl:{xs:1,sm:2,md:8}}} variant="h4" gutterBottom component="div">
              What clients say
            </Typography>
            <Box sx={{mx:{xs:0,md:3},pt:3}}>
                <CommentSlider></CommentSlider>
            </Box>
        </Box>
    );
};

export default Comment;