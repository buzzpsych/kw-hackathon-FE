import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import productReview from "./views/productReview";
import AddProduct from "./views/AddProduct";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={productReview} />
        <Route exact path="/products/add" component={AddProduct} />
      </div>
    </Router>
  );
};

export default App;
