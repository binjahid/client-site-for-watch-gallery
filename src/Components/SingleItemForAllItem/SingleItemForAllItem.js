import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleItemForAllItem = ({ items }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Paper sx={{ padding: "50px", backgroundColor: "#F8F7F6" }}>
        <Box>
          <Typography>
            <img src={items.img} alt="" height="100%" width="100%" />
          </Typography>
          <Typography variant="h6" align="center">
            {items.name}
          </Typography>
          <Typography align="center" sx={{ color: "#FFDF00" }}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </Typography>
          <Typography align="center">${items.price}.00</Typography>
          <Typography align="center">
            <Link to={`/items/${items._id}`}>
              <Button
                variant="outlined"
                sx={{ fontSize: "10px", mt: "8px" }}
                color="primary"
              >
                View More
              </Button>
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SingleItemForAllItem;
