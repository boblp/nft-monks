import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LinkIcon from '@mui/icons-material/Link';
import '../scss/AdminPanel.scss';

export default function adminPanel (props){
    const drawerWidth = 360;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        NFT total amount: #$@
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Typography paragraph>
                </Typography>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    textAlign: 'center',
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <Box 
                    className='nft-generate-forms'
                    sx={{ p: 3 }}
                >
                    <Button 
                        variant="contained" 
                        endIcon={<LinkIcon />}
                        sx={{ width: 1 }}
                        href="nftSpecifics"
                    >
                        NFT specific
                    </Button>
                </Box>
                <Divider />
                <Box sx={{ p: 3 }}>
                    <Button 
                        variant="contained" 
                        endIcon={<AddBoxIcon />}
                        sx={{ width: 1 }}
                    >
                        Generate NFT
                    </Button>
                </Box>
            </Drawer>
        </Box>
    );
}