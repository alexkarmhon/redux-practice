import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Button } from 'components/Button/Button';
import { checkToggle, deleteTodo } from 'reduxx/todo/todoSlice';

import css from './Todo.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const todoLocation = useLocation();

  const handleCheck = () => dispatch(checkToggle(todo.id));
  const handleDeleteBtn = () => dispatch(deleteTodo(todo.id));
  return (
    <div className={css.todoWrapper}>
      <input type="checkbox" checked={todo.completed} onChange={handleCheck} />
      {/* <p className={css.text}>{todo.text}</p> */}
      <Link to={todo.id} state={{from:todoLocation}} className={css.linkText}>
        {todo.text}
      </Link>
      <Button className={css.btn} onClick={handleDeleteBtn}>
        <RiDeleteBin6Line className={css.deleteIcon} />
      </Button>
    </div>
  );
};
