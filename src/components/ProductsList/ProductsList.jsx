import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/Loader/Loader';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { deleteProductThunk, getProductsThunk } from 'reduxx/products/thunk';
import { selectProducts } from 'reduxx/selectors';

import css from './ProductsList.module.css';

export const ProductsList = () => {
  const { products, isLoading, error } = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {products && (
        <div className={css.container}>
          <div className={css.gridContainer}>
            {products.map(product => (
              <ProductCard
                product={product}
                key={product.id}
                deleteProduct={() => dispatch(deleteProductThunk(product.id))}
              />
            ))}
          </div>
        </div>
      )}
      {error && <p>Error</p>}
    </>
  );
};
