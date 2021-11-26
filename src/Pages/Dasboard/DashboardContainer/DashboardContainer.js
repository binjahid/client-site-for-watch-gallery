import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import AllOrder from "../../AllOrders/AllOrder";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Pay from "../Pay/Pay";
import useAuth from "../../../Components/hooks/useAuth";
import Review from "../Review/Review";
import {
  FaSignOutAlt,
  FaShoppingBasket,
  FaMoneyCheck,
  FaRegCommentAlt,
  FaUserAlt,
  FaShoppingBag,
  FaCartPlus,
} from "react-icons/fa";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddProduct from "../AddProduct/AddProduct";
import AdminAllProducts from "../AdminAllOrders/AdminAllProducts";
const drawerWidth = 240;

function DashboardContainer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { LogOut, admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const drawer = (
    <div>
      <Toolbar>
        <Link to="/">Home</Link>
      </Toolbar>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon sx={{ color: "black", paddingLeft: "20px", pt: "5px" }}>
            <FaShoppingBasket />
          </ListItemIcon>
          <Typography variant="h6">
            <NavLink
              to={`${url}`}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                color: "black",
              }}
              activeStyle={{ color: "#1976D2", fontWeight: 600 }}
            >
              My Orders
            </NavLink>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: "black", paddingLeft: "20px", pt: "6px" }}>
            <FaMoneyCheck />
          </ListItemIcon>
          <Typography variant="h6">
            <NavLink
              to={`${url}/pay`}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                color: "black",
              }}
              activeStyle={{ color: "#1976D2", fontWeight: 600 }}
            >
              Pay
            </NavLink>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: "black", paddingLeft: "20px", pt: "6px" }}>
            <FaRegCommentAlt />
          </ListItemIcon>
          <Typography variant="h6">
            <NavLink
              to={`${url}/review`}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                color: "black",
              }}
              activeStyle={{ color: "#1976D2", fontWeight: 600 }}
            >
              Review
            </NavLink>
          </Typography>
        </ListItem>
        {admin && (
          <Box>
            <ListItem>
              <ListItemIcon
                sx={{ color: "black", paddingLeft: "20px", pt: "6px" }}
              >
                <FaUserAlt />
              </ListItemIcon>
              <Typography variant="h6">
                <NavLink
                  to={`${url}/makeAdmin`}
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "black",
                  }}
                  activeStyle={{ color: "#1976D2", fontWeight: 600 }}
                >
                  Make Admin
                </NavLink>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{ color: "black", paddingLeft: "20px", pt: "6px" }}
              >
                <FaShoppingBag />
              </ListItemIcon>
              <Typography variant="h6">
                <NavLink
                  to={`${url}/manageProducts`}
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "black",
                  }}
                  activeStyle={{ color: "#1976D2", fontWeight: 600 }}
                >
                  Manage Products
                </NavLink>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{ color: "black", paddingLeft: "20px", pt: "6px" }}
              >
                <FaCartPlus />
              </ListItemIcon>
              <Typography variant="h6">
                <NavLink
                  to={`${url}/addProduct`}
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "black",
                  }}
                  activeStyle={{ color: "#1976D2", fontWeight: 600 }}
                >
                  Add Product
                </NavLink>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{ color: "black", paddingLeft: "20px", pt: "6px" }}
              >
                <FaCartPlus />
              </ListItemIcon>
              <Typography variant="h6">
                <NavLink
                  to={`${url}/allOrders`}
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "black",
                  }}
                  activeStyle={{ color: "#1976D2", fontWeight: 600 }}
                >
                  All Orders
                </NavLink>
              </Typography>
            </ListItem>
          </Box>
        )}
        <ListItem>
          <ListItemIcon sx={{ color: "black", paddingLeft: "20px", pt: "6px" }}>
            <FaSignOutAlt />
          </ListItemIcon>
          <Typography variant="h6">
            <NavLink
              to="/"
              onClick={LogOut}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                color: "black",
              }}
            >
              Logout
            </NavLink>
          </Typography>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashborad
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <AllOrder></AllOrder>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts destination={url}></ManageProducts>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/allOrders`}>
            <AdminAllProducts></AdminAllProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

DashboardContainer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardContainer;
