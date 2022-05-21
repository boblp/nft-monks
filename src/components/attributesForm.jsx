import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { InputLabel, Button, TextareaAutosize } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';

export default function AttributesForm(props) {
  const { traits, handleInputChange, handleTextChange, values, randomize } = props;
  const modalStyle = {
    position: 'relative',
    width: 400,
    margin: '20px 0px 0px 0px',
    p: 2
  };

  const copyObj = (obj) => {
    navigator.clipboard.writeText(obj);
  };

  return (
    <form>
      <Grid
        container
        alignItems="alignItems"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: '24px' }}>
        {Object.keys(traits).map((trait, index) => {
          return (
            <Grid key={index} item xs={12}>
              <FormControl key={index} sx={{ m: 1, minWidth: 120 }} fullWidth size="small">
                <InputLabel sx={{ backgroundColor: 'white' }}>{trait}</InputLabel>
                <Select name={trait} value={values[trait] ?? ""} onChange={handleInputChange}>
                  {traits[trait].map((option, key) => {
                    return (<MenuItem key={key} value={option}>{option}</MenuItem>)
                  })}
                </Select>
              </FormControl>
            </Grid>
          );
        })}
      </Grid>
      <Button 
        variant="contained" 
        color="success"
        fullWidth
        endIcon={<ShuffleIcon />}
        sx={{ marginTop: '30px', marginLeft: '8px' }}
        onClick={() => {
          randomize();
        }}
      >
        Randomize
      </Button>

      <Box sx={modalStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button 
            variant="contained" 
            endIcon={<ContentCopyIcon />}
            sx={{ margin: '0px 0px 20px 10px' }}
            onClick={() => {
              copyObj(JSON.stringify(values));
            }}
          >
            Copy Object
          </Button>
        </div>
        <TextareaAutosize 
          value={JSON.stringify(values,  null, 2)} 
          onChange={handleTextChange}
          className="code-view" />
      </Box>

    </form>
  );

}