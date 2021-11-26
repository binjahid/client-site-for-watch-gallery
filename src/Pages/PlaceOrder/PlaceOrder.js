import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PlaceOrder = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h4">Place Order</Typography>
          <Typography variant="body2">
            Fill the form with the order infos.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default PlaceOrder;
