import './App.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Products from './components/products/Products';
import News from './components/news/News';
import Shop from './components/shop/Shop';
import Service from './components/service/Service';
import NotFound from './components/pages/NotFound';



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
           <Products/>
          </Route>
          <Route path="/news">
            <News/>
          </Route>
          <Route path="/where-to-buy">
            <Shop />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
