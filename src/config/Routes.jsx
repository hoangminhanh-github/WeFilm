import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../Pages/Home';
import Catalog from '../Pages/Catalog';
// import Details from '../Pages/Details';
import Details from '../Pages/Details/Details';
function Routes() {
  return (
    <div>
         <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Details}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    </div>
  )
}

export default Routes