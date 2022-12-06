import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AddNewHosting = ({openBooking,handleBookingClose}) => { 
   
    const hostingData = {
      type:"",
      speed:"",
      scalable:"",
      deshboard:"",
      price:""
    }
    const [hosting,setHosting] = useState(hostingData);


    const OnBlurhandle = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...hosting};
      newInfo[field] = value
      setHosting(newInfo);
  }
  
   
    const addhosting = e =>{
        fetch("https://theme-domain-hosting.onrender.com/deshboard/hosting",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(hosting)
      })
      .then(res => res.json())
      .then(data=>{
        if(data.insertedId){
            alert("Add hosting Successfully")
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
            Add New hosting
            </Typography>
              
              <form>

                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Hosting"
                    onBlur={OnBlurhandle}
                    name="type"
                    id="outlined-size-small"
                    defaultValue="Hosting Header" 
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Speed"
                    onBlur={OnBlurhandle}
                    name="speed"
                    id="outlined-size-small"
                    defaultValue="Hosting Speed" 
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Scalable"
                    onBlur={OnBlurhandle}
                    name="scalable"
                    id="outlined-size-small"
                    defaultValue="Scalable" 
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Deshboard Type"
                    onBlur={OnBlurhandle}
                    name="deshboard"
                    id="outlined-size-small"
                    defaultValue="Deshboard Type" 
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Price In USD"
                    onBlur={OnBlurhandle}
                    name="price"
                    id="outlined-size-small"
                    defaultValue="Price" 
                    size="small"
                    />

                <Button onClick={()=> addhosting()}
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
                    } variant="contained">Add hosting</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default AddNewHosting;