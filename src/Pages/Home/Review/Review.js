import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Review = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Our Customers Review</h2>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper sx={{ padding: "50px", backgroundColor: "#F8F7F6" }}>
              <Box>
                <Typography variant="h6" align="center">
                  Name
                </Typography>
                <Typography align="center">Product</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Review;
