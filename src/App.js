import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import productReview from "./views/productReview";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={productReview} />
      </div>
    </Router>
  );
};

export default App;
