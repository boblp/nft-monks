import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Container from '@mui/material/Container';
import { generateNFT } from '../generator/generator';
import Nft from '../components/Nft'
import '../scss/adminPanel.scss';

export default function BulkGenerator (){
  const [nftPool, setNftPool] = useState([]);
  const [generateAmount, setGenerateAmount] = useState(1);

  const generate = () => {
    const newNft = generateNFT(generateAmount);

    setNftPool([...nftPool, ...newNft])
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing="5">
        <Grid item xs={12} sx={{ marginBottom: '30px' }}>
          <TextField
            label="Amount"
            size="small"
            value={generateAmount}
            onChange={e => setGenerateAmount(e.target.value)}
            type="number"
            sx={{ width: '80px' }}
            focused />
          <Button 
            variant="contained" 
            endIcon={<AddBoxIcon />}
            sx={{ marginLeft: '10px' }}
            onClick={() => {
              generate();
            }}
          >
            Generate
          </Button>
        </Grid>
        {nftPool.map((nft, i) => {        
          return (
            <Grid item xs={4} sm={3} md={2} lg={1} key={i}>
              <Nft key={i} nftObject={nft} controls="true" />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}