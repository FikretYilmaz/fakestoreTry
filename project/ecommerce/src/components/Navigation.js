// import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import Favorites from './Favorites';
import MainContent from './MainContent';
// import ProductId from './ProductId';

const Navigation = () => {
  return (
    <div>
      <span>
        <h1>Products</h1>
      </span>
      <Link to="/">Products</Link>
      <Link to="favorites">Favorites</Link>
      <MainContent />
    </div>
  );
};

export default Navigation;
