import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { BackLink } from 'components/BackLink/BackLink';
import { selectTodos } from 'reduxx/selectors';

import css from './Todoshka.module.css';

export const Todoshka = () => {
  const { todoId } = useParams();
  const todos = useSelector(selectTodos);

  const { text } = todos.find(todo => todo.id === todoId);

  return (
    <div className={css.container}>
      <BackLink />
      <p className={css.todoText}>{text}</p>
    </div>
  );
};
