import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "85vh",
        backgroundImage:
          "url('https://cdn.shopify.com/s/files/1/0570/1251/9078/files/home-repair-3.png')",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{ display: "flex", alignItems: "center", height: "80vh" }}
          >
            <Box>
              <Typography variant="h3" color="white">
                Complete Watch Overhaul
              </Typography>
              <Typography variant="body1" color="white">
                If your mechanical watch is running fast or slow it may be time
                for a visit to a repair shop.
              </Typography>
              <Button
                className="banner-btn"
                variant="outlined"
                sx={{ color: "white", border: "1px solid white", mt: 2 }}
              >
                EXPLORE PRICES
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
