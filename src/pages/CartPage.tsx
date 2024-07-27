import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopMenu from '../modules/core/components/Menu';
import Slider from '../modules/core/components/Slider';

const CartPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home - Intelligent Platform</title>
        <meta name="description" content="Welcome to the best e-commerce shop" />
      </Helmet>
      <TopMenu />
      <Slider />
      <h1>Welcome to our Agricultural Intelligent Platform</h1>
    </>
  );
};

export default CartPage;