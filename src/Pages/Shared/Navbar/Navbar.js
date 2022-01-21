import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../../images/logo.png";
import { makeStyles } from '@mui/styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const useStyle = makeStyles({
    navbar:{
        backgroundColor:"#8200b9",
    },
    smallSizeNavbarTop:{
        display: "flex",
        justifyContent: "space-between",
        marginTop:"15px",
        alignItems: "center"
    }
})


const Navbar = () => {
    const classes = useStyle();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
        <AppBar sx={{bgcolor:"#8200b9",boxShadow: 0}} position="static">

        <Container maxWidth="xl">
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} className={classes.smallSizeNavbarTop}>
                <img src={logo} width="50px" height="50px" alt="" />
                <Button key="" variant="outlined" onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', borderRadius:"15px" }}
                >
                  <LocalPhoneIcon sx={{mr:1}}/> <span>+8801609015767</span>
                </Button>
       </Box>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img src={logo} alt="" />
            </Typography>

            
            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
               
                  <MenuItem  onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                  </MenuItem>
                
              </Menu>
                <Button key="" variant="contained" onClick={handleCloseNavMenu}  sx={{ my: 2,ml:"auto", color: 'white',bgcolor:"#5D64FA", display: 'flex',boxShadow: 0, borderRadius:"15px"}}
                    >
                    Sing In
                    </Button>
            </Box>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: "flex-end" }}>
              
                <Button key="" onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Demo
                </Button>
                <Button key="" onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Demo
                </Button>
                <Button key="" onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Demo
                </Button>
                <Button key="" onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Demo
                </Button>
                <Button key="" onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Demo
                </Button>
                <Button key="" onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Demo
                </Button>
                
                <Button key="" variant="outlined" onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', borderRadius:"15px" }}
                >
                  <LocalPhoneIcon sx={{mr:1}}/> <span>+8801609015767</span>
                </Button>
              
                <Button key="" variant="contained" onClick={handleCloseNavMenu}  sx={{ my: 2,ml:2, color: 'white',background: "linear-gradient(to right,#677DFB,#677DFB)", display: 'block',boxShadow: 0, borderRadius:"15px"}}
                >
                  Sing In
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
                
                  <MenuItem key="" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                    <Typography textAlign="center">Demo</Typography>
                  </MenuItem>
                
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;