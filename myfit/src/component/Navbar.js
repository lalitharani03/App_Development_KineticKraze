import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import JoinIcon from '@mui/icons-material/GroupAdd';
import { Box } from '@mui/material';
import logo from '../assets/images/logo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import AuthContext from '../context/AuthContext';

const menuItems = [
  {
    label: 'Workouts',
    submenu: ['Workout'],
  },
  {
    label: 'Store',
    submenu: ['Supplements', 'Equipment'],
  },
  {
    label: 'About',
    submenu: ['About Us', 'Why Us?'],
  },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const [currentSubmenu, setCurrentSubmenu] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('transparent');
  const [navTextColor, setNavTextColor] = useState('white');
  const [navColor, setNavColor] = useState('white');
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setNavBackground(show ? 'white' : 'transparent');
      setNavTextColor(show ? 'black' : 'white');
      setNavColor(show ? 'black' : 'white');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuOpen = (event, submenu) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubmenu(submenu);
  };

  const handleSubmenuOpen = (event, submenuItem) => {
    setSubmenuAnchorEl(event.currentTarget);
    navigate(`/${submenuItem.toLowerCase().replace(' ', '-')}`);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
    setCurrentSubmenu([]);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleUserIconClick = () => {
    if (user) {
      console.log(user);
      navigate(`/profile/${user.userId}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: navBackground, color: navTextColor }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2, ml: 4 }}  onClick={() => handleMenuItemClick('/')}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: '75px', width: '100px' }}
             
            />
          </IconButton>

          {/* Menu items on the right */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            {menuItems.map((menuItem) => (
              <Box key={menuItem.label} sx={{ display: 'inline-block', ml: 2 }}>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(e) => handleMenuOpen(e, menuItem.submenu)}
                  color="inherit"
                  sx={{
                    color: navTextColor,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      // backgroundColor: '#f0f0f0',
                      color: 'white',
                    },
                    position: 'relative',
                  }}
                  endIcon={<ArrowDropDownIcon />}
                >
                  {menuItem.label}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && currentSubmenu === menuItem.submenu}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                  sx={{
                    '& .MuiPaper-root': {
                      backgroundColor: '#333',
                      color: 'white',
                      borderRadius: '8px',
                      marginTop: '10px',
                    },
                  }}
                >
                  {currentSubmenu.map((submenuItem) => (
                    <MenuItem
                      key={submenuItem}
                      onClick={(e) => handleSubmenuOpen(e, submenuItem)}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#6A1B1A',
                        },
                      }}
                    >
                      {submenuItem} <ArrowRightIcon sx={{ ml: 1 }} />
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}
            <Button
              variant="contained"
              color="secondary"
              startIcon={<JoinIcon />}
              sx={{ ml: 2, color: navTextColor, backgroundColor: '#6A1B1A' ,
                '&:hover': {
                   backgroundColor: '#800000',
                  
                },
                position: 'relative',
              }}
              onClick={() => handleMenuItemClick('/register')}
            >
              Join
            </Button>
            <Button sx={{ backgroundColor: 'transparent', color: navColor }} onClick={handleUserIconClick}>
              <PersonFill />
            </Button>
          </Box>

          {/* Menu icon for mobile view */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List>
          {menuItems.map((menuItem) => (
            <div key={menuItem.label}>
              <ListItem button onClick={() => handleMenuItemClick(`/${menuItem.label.toLowerCase()}`)}>
                <ListItemText primary={menuItem.label} sx={{ color: 'black' }} />
              </ListItem>
              {menuItem.submenu.map((submenuItem) => (
                <ListItem key={submenuItem} button sx={{ pl: 4 }} onClick={() => handleMenuItemClick(`/${menuItem.label.toLowerCase()}/${submenuItem.toLowerCase().replace(' ', '-')}`)}>
                  <ListItemText primary={submenuItem} sx={{ color: 'black' }} />
                </ListItem>
              ))}
            </div>
          ))}
          <ListItem button onClick={() => handleMenuItemClick('/register')}>
            <ListItemText primary="Join" sx={{ color: 'black' }} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
