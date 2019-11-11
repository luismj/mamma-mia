import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import CommentComponent from './client/comments.component';
import DailyMenuComponent from './client/dailymenu.component';
import DishesComponent from './client/dishes.component';
import OrderComponent from './client/order.component';
import { routes } from "../../config/routes/index.js";
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  /*return (
    <div className="container no-padding-xs pb-4 flex-grow-1" id="page-wrap">
      
      <Switch>
            {routes.map(route => (<Route key={route.path} {...route} />))}
      </Switch>
      
    </div>
    );*/
    return(
      <Router>
        <nav className="nav-wrapper amber darken-3">
          
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink activeClassName="active" to="/">Daily Menu</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/dishes">Dishes</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/orders">Your Order</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/comments">Comments</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={ DailyMenuComponent }></Route>
          <Route path="/dishes" exact component={ DishesComponent }></Route>
          <Route path="/comments" exact component={ CommentComponent }></Route>
          <Route path="/orders" exact component={ OrderComponent }></Route>
        </Switch>
      </Router>

    );
}

export default App;
