import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Nft from "./Nft"

export default function ImgDisplay({traitsObj}) {

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="alignItems">
        <Grid item xs={11} lg={8}>
          <Box>
            {traitsObj && Object.keys(traitsObj).length > 0 && 
              <Nft 
              nftObject={traitsObj}
              controls={false}
              size="100%"
              viewJSON={false}/>}
          </Box>
        </Grid>
      </Grid>
    </div>
  );

}