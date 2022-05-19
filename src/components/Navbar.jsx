import React, { useState }from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material/';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const clickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '15px' }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={clickMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to="bulk_generator" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleClose}>Bulk Generator</MenuItem>
            </Link>
            <Link to="nft_builder" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleClose}>NFT Builder</MenuItem>
            </Link>
          </Menu>
          <Typography variant="h6" color="inherit" component="div">
            NFT in-house tools
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;