import { useState } from 'react';
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
import { generateNFT } from '../generator/generator';
import Nft from '../components/Nft'
import '../scss/AdminPanel.scss';

export default function AdminPanel (props){
  const drawerWidth = 360;
  const [nftPool, setNftPool] = useState([]);

  const generate = () => {
    const newNft = generateNFT(1);
    setNftPool([...nftPool, newNft])
  }

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
        <div id="nft-container">
          {nftPool.map((nft, i) => {        
            return (<Nft key={i} nftObject={nft[0]} />) 
          })}
        </div>
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
            onClick={() => {
              generate();
            }}
          >
            Generate NFT
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}