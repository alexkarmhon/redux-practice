import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'components/Button/Button';
import { fetchNewsByQuery } from 'reduxx/news/thunk';

import css from './NewsSearcher.module.css';

export const NewsSearcher = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchNewsByQuery(e.target.elements.query.value));
  };
  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input className={css.searchField} type="text" name="query" />
        <Button type="submit">Search news</Button>
      </form>
    </div>
  );
};
