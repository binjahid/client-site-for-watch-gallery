import { Button, Grid, Typography } from "@mui/material";
import { Box, fontSize, padding } from "@mui/system";
import React from "react";

const SecondaryBanner = () => {
  return (
    <Box sx={{ mb: "5%" }}>
      <Grid container spacing={2} sx={{ height: "vh" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Typography variant="h4" sx={{ fontFamily: "Dosis, sans-serif" }}>
              Watch Repair Services
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#868686", fontSize: "0.8rem", mt: "15px" }}
            >
              Our Reprizo repair centers are staffed with professionally
              trained, expert watchmakers that service all brands of timepieces,
              from Timex to Rolex. Whether it’s a wristwatch, pocket watch,
              stopwatch, clock or any other timepiece, we have exceptiona...
            </Typography>
            <Button
              className="banner-btn"
              variant="outlined"
              sx={{
                padding: "10px 15px",
                mt: "1.5rem",
                color: "black",
                border: "1px solid #868686",
              }}
            >
              LERN MORE
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          sx={{ display: "flex", justifyContent: "right" }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0570/1251/9078/files/home-repair-2_900x.png"
            alt="watch"
            style={{ width: "80%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondaryBanner;
