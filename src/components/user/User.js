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
import Settings from "./pages/Settings";
import ListProduct from "./products/ListProduct";
import ChangePassword from "./profile/ChangePassword";
import Profile from "./profile/Profile.js";
import ListWarranty from "./warranty/ListWarranty";

export default function User() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/user">
            <Dashboard/>
          </Route>
          <Route path="/user/profile">
              <Profile/>
          </Route>
          <Route path="/user/change-password">
              <ChangePassword/>
          </Route>
          <Route path="/user/products">
              <ListProduct/>
          </Route>
          <Route path="/user/warranty-registration">
              <ListWarranty/>
          </Route>
          <Route path="/user/contact-us">
            <Contact/>
          </Route>
          <Route path="/user/faq">
          <FAQ/>
          </Route>
          <Route path="/user/logout">
            <Logout/>
          </Route>
          <Route path="/user/settings">
            <Settings/>
          </Route>
   
        </Switch>
      </div>
    </Router>
  );
}
