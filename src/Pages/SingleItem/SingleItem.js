import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import BookingModal from "../../Components/BookingModal/BookingModal";

const SingleItem = () => {
  const { id } = useParams();

  const [item, setItem] = React.useState("");
  useEffect(() => {
    fetch(`https://nameless-earth-19656.herokuapp.com/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Container xs={{ height: "100vh" }}>
        <Paper elevation={3} sx={{ mt: "100px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img src={item.img} alt="" width="100%" height="100%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ padding: "80px 50px 50px 0" }}>
                <h1>{item.name}</h1>
                <Typography>
                  <b>Price:</b> ${item.price}.00
                </Typography>
                <Typography sx={{ mt: 8 }}>
                  <b>Description:</b> {item.description}
                </Typography>
                <Typography sx={{ mt: 4 }}>
                  <Button variant="outlined" onClick={handleBookingOpen}>
                    Oder Now
                  </Button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <BookingModal
        item={item}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      ></BookingModal>
    </>
  );
};

export default SingleItem;
