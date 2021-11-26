import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AllItems from "./Pages/AllItems/AllItems";
import DashboardContainer from "./Pages/Dasboard/DashboardContainer/DashboardContainer";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Register from "./Pages/Register/Register";
import SingleItem from "./Pages/SingleItem/SingleItem";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/items/:id">
            <SingleItem></SingleItem>
          </PrivateRoute>
          <Route path="/items">
            <AllItems></AllItems>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashboardContainer></DashboardContainer>
          </PrivateRoute>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
