import { useState } from 'react';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Container from '@mui/material/Container';
import { generateNFT } from '../generator/generator';
import Nft from '../components/Nft'
import '../scss/adminPanel.scss';

export default function BulkGenerator (){
  const [nftPool, setNftPool] = useState([]);

  const generate = () => {
    const newNft = generateNFT(1);
    setNftPool([...nftPool, newNft])
  }

  return (
    <Container maxWidth="xl">
      <Button 
        variant="contained" 
        endIcon={<AddBoxIcon />}
        sx={{ marginBottom: '20px' }}
        onClick={() => {
          generate();
        }}
      >
        Generate NFT
      </Button>
      <div id="nft-container">
        {nftPool.map((nft, i) => {        
          return (<Nft key={i} nftObject={nft[0]} />) 
        })}
      </div>
    </Container>
  );
}