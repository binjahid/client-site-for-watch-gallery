import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const [values, setValues] = React.useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValues = { ...values };
    newValues[field] = value;
    setValues(newValues);
    console.log(newValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newValues = { ...values, id: 10 };
    fetch("https://nameless-earth-19656.herokuapp.com/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newValues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added successfully");
        } else {
          toast.error("Product not added . Try again");
        }
      });
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add Product</h2>
      <Box sx={{ width: "50%", margin: "auto" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            label="Product Name"
            name="name"
            id="outlined-size-small10"
            size="small"
            sx={{ margin: "10px" }}
            onBlur={handleBlur}
          />
          <TextField
            required
            label="Image Link"
            name="img"
            id="outlined-size-small11"
            size="small"
            sx={{ margin: "10px" }}
            onBlur={handleBlur}
          />
          <TextField
            required
            label="Price"
            name="price"
            id="outlined-size-small12"
            size="small"
            sx={{ margin: "10px" }}
            onBlur={handleBlur}
          />
          <TextField
            required
            name="description"
            label="Description"
            id="outlined-size-small13"
            size="small"
            sx={{ margin: "10px" }}
            onBlur={handleBlur}
          />
          <Button variant="contained" type="submit" sx={{ margin: "10px" }}>
            Add
          </Button>
        </form>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
