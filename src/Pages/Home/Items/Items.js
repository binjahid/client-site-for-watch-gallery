import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    fetch("https://nameless-earth-19656.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        const items = data.filter((item) => item.id < 7);
        setItems(items);
      });
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Our Featured Items</h2>
      <Container>
        <Grid container spacing={4}>
          {items.map((items) => (
            <Item key={items.id} items={items} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Items;
