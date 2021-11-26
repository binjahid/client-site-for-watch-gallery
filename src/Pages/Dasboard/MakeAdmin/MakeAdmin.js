import { Button, TextField, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const MakeAdmin = () => {
  const [email, setEmail] = React.useState("");
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAddAdmin = () => {
    fetch(`https://nameless-earth-19656.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.modifiedCount > 0) {
          toast.success("Admin Added Successfully");
        } else {
          toast.error("Admin not added Or user is already an Admin");
        }
      });
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <h2 style={{ textAlign: "center", width: "150%" }}>Make Admin</h2>
          <TextField
            label="Enter Email"
            onBlur={handleBlur}
            id="outlined-size-small5"
            size="small"
            sx={{ width: "150%" }}
          />
          <Button
            variant="contained"
            onClick={handleAddAdmin}
            color="primary"
            sx={{ mt: 2, width: "150%" }}
          >
            Add
          </Button>
        </Box>
        <ToastContainer />
      </Box>
    </div>
  );
};

export default MakeAdmin;
