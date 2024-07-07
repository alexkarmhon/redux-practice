import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { selectStep, selectTotal } from 'reduxx/selectors';

import { decrement, increment, reset } from '../../reduxx/counter/counterSlice';
import css from './Counter.module.css';

export const Counter = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const step = useSelector(selectStep);

  const handlePlus = () => dispatch(increment(step));
  const handleMinus = () => dispatch(decrement(step));
  const handleReset = () => dispatch(reset());

  return (
    <div className={css.counterContainer}>
      <div className={css.display}>
        <p>{total}</p>
      </div>
      <div className={css.controls}>
        <button
          type="button"
          className={clsx([css.controlBtn, css.plusBtn])}
          onClick={handlePlus}
        >
          <FaPlus className={css.icon} />
        </button>
        <button
          type="button"
          className={clsx([css.controlBtn, css.resetBtn])}
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className={clsx([css.controlBtn, css.minusBtn])}
          onClick={handleMinus}
        >
          <FaMinus className={css.icon} />
        </button>
      </div>
    </div>
  );
};
