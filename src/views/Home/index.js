import React from "react";
import { Container } from "semantic-ui-react";
import HomeHeader from "./components/Header";
import HomeContent from "./components/Content";
import HomeFooter from "./components/Footer";

const Home = () => {
  return (
    <Container>
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </Container>
  );
};

export default Home;
