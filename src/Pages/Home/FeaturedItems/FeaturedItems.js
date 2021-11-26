import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FeaturedItems = () => {
  return (
    <>
      <Typography variant="h3" align="center">
        Watch Gallery
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ width: "70%", margin: "auto", mb: "4rem" }}
      >
        Each store is staffed with some of the industry's best jewelers,
        watchmakers, watch repair professionals and smartphone technicians who
        provide superior quality services.
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper
              elevation={0}
              sx={{ backgroundColor: "#F8F7F6", padding: "30px" }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJa1xeA69HtZF_r3fJ96kn4XgPBd7oXAT8w&usqp=CAU"
                alt=""
              />
              <Typography variant="body1" align="center" sx={{ mb: "20px" }}>
                REPAIRS
              </Typography>
              <Typography variant="h3" align="center">
                Watch
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper
              elevation={0}
              sx={{ backgroundColor: "#F8F7F6", padding: "30px" }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://www.gadstyle.com/wp-content/uploads/2019/02/skmei-1243-men-sports-watch-1.jpg"
                alt=""
              />
              <Typography variant="body1" align="center" sx={{ mb: "20px" }}>
                REPAIRS
              </Typography>
              <Typography variant="h3" align="center">
                Sports Watch
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper
              elevation={0}
              sx={{ backgroundColor: "#F8F7F6", padding: "30px" }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcqeEtBAS2QRLH5PcdJcAHVZns_dWtwGTBQ&usqp=CAU"
                alt=""
              />
              <Typography variant="body1" align="center" sx={{ mb: "20px" }}>
                SERVICE
              </Typography>
              <Typography variant="h3" align="center">
                Smart Watch
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FeaturedItems;
