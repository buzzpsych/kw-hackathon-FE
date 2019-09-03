import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import productReview from "./views/productReview";
/* const Login = () =>{
  return <div>Login view is coming....</div>
} */
const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={productReview} />
        </div>
      </Router>
    </div>
  );
};

export default App;
