import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const HostingUpdateModal = ({openBooking,handleBookingClose,hosting}) => { 

    const [updateHosting,setUpdateHosting] = useState({});
    useEffect(()=>{
        const hostingData = {
            type:`${hosting.type}`,
            speed:`${hosting.speed}`,
            scalable:`${hosting.scalable}`,      
            deshboard:`${hosting.deshboard}`,      
            price:`${hosting.price}`
          }
          setUpdateHosting(hostingData)
    },[hosting])

    const OnBlurhandle = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...updateHosting};
      newInfo[field] = value
      setUpdateHosting(newInfo);
  }

    const updateHostingData = id =>{
            const url = `http://localhost:5000/hosting/${id}`;
            fetch(url,{
                method:"PUT",
                headers:{
                    'content-type':"application/json"
                },
                body: JSON.stringify(updateHosting)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount>0){
                    alert("Updated Hosting Successfully")
                    // setUser({}) 
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
             width:{xs:"70%",sm:"50%",md:"40%"}, 
             px: 3,
             py: 2,
             borderRadius:"10px"
          }}>
            <Typography sx={{color:"#26C9C4",mb:2}} id="modal-modal-title" variant="h6" component="h2">
            Update Your hosting
            </Typography>
              
              <form>

                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Hosting"
                    onBlur={OnBlurhandle}
                    name="type"
                    id="outlined-size-small"
                    defaultValue={hosting.type}
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Speed"
                    onBlur={OnBlurhandle}
                    name="speed"
                    id="outlined-size-small"
                    defaultValue={hosting.speed} 
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Scalable"
                    onBlur={OnBlurhandle}
                    name="scalable"
                    id="outlined-size-small"
                    defaultValue={hosting.scalable} 
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Deshboard"
                    onBlur={OnBlurhandle}
                    name="deshboard"
                    id="outlined-size-small"
                    defaultValue={hosting.deshboard} 
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Price In USD"
                    onBlur={OnBlurhandle}
                    name="price"
                    id="outlined-size-small"
                    defaultValue={hosting.price} 
                    size="small"
                    />
                 
                <Button onClick={()=> updateHostingData(hosting._id)}
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
                        margin:"10px 0px"
                        }
                    } variant="contained">Update hosting</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default HostingUpdateModal;