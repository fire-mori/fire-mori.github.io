import React from "react";
import List from "../../components/list/list.component";
import { HomePageWrapper, Title } from "./homepage.styled";

const HomePage = () => (
  <HomePageWrapper>
    <Title>Horses</Title>
    <List />
  </HomePageWrapper>
);

export default HomePage;