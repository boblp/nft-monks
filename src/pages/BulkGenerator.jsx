import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Container from '@mui/material/Container';
import { generateNFT } from '../generator/generator';
import Nft from '../components/Nft';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../scss/AdminPanel.scss';

export default function BulkGenerator (){
  const [nftPool, setNftPool] = useState([]);
  const [generateAmount, setGenerateAmount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => setModalOpen(false);
  const [jsonObj, setJsonObj] = useState('');

  const generate = () => {
    const newNft = generateNFT(generateAmount);

    setNftPool([...nftPool, ...newNft])
  }

  const viewJSON = (nftObject) => {
    setJsonObj(nftObject);
    setModalOpen(true);
  };

  const copyObj = (obj) => {
    navigator.clipboard.writeText(obj);
  };

  const loadPool = async () => {
    const text = await navigator.clipboard.readText();
    const parsedVal = JSON.parse(text)
    
    if (Array.isArray(parsedVal)) {
      setNftPool([...nftPool, ...parsedVal])
    } else if (Object(parsedVal) === parsedVal) {
      setNftPool([...nftPool, parsedVal])
    } else {
      alert('Invalid array or object')
    }
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing="5">
        <Grid item xs={12} sx={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between' }}>  
          <div>
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
          </div>
          <div>
            <Button 
              variant="contained" 
              endIcon={<ContentCopyIcon />}
              sx={{ marginLeft: '10px' }}
              onClick={() => {
                copyObj(JSON.stringify(nftPool));
              }}
            >
              Copy Pool
            </Button>
            <Button 
              variant="contained" 
              endIcon={<FileUploadIcon />}
              sx={{ marginLeft: '10px' }}
              onClick={() => {
                loadPool()
              }}
            >
              Load Pool
            </Button>
          </div>
        </Grid>
        {nftPool.map((nft, i) => {        
          return (
            <Grid item xs={4} sm={3} md={2} lg={1} key={i}>
              <Nft key={i} nftObject={nft} controls="true" viewJSON={viewJSON} />
            </Grid>
          )
        })}
      </Grid>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              NFT JSON Object
            </Typography>
            <Button 
              variant="contained" 
              endIcon={<ContentCopyIcon />}
              sx={{ marginLeft: '10px' }}
              onClick={() => {
                copyObj(JSON.stringify(jsonObj));
              }}
            >
              Copy Object
            </Button>
          </div>
          <pre className="code-view">
            { JSON.stringify(jsonObj,  null, 2) }
          </pre>
        </Box>
      </Modal>
    </Container>
  );
}