import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../Shared/Firebase/useAuth';




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

const DomainModal = ({ openBooking,handleBookingClose,Price,suffixValu, writtenDomein}) => {

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

    const buyDomain = e =>{
        const domain={
            email:`${users.email}`,
            domainName:`${writtenDomein + suffixValu}`,
            time:`${year}year`,
            price:`${calculatedPrice}`
        }
        fetch("http://localhost:5000/domain",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(domain)
      })
      .then(res => res.json())
      .then(data=>{
        if(data.insertedId){
            alert("Domain Buy Successfully.")
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
              Buy Domain
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
                  label="Domain"
                  id="outlined-size-small"
                  defaultValue={writtenDomein + suffixValu} 
                  size="small"
                  />
                  <TextField
                  disabled
                  sx={{width:"100%",my:2}}
                  label="Price"
                  id="outlined-size-small"
                  defaultValue={`$${Price}/year`}
                  size="small"
                  />

                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Number Of Year"
                    name="weight"
                    onChange={priceCalculate}
                    id="outlined-size-small"
                    defaultValue="1 year"
                    size="small"
                    />


               <TextField
                    disabled
                    sx={{width:"100%",my:2}}
                    label="Total Price"
                    name="Price"
                    id="outlined-size-small"
                    value={`$${calculatedPrice} USD`}
                    size="small"
                    />
                <Button onClick={()=> buyDomain()} style={{backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
            fontSize:"1.1rem"}} variant="contained">Buy Now</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default DomainModal;