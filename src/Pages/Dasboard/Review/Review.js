import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../Components/hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [values, setValues] = React.useState({});
  const handleBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newValues = { ...values };
    newValues[field] = value;
    setValues(newValues);
    console.log(newValues);
  };
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...values,
      email: user.email,
    };
    fetch("https://nameless-earth-19656.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review submitted successfully");
        } else {
          toast.error("Review not submitted, Try again");
        }
      });
  };
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Give Your Valuabel Review</h2>
      <form
        onSubmit={handleReviewSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "auto",
        }}
      >
        <TextField
          id="standard-basic1"
          name="name"
          label="Your Name"
          variant="standard"
          onBlur={handleBlur}
        />
        <TextField
          id="standard-basic2"
          label="Product Name"
          name="productName"
          variant="standard"
          onBlur={handleBlur}
        />
        <TextField
          id="standard-basic3"
          name="comment"
          label="Your Comment"
          variant="standard"
          onBlur={handleBlur}
        />
        <Button variant="contained" type="submit" sx={{ marginTop: "20px" }}>
          Done
        </Button>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default Review;
