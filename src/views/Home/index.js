import React from "react";
import { Container } from "semantic-ui-react";
import HomeHeader from "./components/Header";
import HomeContent from "./components/Content";
import HomeFooter from "./components/Footer";

const Home = props => {
  return (
    <Container>
      <HomeHeader />
      <HomeContent {...props} />
      <HomeFooter />
    </Container>
  );
};

export default Home;
