import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { BackLink } from 'components/BackLink/BackLink';
import { selectNews } from 'reduxx/selectors';

export const NewPost = () => {
  const { newId } = useParams();
  const news = useSelector(selectNews);
  const { author, title, content } = news.find(post => post.id === newId);
  return (
    <div>
      <BackLink />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{content}</p>
    </div>
  );
};
