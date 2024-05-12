"use client"
import * as React from 'react';
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
import Image from 'next/image';

const pages = ['Master Class', 'Courses', 'Virtual Trading'];


function ResponsiveAppBar() {
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
    <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl" >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleOpenNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
<Image priority width={150} height={100} src="/logo.webp" />
         

          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button className='ml-20' key={page} onClick={handleCloseNavMenu} sx={{ mx: 2, color: 'black' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User Avatar" src="/Avatart.webp" />
            </IconButton>
          </Tooltip>
          
        </Toolbar>
      </Container>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        keepMounted
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map((page) => (
          <MenuItem  key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
      </Menu>
    </AppBar>
  );
}

export default ResponsiveAppBar;
