import React from 'react';
import HorseList from '../../components/HorseList/HorseList.component';
import { HomePageWrapper, Title } from './HomePage.styled';

const HomePage = () => (
  <HomePageWrapper>
    <Title>Horses</Title>
    <HorseList />
  </HomePageWrapper>
);

export default HomePage;
