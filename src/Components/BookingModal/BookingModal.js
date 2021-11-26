import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress, TextField } from "@mui/material";
import useFirebase from "../hooks/useFirebase";
import { logRoles } from "@testing-library/dom";
import useAuth from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};
const BookingModal = ({ handleBookingClose, openBooking, item }) => {
  const { user } = useAuth();
  const { price } = item;
  const initialValue = {
    name: user.displayName,
    email: user.email,
    location: "Enter Location",
  };
  const [updatedValues, setUpdatedValues] = useState(initialValue);
  const history = useHistory();
  //   if (isLoading) return <CircularProgress />;
  const [response, setResponse] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const name = e.target.value;
    const values = { ...updatedValues };
    values[field] = name;
    setUpdatedValues(values);
    console.log(values);
  };
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const finalValues = {
      ...updatedValues,
      price: item.price,
      itemName: item.name,
    };
    fetch("https://nameless-earth-19656.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalValues),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        if (data.insertedId) {
          toast.success("Order Placed Successfully");
          history.push("/dashboard");
        } else {
          toast.error("Order Failed. Try again");
        }
      });
    console.log(response);
    if (response.insertedId) {
      handleBookingClose();
    }
  };
  //   if (isLoading) return <CircularProgress color="inherit" />;
  return (
    <>
      <Modal
        keepMounted
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            {item.name}
          </Typography>
          <form
            onSubmit={handlePlaceOrder}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-size-small1"
              defaultValue={user.displayName}
              size="small"
              name="name"
              onBlur={handleBlur}
              sx={{ width: "80%", mt: 3 }}
            />
            <TextField
              disabled
              id="outlined-size-small2"
              defaultValue={user.email}
              size="small"
              name="email"
              onBlur={handleBlur}
              sx={{ width: "80%", mt: 3 }}
            />

            <Typography sx={{ width: "80%", mt: 3 }}>
              <TextField
                disabled
                id="outlined-size-small"
                defaultValue={price}
                size="small"
              />
            </Typography>

            <TextField
              required
              id="outlined-size-small4"
              defaultValue="Enter Location"
              size="small"
              name="location"
              onBlur={handleBlur}
              sx={{ width: "80%", mt: 3 }}
            />
            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
              Confirm Order
            </Button>
          </form>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default BookingModal;
