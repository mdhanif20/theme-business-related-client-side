import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const StorageBuyModal = ({openBooking,handleBookingClose,data}) => { 
   
   
    const addStorage = e =>{
        fetch("http://localhost:5000/purchasedStorage",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data=>{
        if(data.insertedId){
            alert("Purchased Storage Successfully")
        //   setBookingSuccess(true) 
          setInterval(() => {
            // setBookingSuccess(false) 
          }, 18000);
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
          <Box sx={{
             position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             bgcolor: 'background.paper',
             boxShadow: 24,
             width:{xs:"70%",sm:"60%",md:"50%"},
             px: 3,
             py: 2,
             borderRadius:"10px"
          }}>
            <Typography sx={{color:"#26C9C4",mb:2}} id="modal-modal-title" variant="h6" component="h2">
            Purchased Storage
            </Typography>
              
              <form>

              <Box sx={{display:"flex"}}>
                    <TextField
                    disabled
                    sx={{width:"100%",my:1,mr:1}}
                    label="Core"
                    // onBlur={OnBlurhandle} 
                    name="websiteName"
                    id="outlined-size-small"
                    defaultValue={data.core} 
                    size="small"
                    />
                    <TextField
                    disabled
                    sx={{width:"100%",my:1}}
                    label="Storage"
                    // onBlur={OnBlurhandle}
                    name="websiteImg"
                    id="outlined-size-small"
                    defaultValue={data.storage} 
                    size="small"
                    />
              </Box>

              <Box sx={{display:"flex"}}>
                    <TextField
                    disabled
                    sx={{width:"100%",my:1,mr:1}}
                    label="RAM"
                    // onBlur={OnBlurhandle} 
                    name="websiteName"
                    id="outlined-size-small"
                    defaultValue={data.ram} 
                    size="small"
                    />
                    <TextField
                    disabled
                    sx={{width:"100%",my:1}}
                    label="BandWidth"
                    // onBlur={OnBlurhandle}
                    name="websiteImg"
                    id="outlined-size-small"
                    defaultValue={data.bandwidth} 
                    size="small"
                    />
              </Box>

              <Box sx={{display:"flex"}}>
                    <TextField
                    disabled
                    sx={{width:"100%",my:1,mr:1}}
                    label="Price"
                    // onBlur={OnBlurhandle} 
                    name="websiteName"
                    id="outlined-size-small"
                    defaultValue={data.price} 
                    size="small"
                    />
                    <TextField
                    disabled
                    sx={{width:"100%",my:1}}
                    label="Email"
                    // onBlur={OnBlurhandle}
                    name="websiteImg"
                    id="outlined-size-small"
                    defaultValue={data.email} 
                    size="small"
                    />
              </Box>
                 
              
                <Button onClick={()=> addStorage()}
                style={
                    {
                        background:"#8F40FB",
                        fontSize: "15px",
                        fontWeight:"600",
                        padding: "8px 20px",
                        width:"auto",
                        borderRadius: "30px",
                        boxShadow: 0,
                        color:"#fff",
                        margin:"0px 0px 5px 0px"
                        }
                    } variant="contained">Buy Storage</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default StorageBuyModal;