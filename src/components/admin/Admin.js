import React from 'react'
import Dashboard from './Dashboard'
import ListProducts from './products/ListProducts'
import AddProducts from './products/AddProducts'
import ShowProducts from './products/ShowProducts'

function Admin() {
    return (
        <div className='container-fluid'>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/admin">
                            <Dashboard />
                        </Route>
                        <Route path="/admin/products">
                            <ListProducts />
                        </Route>
                        <Route path="/admin/add-product">
                            <AddProducts />
                        </Route>
                        <Route path="/admin/show-products">
                         <ShowProducts />
                        </Route>
                        <Route path="/admin/product-categories">
                            <Categories />
                        </Route>
                        <Route path="/admin/product-number">
                            <ProductNumber />
                        </Route>
                        <Route path="/admin/product-model">
                            <ProductModel />
                        </Route>
                        <Route path="/admin/product-series">
                            <ProductSeries />
                        </Route>
                        <Route path="/admin/product-type">
                            <ProductType />
                        </Route>
                        <Route path="/admin/analytics">
                            <Analytics />
                        </Route>

                        <Route path="/admin/customers">
                            <Customer />
                        </Route>
                        <Route path="/admin/invoices">
                            <Invoice />
                        </Route>
                        <Route path="/admin/warranty-registered">
                            <Warranty/>
                        </Route>
                        <Route path="/admin/settings">
                            <Settings/>
                        </Route>
                    </Switch>
                </div>

            </Router>
        </div>
    )
}

export default Admin

