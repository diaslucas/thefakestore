import React from 'react';
import CategoriesAside from '../CategoriesAside';
import './home.scss';
import ItemsBox from '../ItemsBox';

const Home = () => (
  <div className="home">
    <CategoriesAside />
    <ItemsBox />
  </div>
);

export default Home;
