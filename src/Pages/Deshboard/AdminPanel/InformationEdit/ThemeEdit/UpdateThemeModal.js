import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const UpdateThemeModal = ({openBooking,handleBookingClose,theme}) => { 

  const [updateTheme,setUpdateTheme] = useState();
  useEffect(()=>{
    const themeData = {
      price:`${theme.price}`,
      review:`${theme.review}`,
      totalReview:`${theme.totalReview}`,
      details:`${theme.details}`,
      websiteName:`${theme.websiteName}`,
      websiteImg:`${theme.websiteImg}`,
      clientCodeLink:`${theme.clientCodeLink}`,
      serverCodeLink:`${theme.serverCodeLink}`,
      liveSide:`${theme.liveSide}`
    }
    setUpdateTheme(themeData);
  },[theme])

    const OnBlurhandle = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...updateTheme};
      newInfo[field] = value
      setUpdateTheme(newInfo);
  }
  
   
    const updateThemeData = id =>{
            const url = `http://localhost:5000/theme/${id}`;
            fetch(url,{
                method:"PUT",
                headers:{
                    'content-type':"application/json"
                },
                body: JSON.stringify(updateTheme)
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
             width:{xs:"70%",sm:"60%",md:"50%"},
             px: 3,
             py: 2,
             borderRadius:"10px"
          }}>
            <Typography sx={{color:"#26C9C4",mb:2}} id="modal-modal-title" variant="h6" component="h2">
            Update Your Theme
            </Typography>
              
              <form>

              <Box sx={{display:"flex"}}>
                    <TextField
                    sx={{width:"100%",my:1,mr:1}}
                    label="websiteName"
                    onBlur={OnBlurhandle}
                    name="websiteName"
                    id="outlined-size-small"
                    defaultValue={theme.websiteName}
                    size="small"
                    />
                    <TextField
                    sx={{width:"100%",my:1}}
                    label="Website Image Url"
                    onBlur={OnBlurhandle}
                    name="websiteImg"
                    id="outlined-size-small"
                    defaultValue={theme.websiteImg} 
                    size="small"
                    />
              </Box>
                 
              <Box  sx={{display:"flex"}}>
                <TextField
                sx={{width:"100%",my:1,mr:1}}
                label="Live Side"
                onBlur={OnBlurhandle}
                name="liveSide"
                id="outlined-size-small"
                defaultValue={theme.liveSide} 
                size="small"
                />
                <TextField
                sx={{width:"100%",my:1}}
                label="Client Side"
                onBlur={OnBlurhandle}
                name="clientCodeLink"
                id="outlined-size-small"
                defaultValue={theme.clientCodeLink}
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
                  defaultValue={theme.serverCodeLink} 
                  size="small"
                  />
                  <TextField
                    sx={{width:"100%",my:1}}
                    label="Price"
                    onBlur={OnBlurhandle}
                    name="price"
                    id="outlined-size-small"
                    defaultValue={theme.price}
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
                defaultValue={theme.details}
              />
             <Box sx={{display:"flex"}}>
                <TextField
                    sx={{width:"100%",my:1,mr:1}}
                    label="Rating"
                    onBlur={OnBlurhandle}
                    name="review"
                    id="outlined-size-small"
                    defaultValue={theme.review}
                    size="small"
                    />
                <TextField
                    sx={{width:"100%",my:1,mr:1}}
                    label="Total Review"
                    onBlur={OnBlurhandle}
                    name="totalReview"
                    id="outlined-size-small"
                    defaultValue={theme.totalReview}
                    size="small"
                    />
               </Box>
                <Button onClick={()=> updateThemeData(theme._id)}
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
                    } variant="contained">Update Theme</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default UpdateThemeModal;