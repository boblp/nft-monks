import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
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
import AssessmentIcon from '@mui/icons-material/Assessment';
import { getPools, updatePool } from '../models/api';

export default function EditPools () {
  const navigate = useNavigate();
  const [pools, setPools] = useState([]);
  const [selectedPool, setSelectedPool] = useState('');
  const [poolNfts, setPoolNfts] = useState([]);
  const [openInsertModal, setOpenInsertModal] = useState(false);
  const [pastedObj, setPastedObj] = useState([]);
  const [nftsSelected, setNftsSelected] = useState([]);

  useEffect(() => {
    getPools().then((response) => {
      setPools(response);
    })
  }, [])

  const handleInputChange = (e) => {
    setSelectedPool(e.target.value);
    const selectedPoolNfts = pools.find(x => x._id === e.target.value);
    setPoolNfts(selectedPoolNfts.nfts)
  }

  const handleModalClose = () => {
    setOpenInsertModal(false)
  }

  const copySelected = () => {
    
  }

  const deleteSelected = () => {
    const filteredNfts = poolNfts.filter((e, i) => {
      return !nftsSelected.includes(i);
    });

    updatePool(selectedPool, filteredNfts).then((response) => {
      setPoolNfts(filteredNfts)
    });
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

  const updateNfts = () => {
    const parsedObj = JSON.parse(pastedObj)
    const allNfts = [...poolNfts, ...parsedObj];
    updatePool(selectedPool, allNfts).then((response) => {
      setPoolNfts(allNfts)
    });
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
        <FormControl sx={{ margin: '20px 0px' }} fullWidth>
          <InputLabel sx={{ backgroundColor: 'white' }}>Pool</InputLabel>
          <Select onChange={handleInputChange} value={selectedPool}>
            {pools.map((v, k) => {
              return (<MenuItem key={k} value={v._id}>{v.name}</MenuItem>)
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
            <Button
              sx={{ marginLeft: '10px'}}
              variant="contained" 
              endIcon={<AssessmentIcon />}
              onClick={() => {
                navigate(`/pool_analytics?pool=${selectedPool}`)
              }}
            >
              Analyze
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
              setPastedObj(e.target.value);
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
                updateNfts()
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