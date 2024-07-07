import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './BackLink.module.css';

export const BackLink = () => {
  const location = useLocation();
  return <Link to={location.state?.from ?? '/'} className={css.backLink}>Go back...</Link>;
};
