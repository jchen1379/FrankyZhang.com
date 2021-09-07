import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {DesignPage} from "../../Pages/DesignPage";
import {AdvertisingPage} from "../../Pages/AdvertisingPage";
import {AboutPage} from "../../Pages/AboutPage";
import React from "react";

export function PageRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DesignPage}/>
        <Route path="/design" component={DesignPage}/>
        <Route path="/advertising" component={AdvertisingPage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
    </Router>
  )
}