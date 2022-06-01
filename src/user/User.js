import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import FAQ from "./pages/FAQ";
import ListProduct from "./products/ListProduct";
import ShowProduct from "./products/ShowProduct";
import ChangePassword from "./profile/ChangePassword";
import Profile from "./profile/Profile.js";
import ListWarranty from "./warranty/ListWarranty";
import FormWarranty from "./warranty/FormWarranty";
import ShowWarranty from "./warranty/ShowWarranty";
import About from "./pages/About";


export default function User() {
  return (
    <div className='container-fluid'>

      <Router>

        <Switch>
          <Route exact path="/user/dashboard">
            <Dashboard />
          </Route>
          <Route path="/user/profile">
            <Profile />
          </Route>
          <Route path="/user/change-password">
            <ChangePassword />
          </Route>
          <Route path="/user/products">
            <ListProduct />
          </Route>
          <Route path="/user/product-details">
            <ShowProduct />
          </Route>
          <Route path="/user/register-warranty">
            <FormWarranty />
          </Route>
          <Route path="/user/warranty-registration">
            <ListWarranty />
          </Route>
          <Route path="/user/warranty-details">
          <ShowWarranty />
        </Route>
          <Route path="/user/contact-us">
            <Contact />
          </Route>
          <Route path="/user/about">
          <About />
        </Route>
          <Route path="/user/faq">
            <FAQ />
          </Route>
          <Route path="/user/logout">
            <Logout />
          </Route>
      

        </Switch>

      </Router>
    </div>

  );
}
