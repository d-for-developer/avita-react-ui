import './App.css';
// import "@fontsource/plus-jakarta-sans";
import "@fontsource/orbitron";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Satus from './components/products/Laptops/Satus';
import Domus from './components/products/Lighting/Domus';
import Wristo from './components/products/Watch/Wristo';
import Contact from './components/pages/Contact';
import Support from './components/pages/Support';
import Wristio1 from './components/products/Wristio1/Wristio1';
import Wristio2 from './components/products/Wristio2/Wristio2';
import Wristio1Spec from './components/products/Wristio1/Wristio1Spec';
import Wristio2Spec from './components/products/Wristio2/Wristio2Spec';


function App() {
  return (
    <>

    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
           <Contact/>
          </Route>
          <Route path="/laptops">
            <Satus/>
          </Route>
          <Route path="/smart-lighting">
            <Domus/>
          </Route>
          <Route path="/smart-watch">
            <Wristo/>
          </Route>
         <Route exact path="/products/wristio1">
            <Wristio1/>
          </Route>
          <Route path="/products/wristio1/spec">
            <Wristio1Spec/>
          </Route>
          <Route exact path="/products/wristio2">
            <Wristio2/>
          </Route>
          <Route path="/products/wristio2/spec">
            <Wristio2Spec/>
          </Route>
         <Route path="/support">
            <Support/>
          </Route>
         
        </Switch>
    </Router>
    </>

  );
}

export default App;
