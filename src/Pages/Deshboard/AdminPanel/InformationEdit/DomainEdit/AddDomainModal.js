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
        fetch("http://localhost:5000/deshboard/domain",{
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
                    label="price"
                    onBlur={OnBlurhandle}
                    name="price"
                    id="outlined-size-small"
                    defaultValue="domain price" 
                    size="small"
                    />

                 
            {/*   <Box  sx={{display:"flex"}}>
                <TextField
                sx={{width:"100%",my:1,mr:1}}
                label="Live Side"
                onBlur={OnBlurhandle}
                name="liveSide"
                id="outlined-size-small"
                defaultValue="Live Side Url" 
                size="small"
                />
                <TextField
                sx={{width:"100%",my:1}}
                label="Client Side"
                onBlur={OnBlurhandle}
                name="clientCodeLink"
                id="outlined-size-small"
                defaultValue="Code link Url" 
                size="small"
                />
              </Box>
              
              <Box  sx={{display:"flex"}}>
                  <TextField
                  sx={{width:"100%",my:1,mr:1}}
                  label="Server Side"
                  onBlur={OnBlurhandle}
                  name="serverCodeLink"
                  id="outlined-size-small"
                  defaultValue="Code link Url" 
                  size="small"
                  />
                  <TextField
                    sx={{width:"100%",my:1}}
                    label="Price"
                    onBlur={OnBlurhandle}
                    name="price"
                    id="outlined-size-small"
                    defaultValue="$"
                    size="small"
                    />
                 
              </Box>
              <TextField
                sx={{width:"100%",my:1}}
                id="outlined-multiline-static"
                onBlur={OnBlurhandle}
                name="details"
                label="Website Details"
                multiline
                rows={3}
                defaultValue="Description"
              />
             <Box sx={{display:"flex"}}>
                <TextField
                    sx={{width:"100%",my:1,mr:1}}
                    label="Rating"
                    onBlur={OnBlurhandle}
                    name="review"
                    id="outlined-size-small"
                    defaultValue="rating"
                    size="small"
                    />
                <TextField
                    sx={{width:"100%",my:1,mr:1}}
                    label="Total Review"
                    onBlur={OnBlurhandle}
                    name="totalReview"
                    id="outlined-size-small"
                    defaultValue="review"
                    size="small"
                    />
               </Box> */}
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