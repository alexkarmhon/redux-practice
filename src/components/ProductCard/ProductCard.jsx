import React from 'react';

import { Button } from 'components/Button/Button';

import css from './ProductCard.module.css';

export const ProductCard = ({ product, deleteProduct }) => {
  const { title, description, images, price } = product;
  return (
    <div className={css.card}>
      <img src={images[0]} alt={title} className={css.cardImgTop} />
      <div className={css.cardBody}>
        <h5 className={css.cardTitle}>{title}</h5>
        <p className={css.cardPriceText}>{price} $</p>
        <p className={css.descriptionText}>{description}</p>
        <Button className={css.cardBtn} onClick={deleteProduct}>
          Delete...
        </Button>
      </div>
    </div>
  );
};
