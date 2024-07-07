import React from 'react';
import { useSelector } from 'react-redux';

import { Todo } from 'components/Todo/Todo';
import {
  selectVisibleTodos,
} from 'reduxx/selectors';

import css from './TodoList.module.css';

export const TodoList = () => {
  const visibleTodos = useSelector(selectVisibleTodos);

  return (
    <div className={css.listWrapper}>
      <h3 className={css.title}>My ToDos</h3>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
