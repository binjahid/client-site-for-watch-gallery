import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import SingleItemForAllItem from "../../Components/SingleItemForAllItem/SingleItemForAllItem";
import NavbarContainer from "../Home/NavbarContainer/NavbarContainer";

const AllItems = () => {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    fetch("https://nameless-earth-19656.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <>
      <NavbarContainer></NavbarContainer>
      <h2
        style={{
          textAlign: "center",
          backgroundColor: "#F8F7F6",
          padding: "20px",
          position: "relative",
          top: "-20px",
        }}
      >
        All Products
      </h2>
      <Container>
        <Grid container spacing={3}>
          {items.map((items) => (
            <SingleItemForAllItem
              key={items.id}
              items={items}
            ></SingleItemForAllItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AllItems;
