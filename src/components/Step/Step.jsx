import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setStep } from '../../reduxx/counter/counterSlice';
import css from './Step.module.css';
import { selectStep } from 'reduxx/selectors';

export const Step = () => {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { value } = form.elements.step;
    dispatch(setStep(Number(value)));
  };

  return (
    <form className={css.stepForm} onSubmit={handleSubmit}>
      <input
        type="number"
        className={css.stepField}
        name="step"
        placeholder="step"
        defaultValue={step}
      />
      <button type="submit" className={css.stepBtn}>
        Set step
      </button>
    </form>
  );
};
