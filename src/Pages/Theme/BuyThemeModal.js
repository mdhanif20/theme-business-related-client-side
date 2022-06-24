import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../Shared/Firebase/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:"10px"
  };

const BuyThemeModal = ({openBooking,handleBookingClose,data}) => {

    const {users} = useAuth();
    const {websiteName,price} = data;

    const buyTheme = e =>{
      const details={
          email:`${users.email}`,
          website:`${websiteName}`,
          price:`${price}`
      }
      fetch("http://localhost:5000/themeBuy",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(details)
    })
    .then(res => res.json())
    .then(data=>{
      if(data.insertedId){
          alert("Theme Buy Successfully.")
      //   setBookingSuccess(true) 
        setInterval(() => {
          // setBookingSuccess(false) 
        }, 18000);
        handleBookingClose();
      }
    })
  }

    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <Typography sx={{color:"#26C9C4",mb:2}} id="modal-modal-title" variant="h6" component="h2">
              {websiteName}
            </Typography>
              
              <form>
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Email"
                  id="outlined-size-small"
                  defaultValue={users.email}
                  size="small"
                  />
                  
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Website Name"
                  id="outlined-size-small"
                  defaultValue={websiteName}
                  size="small"
                  />
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Price"
                  id="outlined-size-small"
                  defaultValue={price}
                  size="small"
                  />
                  

                <Button onClick={()=> buyTheme()} style={{backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
            fontSize:"1.1rem"}} variant="contained">Buy Now</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default BuyThemeModal;