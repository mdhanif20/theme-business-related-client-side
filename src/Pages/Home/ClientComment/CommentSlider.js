import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import img from "../../../images/commentIcon.png";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    cardBox:{
        display: "flex",
        alignItems: "center"
    }
})

const CommentSlider = () => {
    const classes = useStyle();

    const [comments,setComments]= useState([]);

    useEffect(()=>{
        fetch("./clientComment.JSON")
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 3,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 3,
            }
          }
        ]
      };
    return (
        <div >
        <Slider style={{marginRight:"25px",marginLeft:"25px"}} {...settings}>
        {
        comments.map(comment=><div>
            <Card className={classes.card} sx={{p:{xs:3,md:6},mx:{xs:2,md:2},textAlign:"start",boxShadow: 1}}>
            <Box className={classes.cardBox}>
                <Box>
                  <img width="70px" src={img} alt="" />
                </Box>
                <Box sx={{ml:2}}>
                <Typography sx={{fontSize:"1.1rem",color:"#3399FF"}} variant="subtitle2" display="block" gutterBottom>
                    {comment.name}
                </Typography>
                <Typography sx={{fontSize:".9rem",opacity:".6"}} variant="body1" gutterBottom>
                 {comment.clientInfo}
                </Typography>
                </Box>
            </Box>
            <Box>
            <Typography sx={{fontSize:"1rem",fontWeight:"600",my:3}} variant="subtitle2" gutterBottom component="div">
                {comment.details}
            </Typography>
            </Box>
            <Box>
            
            <Rating
                name="simple-controlled"
                value= {comment.rating}
            />
            </Box>
        </Card>
      </div>)
     }
        </Slider>
      </div>
    );
};

export default CommentSlider;