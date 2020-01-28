import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import '../styles/Layout.scss';
import 'semantic-ui-css/semantic.min.css';
import Sidebar from './sidebar';
import Dashboard from '../pages/dashboard';
import OrderList from '../pages/order_list';
import Products from '../pages/products';
import Settings from '../pages/settings';
import Favourites from '../pages/favourites';

function Layout() {
  return (
    <div className="app">
        <div className="app-container">
          <Sidebar/>

          <div className="app-router">
            <div className="app-bg"></div>
            <Switch>
              <Route path="/dashboard" exact>
                <Dashboard/>
              </Route>
              <Route path="/dashboard/products" exact>
                <Products/>
              </Route>
              <Route path="/dashboard/favourites" exact>
                <Favourites/>
              </Route>
              <Route path="/dashboard/orderlist" exact>
                <OrderList/>
              </Route>
              <Route path="/dashboard/settings" exact>
                <Settings/>
              </Route>
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default Layout;