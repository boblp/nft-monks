import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function EditPools () {
  const [pools, setPools] = useState(['test1', 'test2']);
  const [selectedPool, setSelectedPool] = useState('test1');
  const [poolNfts, setPoolNfts] = useState([{"backgrounds":"3","bodies":"2","faces":"1","hats":"2"},{"backgrounds":"1","bodies":"2","faces":"2","hats":"2"},{"backgrounds":"2","bodies":"2","faces":"1","hats":"2"}]);
  const [openInsertModal, setOpenInsertModal] = useState(false);
  const [pastedObj, setPastedObj] = useState('');
  const [nftsSelected, setNftsSelected] = useState([]);

  const handleInputChange = (e) => {
    setSelectedPool(e.target.value);
  }

  const handleModalClose = () => {
    setOpenInsertModal(false)
  }

  const copySelected = () => {
    
  }

  const deleteSelected = () => {
    // Delete selected
  }

  const selectAll = () => {
    if (nftsSelected.length < poolNfts.length) {
      const selected = [];
      poolNfts.forEach((v, i) => {
        selected.push(i);
      });

      setNftsSelected(selected);
    } else {
      setNftsSelected([])
    }
  }

  const selectNft = (e) => {
    const name = parseInt(e.target.name);

    if (e.target.checked) {
      setNftsSelected([...nftsSelected, name])
    } else {
      const newArr = nftsSelected.filter(x => x !== name);
      setNftsSelected(newArr);
    }
  };
  
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
        <FormControl sx={{ margin: '20px 0px' }} fullWidth>
          <InputLabel sx={{ backgroundColor: 'white' }}>Pool</InputLabel>
          <Select onChange={handleInputChange} value={selectedPool}>
            {pools.map((val, key) => {
              return (<MenuItem key={key} value={val}>{val}</MenuItem>)
            })}
          </Select>
        </FormControl>
        
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
          <div>
            <Button 
              color="success"
              variant="contained" 
              endIcon={<AddBoxIcon />}
              onClick={() => {
                setOpenInsertModal(true);
              }}
            >
              Insert NFTs
            </Button>
            <Button
              sx={{ marginLeft: '10px'}}
              variant="contained" 
              endIcon={<ContentCopyIcon />}
              onClick={() => {
                copySelected();
              }}
            >
              Copy Selected
            </Button>
          </div>
          <Button 
            color="error"
            variant="contained" 
            endIcon={<DeleteIcon />}
            onClick={() => {
              deleteSelected();
            }}
          >
            Delete Selected
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper} elevation={4}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={nftsSelected.length > 0 && nftsSelected.length < poolNfts.length}
                  checked={poolNfts.length > 0 && nftsSelected.length === poolNfts.length}
                  onChange={selectAll}
                />
              </TableCell>
              <TableCell>Backgrounds</TableCell>
              <TableCell>Bodies</TableCell>
              <TableCell>Faces</TableCell>
              <TableCell>Hats</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {poolNfts.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                hover
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={nftsSelected.includes(i)}
                    name={i.toString()}
                    onChange={selectNft}
                  />
                </TableCell>
                <TableCell>{row.backgrounds}</TableCell>
                <TableCell>{row.bodies}</TableCell>
                <TableCell>{row.faces}</TableCell>
                <TableCell>{row.hats}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={openInsertModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Paste Object
          </Typography>
          <TextareaAutosize
            aria-label="NFT Object"
            minRows={5}
            maxRows={30}
            placeholder="[{ key: value }]"
            style={{ width: '-webkit-fill-available', border: '1px solid #333', margin: '10px 0' }}
            onChange={(e) => {
              setPastedObj();
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              color="warning"
              variant="contained" 
              endIcon={<CheckIcon />}
              onClick={() => {
                setOpenInsertModal(true)
              }}
            >
              Check
            </Button>
            <Button
              color="success"
              variant="contained" 
              endIcon={<SaveIcon />}
              onClick={() => {
                setOpenInsertModal(true)
              }}
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </Container>
  )
}