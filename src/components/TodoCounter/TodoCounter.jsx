import React from 'react';
import { useSelector } from 'react-redux';

import { selectTodos } from 'reduxx/selectors';
import { selectTodosCount } from 'reduxx/selectors';

import css from './TodoCounter.module.css';

export const TodoCounter = () => {
  // const { todos } = useSelector(selectTodos);
  // const count = todos.reduce(
  //   (acc, todo) => {
  //     if (todo.completed) {
  //       acc.completed += 1;
  //     } else {
  //       acc.active += 1;
  //     }
  //     return acc;
  //   },
  //   { completed: 0, active: 0 },
  // );
  const { active, completed } = useSelector(selectTodosCount);

  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
