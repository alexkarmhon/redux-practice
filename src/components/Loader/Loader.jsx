import { TailSpin } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = () => {
  return (
      <TailSpin
        visible={true}
        height="90"
        width="90"
        color="#fdaa3d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass={css.loader}
      />
  );
};
