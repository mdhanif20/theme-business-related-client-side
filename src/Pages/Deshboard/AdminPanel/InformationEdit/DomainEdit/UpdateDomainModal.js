import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const UpdateDomainModal = ({openBooking,handleBookingClose,id,domain}) => { 

    const [updatedomain,setUpdatedomain] = useState({});
    useEffect(()=>{
        const domainData = {
            suffix:`${domain.suffix}`,
            price:`${domain.price}`
          }
          setUpdatedomain(domainData)
    },[domain])

    console.log(updatedomain)
    const OnBlurhandle = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...updatedomain};
      newInfo[field] = value
      setUpdatedomain(newInfo);
  }
  
       /*  useEffect(()=>{
            fetch("http://localhost:5000/domain")
            .then(res=> res.json())
            .then(data => setDomain(data.filter(info => info._id===id)))
        },[]) */


    const updatedomainData = id =>{
            const url = `http://localhost:5000/domain/${id}`;
            fetch(url,{
                method:"PUT",
                headers:{
                    'content-type':"application/json"
                },
                body: JSON.stringify(updatedomain)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount>0){
                    alert("Updated Successfully")
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
            Update Your domain
            </Typography>
              
              <form>

                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Domain Suffix"
                    onBlur={OnBlurhandle}
                    name="suffix"
                    id="outlined-size-small"
                    defaultValue={domain.suffix}
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:2}}
                    label="Price"
                    onBlur={OnBlurhandle}
                    name="price"
                    id="outlined-size-small"
                    defaultValue={domain.price} 
                    size="small"
                    />
                 
             {/*  <Box  sx={{display:"flex"}}>
                <TextField
                sx={{width:"100%",my:1,mr:1}}
                label="Live Side"
                onBlur={OnBlurhandle}
                name="liveSide"
                id="outlined-size-small"
                defaultValue={domain.liveSide} 
                size="small"
                />
                <TextField
                sx={{width:"100%",my:1}}
                label="Client Side"
                onBlur={OnBlurhandle}
                name="clientCodeLink"
                id="outlined-size-small"
                defaultValue={domain.clientCodeLink}
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
                  defaultValue={domain.serverCodeLink} 
                  size="small"
                  />
                  <TextField
                    sx={{width:"100%",my:1}}
                    label="Price"
                    onBlur={OnBlurhandle}
                    name="price"
                    id="outlined-size-small"
                    defaultValue={domain.price}
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
                rows={2}
                defaultValue={domain.details}
              />
             <Box sx={{display:"flex"}}>
                <TextField
                    sx={{width:"100%",my:1,mr:1}}
                    label="Rating"
                    onBlur={OnBlurhandle}
                    name="review"
                    id="outlined-size-small"
                    defaultValue={domain.review}
                    size="small"
                    />
                <TextField
                    sx={{width:"100%",my:1,mr:1}}
                    label="Total Review"
                    onBlur={OnBlurhandle}
                    name="totalReview"
                    id="outlined-size-small"
                    defaultValue={domain.totalReview}
                    size="small"
                    />
               </Box> */}
                <Button onClick={()=> updatedomainData(domain._id)}
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
                    } variant="contained">Update domain</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default UpdateDomainModal;