import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Container from '@mui/material/Container';
import { generateNFT } from '../generator/generator';
import Nft from '../components/Nft';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import '../scss/adminPanel.scss';


export default function BulkGenerator (){
  const [nftPool, setNftPool] = useState([]);
  const [generateAmount, setGenerateAmount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [jsonObj, setJsonObj] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleHideDelete = () => setShowDelete(false);

  const handleModalClose = () => setModalOpen(false);

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

  const deleteNft = (index) => {
    const array = [...nftPool];
    array.splice(index, 1);
    setNftPool(array);
  };

  const deleteAll = () => {
    setNftPool([]);
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

  const deleteIconStyle = {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: 'white',
    borderRadius: '100%',
    border: '3px solid #333',
    padding: '0px',
    margin: '90% 75%'
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
              color="success"
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
            <Button 
              variant="contained" 
              color="error"
              endIcon={<DeleteIcon />}
              sx={{ marginLeft: '10px' }}
              onClick={() => {
                deleteAll()
              }}
            >
              Delete All
            </Button>
          </div>
        </Grid>
        <Grid container spacing="5">
          {nftPool.map((nft, i) => {        
            return (
              <Grid
                xs={4}
                sm={3}
                md={2}
                lg={1}
                key={i}
                item
                sx={{ position: 'relative' }}
                onMouseOver={handleShowDelete}
                onMouseLeave={handleHideDelete}>
                {showDelete && <IconButton
                    color="error"
                    sx={deleteIconStyle}
                    onClick={() => {
                      deleteNft(i);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                <Nft key={i} nftObject={nft} controls="true" viewJSON={viewJSON} />
              </Grid>
            )
          })}

          { nftPool.length === 0 && <Grid item xs={12}>
            <Typography variant="h4" gutterBottom component="div" align="center">
              No NFTs here...
            </Typography>
          </Grid>}
        </Grid>
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