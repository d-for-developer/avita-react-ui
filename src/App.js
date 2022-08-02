import './App.css';
import "@fontsource/plus-jakarta-sans";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Products from './components/products/Products';
import Satus from './components/products/Laptops/Satus';
import Domus from './components/products/Lighting/Domus';
import Wristo from './components/products/Watch/Wristo';



function App() {
  return (
    <>

    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
           <Products/>
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
         
        </Switch>
    </Router>
    </>

  );
}

export default App;
