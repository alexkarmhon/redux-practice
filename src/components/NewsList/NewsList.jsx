import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { nanoid } from '@reduxjs/toolkit';
import { fetchNews } from 'reduxx/news/thunk';
import { selectNews } from 'reduxx/selectors';

import css from './NewsList.module.css';

export const NewsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      <ul className={css.newsList}>
        {news.map(({ id, title }) => (
          <li key={nanoid()} className={css.newsListItem}>
            <Link to={id} state={{ from: location }} className={css.link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
