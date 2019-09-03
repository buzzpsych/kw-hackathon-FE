import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import { getUsername } from "./utils";

const productView = () => {
  return <div>Product {getUsername()} </div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={productView} />
      </div>
    </Router>
  );
};

export default App;
