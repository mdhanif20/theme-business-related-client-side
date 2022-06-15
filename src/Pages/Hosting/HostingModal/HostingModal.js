import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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

const HostingModal = ({openBooking,handleBookingClose,hosting}) => {
    const {type,text1,text2,text3,img,buttonUrl}= hosting;
    const [price, setPrice] = useState("95.76");
    const priceCalculate = e =>{
        const value = e.target.value;
        const number = value.split(" ");
        const price = (number[0] *3.99 * 12).toFixed(2); 
        setPrice(price);
    }

    const defaultInfo = {
        hosting: type,
        speed: text1,
        ability: text2,
        hostingType: text3,
        price: "95.76"
    }
    const [buyHosting,setbuyHosting] = useState(defaultInfo); 
    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...buyHosting};
      newInfo[field] = value
      setbuyHosting(newInfo);
  }
   
    const bookingSubmit = e =>{
        const booking = {
            ...buyHosting,
            price: e.price
          }
        fetch("http://localhost:5000/hosting",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(booking)
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
                  defaultValue={text1}
                  size="small"
                  />
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Ability"
                  id="outlined-size-small"
                  defaultValue={text2}
                  size="small"
                  />
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Deshboard"
                  id="outlined-size-small"
                  defaultValue={text3}
                  size="small"
                  />

                
             <Box sx={{display:"flex"}}>
                <TextField
                    disabled
                    sx={{width:"100%",my:2,mr:1}}
                    label="Monthly"
                    name="payment"
                    id="outlined-size-small"
                    defaultValue="$3.99/mo*"
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2,ml:1}}
                    label="Number Of Year"
                    name="weight"
                    onChange={priceCalculate}
                    id="outlined-size-small"
                    defaultValue="2 year"
                    size="small"
                    />
               </Box>
               <TextField
                    disabled
                    sx={{width:"100%",my:2}}
                    label="Total Price"
                    name="Price"
                    id="outlined-size-small"
                    value={`$${price} USD`}
                    size="small"
                    />
                <Button onClick={()=> bookingSubmit({price})} style={{backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
            fontSize:"1.1rem"}} variant="contained">Buy Now</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default HostingModal;