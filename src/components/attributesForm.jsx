import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function AttributesForm(props) {
  const { traits, handleInputChange, values } = props;

  return (
    <form>
      <h2>Traits</h2>
      <Grid
        container
        alignItems="alignItems"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Object.keys(traits).map((trait, index) => {
          return (
            <Grid item xs={6}>
              <FormControl key={index} fullWidth >
                <FormLabel>{trait}</FormLabel>
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
    </form>
  );

}