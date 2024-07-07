import React from 'react';

import { NewsList } from 'components/NewsList/NewsList';
import { NewsSearcher } from 'components/NewsSearcher/NewsSearcher';

export const Newspage = () => {
  return (
    <div>
      <h1 className="pageTitle">News</h1>
      <NewsSearcher />
      <NewsList />
    </div>
  );
};

export default Newspage;
