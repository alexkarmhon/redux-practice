import React from 'react';

import { Counter } from 'components/Counter/Counter';
import { Step } from 'components/Step/Step';

export const Homepage = () => {
  return (
    <>
      <h1 className="pageTitle">Counter</h1>
      <Step />
      <Counter />
    </>
  );
};

export default Homepage;
