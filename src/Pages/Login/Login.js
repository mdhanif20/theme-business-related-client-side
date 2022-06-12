import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from './../Shared/Firebase/useAuth';
import Navbar from './../Shared/Navbar/Navbar';
import Footer from './../Home/Footer/Footer';
import img from "../../images/smallScreenbg.png";
import FooterReall from './../Shared/FooterReall/FooterReall';


const useStyle = makeStyles({
    image:{
        width:"100%",
        height:"80vh"
    },
    login:{
        
        boxShadow:" 1px 1px 43px 0px #ebe4e4",
        margin:"auto"
    },
    textField:{
       
    },
    fieldButton:{
        background: "linear-gradient(to right, #11D0DF 0%, #19D3AE 100%)"
    }
})


const Login = () => {
    const classes = useStyle();
    const {users,singnInUser,signInWithGoogle} = useAuth();
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    const onChangeField = e =>{
        const field = e.target.name;
        const value= e.target.value;
        const newUser = {...user};
        newUser[field]=value
        setUser(newUser)
    }
    const googleSignIn = e =>{
        signInWithGoogle()
        navigate("/")   
    }
    
    const loginAccount = e =>{
        singnInUser(user.Email,user.Password)
        navigate("/")
        e.preventDefault()
    }
   
    return (
      <Box>
          <Box sx={{backgroundColor:"#24262f"}}>
                <Navbar></Navbar>
          </Box>
          
            <Container>
            <Box sx={{py:10}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                       
                <Box className={classes.login} sx={{width:{md:"80%",xs:"90%"}, padding:{md:"70px 20px",xs:"30px 10px"}}}>
                    <Typography sx={{pb:2}} variant="h6" gutterBottom component="div">
                            Login
                        </Typography>
                <form  onSubmit={loginAccount} >
                            <TextField 
                            sx={{width:{md:"75%",xs:1}}}id="standard-basic" 
                            name="Email"
                            onChange={onChangeField}
                            label="Email"
                                variant="standard" 
                                /> <br /> <br /> 
                            <TextField 
                            sx={{width:{md:"75%",xs:1}}} id="standard-basic" 
                            type="password" 
                            name="Password"
                            onChange={onChangeField}
                            label="Password" 
                            variant="standard" 
                            /> <br /> <br /> <br />
                            <Button   sx={{ color:"#fff",width:{md:"75%",xs:1}}} type="submit" className={classes.fieldButton}>Sign In</Button> 
                            
                    </form>
                    <br /> 
                        <Button   sx={{ color:"#fff",width:{md:"75%",xs:1}}} onClick={()=>googleSignIn()} type="submit" className={classes.fieldButton}><GoogleIcon/>Google Sign In</Button> <br /> <br />

                        <Link style={{textDecoration:"none"}} to={"/reagister"}>
                                <Button variant="text">New User? Please Register</Button>
                            </Link>
                </Box>
                        
                    </Grid>
                    <Grid sx={{display:{md:"block",xs:"none"}}} item xs={12} md={6}>
                        <img className={classes.image} src={`${img}`} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <Box sx={{boxShadow:1,color:"rgba(0, 0, 0, 0.87)"}}>
            <FooterReall></FooterReall>
        </Box>
      </Box>
    );
};

export default Login;