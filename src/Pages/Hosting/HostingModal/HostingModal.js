import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../../Shared/Firebase/useAuth';


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

const HostingModal = ({openBooking,handleBookingClose,hosting,Price}) => {
    const {type,speed,scalable,deshboard,price}= hosting;
    const {users} = useAuth();
    const [calculatedPrice, setCalculatedPrice] = useState(Price);
    const [year,setYear] = useState(1);
    const priceCalculate = e =>{
        const value = e.target.value;
        const number = value.split(" ");
        setYear(number[0])
        const price = (number[0] * Price).toFixed(2); 
        setCalculatedPrice(price);
    }
  
   
    const bookingSubmit = e =>{
      const defaultInfo = {
        type: type,
        email: users.email,
        speed: speed,
        scalable: scalable,
        deshboard: deshboard,
        price: calculatedPrice,
        time:year
      }
        fetch("https://calm-anchorage-79518.herokuapp.com/hosting",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(defaultInfo)
      })
      .then(res => res.json())
      .then(data=>{
        if(data.insertedId){
            alert("Buy Hosting Successfully.")
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
              {type}
            </Typography>
              
              <form>

                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Speed"
                  id="outlined-size-small"
                  defaultValue={type}
                  size="small"
                  />
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Ability"
                  id="outlined-size-small"
                  defaultValue={speed}
                  size="small"
                  />
            <Box sx={{display:"flex"}}>
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Scalable"
                  id="outlined-size-small"
                  defaultValue={scalable}
                  size="small"
                  />
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Deshboard"
                  id="outlined-size-small"
                  defaultValue={deshboard}
                  size="small"
                  />
            </Box> 
             <Box sx={{display:"flex"}}>
              <TextField
                      sx={{width:"100%",my:2}}
                      label="Number Of Year"
                      name="time"
                      onChange={priceCalculate}
                      id="outlined-size-small"
                      defaultValue="1 year"
                      size="small"
                      />
                <TextField
                      disabled
                      sx={{width:"100%",my:2}}
                      label="Total Price"
                      name="price"
                      id="outlined-size-small"
                      value={`$${calculatedPrice} USD`}
                      size="small"
                      />
               </Box>

                <Button onClick={()=> bookingSubmit({price})} style={{backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
            fontSize:"1.1rem"}} variant="contained">Buy Now</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default HostingModal;