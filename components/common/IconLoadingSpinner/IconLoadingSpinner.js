import React from 'react';
import cx from 'classnames';
import styles from './Loading.module.scss';

const ICON_APPS = '/img/mjadwalceo-logo.png';

const IconLoadingSpinner = () => {
  return (
    <>
      <div className={styles.loading__wrapper} />
      <div className={cx("flex justify-center items-center flex-col", styles.loading__container)}>
        <div className={styles.spinner__coin}>
          <img src={ICON_APPS} alt="Spinner Icon" className={styles.spinner__img} />
        </div>
        <div className={styles.loading__spinner} />
        <div>Loading...</div>
      </div>
    </>
  );
};

export default IconLoadingSpinner;
