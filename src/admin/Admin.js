import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import ListProducts from './products/ListProducts';
import AddProducts from './products/AddProducts';
import ShowProducts from './products/ShowProducts';
import AddProductCategory from './product_categories/AddProductCategory';
import ListProductCategory from './product_categories/ListProductCategory';
import ShowProductCategory from './product_categories/ShowProductCategory';
import AddNumber from './product_number/AddNumber';
import ListNumber from './product_number/ListNumber';
import ShowNumber from './product_number/ShowNumber';
import ListModel from './product_models/ListModel';
import ListSeries from './product_series/ListSeries';
import ListTypes from './product_types/ListTypes';
import Analytics from './pages/Analytics';
import ListCustomers from './customers/ListCustomers';
import ShowCustomers from './customers/ShowCustomers';
import Settings from './settings/Settings';
import ListWarranty from './warranty/ListWarranty';
import ShowWarranty from './warranty/ShowWarranty';
import ListCountry from './countries/ListCountry';
import ShowCountry from './countries/ShowCountry';
import AddCountry from './countries/AddCountry';
import AddBanner from './banner/AddBanner';
import ListBanners from './banner/ListBanners';
import BannerDetails from './banner/BannerDetails';




export default function Admin() {
  return (
    <div className='container-fluid'>
      <Router>
        <Switch>
          <Route exact path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin/products">
            <ListProducts />
          </Route>
          <Route path="/admin/add-product">
            <AddProducts />
          </Route>
          <Route path="/admin/show-product-detail">
            <ShowProducts />
          </Route>
          <Route path="/admin/banners">
            <ListBanners />
          </Route>
          <Route path="/admin/add-banner">
            <AddBanner />
          </Route>
          <Route path="/admin/banner-details">
            <BannerDetails />
          </Route>


          <Route path="/admin/blogs">

          </Route>
          <Route path="/admin/add-blog">

          </Route>
          <Route path="/admin/blog-detail">

          </Route>


          <Route path="/admin/news">

          </Route>
          <Route path="/admin/add-news">

          </Route>
          <Route path="/admin/news-detail">

          </Route>



          <Route path="/admin/articles">

          </Route>
          <Route path="/admin/add-article">

          </Route>
          <Route path="/admin/article-detail">

          </Route>




          <Route path="/admin/product-categories">
            <ListProductCategory />
          </Route>
          <Route path="/admin/add-product-categories">
            <AddProductCategory />
          </Route>
          <Route path="/admin/show-product-categories">
            <ShowProductCategory />
          </Route>

          <Route path="/admin/product-number">
            <ListNumber />
          </Route>
          <Route path="/admin/add-product-number">
            <AddNumber />
          </Route>
          <Route path="/admin/show-product-number">
            <ShowNumber />
          </Route>

          <Route path="/admin/product-model">
            <ListModel />
          </Route>
          <Route path="/admin/product-series">
            <ListSeries />
          </Route>
          <Route path="/admin/product-type">
            <ListTypes />
          </Route>

          <Route path="/admin/analytics">
            <Analytics />
          </Route>

          <Route path="/admin/all-countries">
            <ListCountry />
          </Route>
          <Route path="/admin/country-details">
            <ShowCountry />
          </Route>
          <Route path="/admin/add-country">
            <AddCountry />
          </Route>

          <Route path="/admin/customers">
            <ListCustomers />
          </Route>
          <Route path="/admin/customer-details">
            <ShowCustomers />
          </Route>

          <Route path="/admin/warranty-registered">
            <ListWarranty />
          </Route>
          <Route path="/admin/warranty-details">
            <ShowWarranty />
          </Route>
          <Route path="/admin/settings">
            <Settings />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}
