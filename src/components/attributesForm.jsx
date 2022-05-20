import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { InputLabel, Button } from "@mui/material";

export default function AttributesForm(props) {
  const { traits, handleInputChange, values, randomize } = props;

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
    </form>
  );

}