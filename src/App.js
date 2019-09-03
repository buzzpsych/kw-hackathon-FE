import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./views/products";
import Home from "./views/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </div>
    </Router>
  );
};

export default App;
