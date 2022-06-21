import { Logout, Settings} from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from './../../Shared/Firebase/useAuth';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    container:{
        padding:"40px 10px 40px 10px", 
        paddingBottom:".09px",
        height:"100vh",
        position: "sticky",
        color:'#fff',
        top:0
    },
    item:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        marginBottom:"25px",
        cursor:"pointer",
        color:"#fff",
        width:"100%"
    },
    icon:{
        marginRight:"6px",
    },
    text:{
        fontWeight:800,
        fontSize:"1rem",
        opacity:1
    },
    linkDesign:{
        textDecoration:"none",
        color:"#fff"
    }
    ,
    containerSmall:{
        padding:"20px 0px", 
        paddingBottom:".09px",
        height:"98vh", 
        position: "sticky",
        color:'#fff',
        top:0,
    },
    textSmall:{
        fontWeight:800,
        border:"2px solid #8F40FB",
        padding:"2px 16px",
        borderRadius:"30px",
        backgroundColor:"#8F40FB",
        marginLeft:"-100%",
        opacity:0,
        zIndex:1
    },
    itemSmall:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        cursor:"pointer",
        color:"#fff",
        width:"100%",
        marginBottom:"25px",
        '&:hover $textSmall':{
            marginLeft:"0",
            opacity:1,
            transition:".6s"
        }
    },
    
    iconSmall:{
        marginRight:"6px",
        zIndex:2
    }
   
})
 


const LeftSideBar = () => {
    const classes = useStyle();
    const {admin,logOut,users} = useAuth();
    const logOutEmail = () =>{
        const sure = window.confirm("Are You Sure? You Want To log Out.");
        if(sure){
          logOut();
        }
      }

    return (
        <Box sx={{display:"flex"}}>
            <Box sx={{display:{xs:"none",sm:"block"}}}>
                    <Container sx={{  bgcolor:"#8F40FB",width:"200px"}} className={classes.container}>

                    <Link className={classes.linkDesign} to="/deshboard">
                    <Button className={classes.item}>
                        <AppsIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}} className={classes.text}>Deshboard</Typography>
                    </Button>
                    </Link>

                    <Link className={classes.linkDesign} to="/appointment">
                        <Button className={classes.item}>
                            <CalendarTodayIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Appointment</Typography>   
                        </Button>
                    </Link>
                    
                   

                   {
                        
                    admin && <Box>
                    <Link className={classes.linkDesign} to="/deshboard/editTheme">
                        <Button className={classes.item}>
                            <PeopleIcon style={{fontSize:"25px"}}  className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Update Info</Typography>
                        </Button>
                    </Link>
                    <Link className={classes.linkDesign} to="/deshboard/makeadmin">
                            <Button className={classes.item}>
                                <ManageAccountsIcon style={{fontSize:"25px"}}  className={classes.icon}/>
                                <Typography style={{fontWeight:500}}className={classes.text}>Make Admin</Typography>
                            </Button>
                        </Link>
                        </Box>
                   

                   }
                      


                    <Button className={classes.item}>
                        <AssignmentIcon style={{fontSize:"25px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}}className={classes.text}>Prescription</Typography>
                    </Button>
                   
                    <Button className={classes.item}>
                        <Settings style={{fontSize:"25px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}}className={classes.text}>Settings</Typography>
                    </Button>
                    {
                        users?.email?
                        <Button onClick={()=>logOutEmail()} className={classes.item}>
                            <Logout style={{fontSize:"25px"}}  className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Log Out</Typography>
                        </Button>
                        :
                        <Link style={{textDecoration:"none",color:"#fff"}} to="/login">
                        <Button className={classes.item}>
                            <Logout style={{fontSize:"25px"}}  className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Log In</Typography>
                        </Button>
                        </Link>
                      }
                    
                </Container>
            </Box>




            <Box sx={{display:{xs:"block",sm:"none"},zIndex:1}}>
                    <Container style={{width:"40px"}} sx={{  bgcolor:"#8F40FB"}} className={classes.containerSmall}>
                    <Link className={classes.linkDesign} to="/deshboard"> 
                        <Button className={classes.itemSmall}>
                            <AppsIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:500}}className={classes.textSmall}>Deshboard</Typography>
                        </Button>
                    </Link>
                    <Link className={classes.linkDesign} to="/appointment">
                        <Button className={classes.itemSmall}>
                            <CalendarTodayIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:500}}className={classes.textSmall}>Appointment</Typography>
                        </Button>
                    </Link>
                    

                    {
                        
                        admin && <Box>
                        <Link className={classes.linkDesign} to="/deshboard/editTheme">
                        <Button className={classes.itemSmall}>
                            <PeopleIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                            <Typography style={{fontWeight:500}}className={classes.textSmall}>Admin Panel</Typography>
                        </Button>
                        </Link>
                        <Link className={classes.linkDesign} to="/deshboard/makeadmin">
                            <Button className={classes.itemSmall}>
                                <ManageAccountsIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                                <Typography style={{fontWeight:500}}className={classes.textSmall}>MakeAdmin</Typography>
                            </Button>
                        </Link>
                        </Box>
                       }
                          
                    
                    <Button className={classes.itemSmall}>
                        <AssignmentIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}}className={classes.textSmall}>Prescription</Typography>
                    </Button>
                    <Button className={classes.itemSmall}>
                        <Settings style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Settings</Typography>
                    </Button>
                    {
                        users?.email?
                        <Button onClick={()=>logOutEmail()} className={classes.itemSmall}>
                            <Logout style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                            <Typography style={{fontWeight:500}} className={classes.textSmall}>Log Out</Typography>
                        </Button>
                        :
                        <Link style={{textDecoration:"none",color:"#fff"}} to="/login">
                            <Button className={classes.itemSmall}>
                                <Logout style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                                <Typography style={{fontWeight:500}} className={classes.textSmall}>Log In</Typography>
                            </Button>
                        </Link>
                      }
                    
                </Container>
            </Box>
            <Outlet/>
        </Box>
       
        
    );
};

export default LeftSideBar;