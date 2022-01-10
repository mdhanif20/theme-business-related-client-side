import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CommentSlider from "./CommentSlider";

const Comment = () => {
 
    return (
        <Box>
            <Typography variant="h4" gutterBottom component="div">
              What clients say
            </Typography>
            <Box sx={{mx:{xs:1,md:3}}}>
                <CommentSlider></CommentSlider>
            </Box>
        </Box>
    );
};

export default Comment;