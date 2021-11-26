import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { useRouteMatch, Link } from "react-router-dom";
import { margin } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const ManageProducts = ({ destination }) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://nameless-earth-19656.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="center">Image Link</StyledTableCell>

              <StyledTableCell align="center">id</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product._id}>
                <StyledTableCell component="th" scope="row">
                  {product.name}
                </StyledTableCell>
                <StyledTableCell align="right">{product.img}</StyledTableCell>

                <StyledTableCell align="right">{product._id}</StyledTableCell>
                <StyledTableCell align="right">
                  {product.description}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography sx={{ width: "200px", m: "auto", mt: 4 }}>
        <Link
          style={{ textDecoration: "none" }}
          to={`${destination}/addProduct`}
        >
          {" "}
          <Button variant="contained" sx={{}}>
            Add More Product
          </Button>{" "}
        </Link>
      </Typography>
    </>
  );
};

export default ManageProducts;
