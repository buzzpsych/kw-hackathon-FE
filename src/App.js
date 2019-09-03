import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./views/products";
import "./App.css";

const Login = () => {
  return <div>Login view is coming....</div>;
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/products" component={Products} />
        </div>
      </Router>
    </div>
  );
};

export default App;
