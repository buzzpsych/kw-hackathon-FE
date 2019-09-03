import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";

const productView = () => {
  return <div>Product view</div>;
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
