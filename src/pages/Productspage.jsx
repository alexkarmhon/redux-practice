import React from 'react';

import { ProductsList } from 'components/ProductsList/ProductsList';

export const Productspage = () => {
  return (
    <>
      <h1 className="pageTitle">Products</h1>
      <ProductsList />
    </>
  );
};

export default Productspage;
