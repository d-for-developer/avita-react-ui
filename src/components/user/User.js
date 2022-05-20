import { Home } from "@mui/icons-material";
import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function User() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/user">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/change-password">
            <ChangePassword />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/warranty-registration">
            <WarrantyRegistration />
          </Route>
          <Route path="/contact-us">
            <Contact/>
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/settings">
            <Setting />
          </Route>
   
        </Switch>
      </div>
    </Router>
  );
}
