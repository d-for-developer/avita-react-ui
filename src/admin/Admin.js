import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import Products from './products/Products';
import AddProduct from './products/AddProduct';
import Categories from './categories/Categories';
import ProductNumber from './categories/number/ProductNumber';
import ProductModel from './categories/pmodel/ProductModel';
import ProductSeries from './categories/series/ProductSeries';
import ProductType from './categories/type/ProductType';
import Analytics from './pages/Analytics';
import ListCustomers from './customers/ListCustomers';
import ShowCustomers from './customers/ShowCustomers';
import Settings from './settings/Settings';
import ListCountry from './countries/ListCountry';
import ShowCountry from './countries/ShowCountry';
import AddCountry from './countries/AddCountry';
import AddBanner from './banner/AddBanner';
import ListBanners from './banner/ListBanners';
import BannerDetails from './banner/BannerDetails';
import ListGrid from './grid/ListGrid';
import AddGrid from './grid/AddGrid';
import GridDetails from './grid/GridDetails';
import ListBlog from './blog/ListBlog';
import AddBlog from './blog/AddBlog';
import BlogDetail from './blog/BlogDetail';
import AddNews from './news/AddNews';
import NewsDetail from './news/NewsDetail';
import ListNews from './news/ListNews';
import AddArticle from './article/AddArticle';
import ListArticle from './article/ListArticle';
import ArticleDetail from './article/ArticleDetail';
import Invoice from './warranty/Invoice';
import WarrantyRegistered from './warranty/WarrantyRegistered';
import ExtendedWarranty from './warranty/ExtendedWarranty';
import DamageProtection from './warranty/DamageProtection';
import WarrantyDetails from './warranty/WarrantyDetails';
import AddShop from './shops/AddShop';
import ShowShop from './shops/ShowShop';
import ListShop from './shops/ListShop';
import AddServiceCenter from './service_center/AddServiceCenter';
import ListServiceCenter from './service_center/ListServiceCenter';
import ShowServiceCenter from './service_center/ShowServiceCenter';
import AddType from './service_center/AddType';
import ChangePassword from './settings/ChangePassword';
import ShowPages from './pages/ShowPages';
import ListPages from './pages/ListPages';
import AddPages from './pages/AddPages';
import PageType from './pages/PageType';

export default function Admin() {
  return (
    <div className='container-fluid'>
      <Router>
        <Switch>
          <Route exact path="/admin/dashboard">
            <Dashboard />
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

          <Route path="/admin/grid-layout">
            <ListGrid />
          </Route>
          <Route path="/admin/add-grid">
            <AddGrid />
          </Route>
          <Route path="/admin/grid-details">
            <GridDetails />
          </Route>


          <Route path="/admin/blogs">
            <ListBlog />
          </Route>
          <Route path="/admin/add-blog">
            <AddBlog />
          </Route>
          <Route path="/admin/blog-detail">
            <BlogDetail />
          </Route>


          <Route path="/admin/news">
            <ListNews />
          </Route>
          <Route path="/admin/add-news">
            <AddNews />
          </Route>
          <Route path="/admin/news-detail">
            <NewsDetail />
          </Route>



          <Route path="/admin/articles">
            <ListArticle />
          </Route>
          <Route path="/admin/add-article">
            <AddArticle />
          </Route>
          <Route path="/admin/article-detail">
            <ArticleDetail />
          </Route>


          <Route path="/admin/products/">
            <Products />
          </Route>
          <Route path="/admin/add-product/">
            <AddProduct />
          </Route>
          <Route path="/admin/product-categories/">
            <Categories />
          </Route>
          <Route path="/admin/product-number/">
            <ProductNumber />
          </Route>
          <Route path="/admin/product-model/">
            <ProductModel />
          </Route>
          <Route path="/admin/product-series/">
            <ProductSeries />
          </Route>
          <Route path="/admin/product-type/">
            <ProductType />
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

          <Route path="/admin/invoices">
            <Invoice />
          </Route>
          <Route path="/admin/damage-protection">
            <DamageProtection />
          </Route>
          <Route path="/admin/warranty-registered">
            <WarrantyRegistered />
          </Route>
          <Route path="/admin/extended-warranty">
            <ExtendedWarranty />
          </Route>
          <Route path="/admin/warranty-details">
            <WarrantyDetails />
          </Route>

          <Route path="/admin/all-shops">
            <ListShop />
          </Route>
          <Route path="/admin/shop-details">
            <ShowShop />
          </Route>
          <Route path="/admin/add-shop">
            <AddShop />
          </Route>

          <Route path="/admin/service-center">
            <ListServiceCenter />
          </Route>
          <Route path="/admin/add-service-center">
            <AddServiceCenter />
          </Route>
          <Route path="/admin/service-center-details">
            <ShowServiceCenter />
          </Route>
          <Route path="/admin/add-type">
            <AddType/>
          </Route>


          <Route path="/admin/settings">
            <Settings />
          </Route>

          <Route path="/admin/change-password">
          <ChangePassword/>
          </Route>

          <Route path="/admin/other-pages">
          <ListPages />
        </Route>
        <Route path="/admin/page-details">
          <ShowPages />
        </Route>
        <Route path="/admin/add-pages">
          <AddPages />
        </Route>

        <Route path="/admin/page-type">
        <PageType/>
      </Route>




        </Switch>
      </Router>
    </div>
  );
}
