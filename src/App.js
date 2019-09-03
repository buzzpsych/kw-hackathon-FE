import { BrowserRouter as Router, Route } from "react-router-dom";

const Login = () => {
  return <div>Login view is coming....</div>;
};
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
};

export default App;
