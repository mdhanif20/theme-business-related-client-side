import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link} from 'react-router-dom';
import useAuth from "../Firebase/useAuth";
import logo from "../../../images/logo.png";

const Navbar = () => {
    const {users,logOut} = useAuth();
    const logOutEmail = () =>{
      const sure = window.confirm("Are You Sure? You Want To log Out.");
      if(sure){
        logOut();
      }
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
     
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };


    return (
        <AppBar position="static" style={{backgroundColor:"#8200b9"}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <img src={logo} alt="" />
                
              </Typography>


              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
              <img src={logo} width="50px" height="50px" alt="" />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm:"flex" , md: 'none' },justifyContent: 'flex-end'  }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon  style={{color:"#fff"}}/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  
                    <MenuItem style={{display:'block'}}  onClick={handleCloseNavMenu}>
                       <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/">
                        <Typography textAlign="start" sx={{pl:1,pr:2,py:1}}>Home</Typography>
                      </Link>
                    </MenuItem>



                    <MenuItem style={{display:'block'}} onClick={handleCloseNavMenu}>
                      <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/themes">
                         <Typography textAlign="start" sx={{pl:1,pr:2,py:1}}>Themes</Typography>
                      </Link>
                    </MenuItem>


                    <MenuItem style={{display:'block'}} onClick={handleCloseNavMenu}>
                      <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/domain">
                         <Typography textAlign="start" sx={{pl:1,pr:2,py:1}}>Domain</Typography>
                      </Link>
                    </MenuItem>

                    <MenuItem style={{display:'block'}} onClick={handleCloseNavMenu}>
                      <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/hostings">
                         <Typography textAlign="start" sx={{pl:1,pr:2,py:1}}>Hosting</Typography>
                      </Link>
                    </MenuItem>


                    {
                    users?.email && 
                    <MenuItem style={{display:'block'}}  onClick={handleCloseNavMenu}>
                          <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/deshboard">
                            <Typography style={{color:"#0F0C0B"}} textAlign="start" sx={{pl:1,pr:2,py:1}}>DeshBoard</Typography>
                          </Link>
                    </MenuItem>
                    }



                    <MenuItem style={{display:'block'}} onClick={handleCloseNavMenu}>
                      <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/contact">
                         <Typography textAlign="start" sx={{pl:1,pr:2,py:1}}>ContactUs</Typography>
                      </Link>
                    </MenuItem>

                    <MenuItem style={{display:'block'}}  onClick={handleCloseNavMenu}>
                    {
                        users?.email?
                        <Typography onClick={()=>logOutEmail()} textAlign="start" sx={{pl:1,pr:2,py:1}}>Log Out</Typography>
                        :
                     <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/login">
                        <Typography textAlign="start" sx={{pl:1,pr:2,py:1}}>Login</Typography>
                     </Link>
                      }
                    </MenuItem>

                </Menu>
              </Box>





              <Box sx={{ flexGrow: 1, display: { xs: 'none', sm:"none" , md: 'flex' },justifyContent: 'flex-end' }}>
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#0F0C0B', display: 'block' }}>
                      <Link style={{textDecoration:"none",color:"#fff"}} to="/">
                        <Typography textAlign="center">Home</Typography>
                      </Link>
                  </Button>
              
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#0F0C0B', display: 'block' }}>
                      <Link style={{textDecoration:"none",color:"#fff"}} to="/themes">
                         <Typography textAlign="center">Themes</Typography>
                      </Link>
                  </Button>
              
                  <Button
                    onClick={handleCloseNavMenu}
                    style={{color: '#fff'}}
                    sx={{ my: 2, display: 'block' }}>
                      <Link style={{textDecoration:"none",color:"#fff"}} to="/domain">
                      <Typography textAlign="center">Domain</Typography>
                      </Link>
                  </Button>
                
                  <Button
                    onClick={handleCloseNavMenu}
                    style={{color: '#fff'}}
                    sx={{ my: 2, display: 'block' }}>
                      <Link style={{textDecoration:"none",color:"#fff"}} to="/hostings">
                        <Typography textAlign="center">Hosting</Typography>
                      </Link>
                  </Button>

                  

                  {
                        users.email && <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: '#fff', display: 'block' }}>
                          <Link style={{textDecoration:"none",color:"#fff"}} to="/deshboard">
                            <Typography textAlign="center">DeshBoard</Typography>
                          </Link>
                      </Button>
                  }


                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#fff', display: 'block' }}>
                      <Link style={{textDecoration:"none",color:"#fff"}} to="/contact">
                         <Typography textAlign="center">Contact Us</Typography>
                      </Link>
                  </Button>

                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#fff', display: 'block' }}>
                      {
                        users?.email?
                        <Typography onClick={()=>logOutEmail()} 
                        sx={{color:"#fff"}} textAlign="center">Log Out</Typography>
                        :
                     <Link style={{textDecoration:"none",color:"#fff"}} to="/login">
                        <Typography textAlign="center">Login</Typography>
                     </Link>
                      }
                  </Button>
                      
                 
              </Box>
    
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  
                </Menu>
              </Box>
            </Toolbar>
          </Container>
      </AppBar>
    );
};
export default Navbar;
