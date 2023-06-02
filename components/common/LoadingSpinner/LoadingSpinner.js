import React from 'react';
import cx from 'classnames';
import styles from './Loading.module.scss';

const IconLoadingSpinner = () => {
  return (
    <>
      <div className={styles.loading__wrapper} />
      <div className={cx("flex justify-center items-center flex-col", styles.loading__container)}>
        <div className={styles.loading__spinner} />
      </div>
    </>
  );
};

export default IconLoadingSpinner;
