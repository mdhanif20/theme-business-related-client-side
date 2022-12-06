import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AddDomainModal = ({openBooking,handleBookingClose}) => { 
   
    const domainData = {
      price:"",
      review:"",
      totalReview:"",
      details:"",
      websiteName:"",
      websiteImg:"",
      clientCodeLink:"",
      serverCodeLink:"",
      liveSide:""
    }
    const [domain,setDomain] = useState(domainData);


    const OnBlurhandle = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...domain};
      newInfo[field] = value
      setDomain(newInfo);
  }
  
   
    const addDomain = e =>{
        fetch("https://theme-domain-hosting.onrender.com/deshboard/domain",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(domain)
      })
      .then(res => res.json())
      .then(data=>{
        if(data.insertedId){
            alert("Add domain Successfully")
          setInterval(() => {
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
            Add New domain
            </Typography>
              
              <form>

                    <TextField
                    sx={{width:"100%",my:2}}
                    label="suffix"
                    onBlur={OnBlurhandle}
                    name="suffix"
                    id="outlined-size-small"
                    defaultValue="domain suffix" 
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Price In USD"
                    onBlur={OnBlurhandle}
                    name="price"
                    id="outlined-size-small"
                    defaultValue="domain price" 
                    size="small"
                    />

                <Button onClick={()=> addDomain()}
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
                    } variant="contained">Add Domain</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default AddDomainModal;