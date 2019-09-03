import React from "react";
import { Container } from "semantic-ui-react";
import HomeHeader from "./components/Header";
import HomeContent from "./components/Content";
import HomeFooter from "./components/Footer";
import "./styles.scss";

const Home = props => {
  return (
    <Container className="home_page">
      <HomeHeader />
      <HomeContent {...props} />
      <HomeFooter />
    </Container>
  );
};

export default Home;
