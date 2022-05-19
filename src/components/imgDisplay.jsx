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
        alignItems="alignItems"
        rowSpacing={1}
        columnSpacing={{ xs: 1 }}
        maxWidth="xl">
        <Grid item>
          <h2>Image</h2>
            <Box className="img-box">
              {traitsObj && Object.keys(traitsObj).length > 0 ? 
                <Nft 
                nftObject={traitsObj}
                controls={false}
                size="450px"
                viewJSON={false}/>
              : ""}
            </Box>
        </Grid>
      </Grid>
    </div>
  );

}