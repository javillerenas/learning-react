import React from "react";
import { render } from "react-dom";
import css from "./styles/style.styl";

/** import components */
import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

/** import router */
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store/store";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="view/:postID" component={Single}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById("root"));
