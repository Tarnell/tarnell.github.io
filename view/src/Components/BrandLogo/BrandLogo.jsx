import React from 'react';
import styles from './BrandLogo.module.scss';

const LOGO_TEXT_TOP = 'Tarnell & Autumn\'s';
const LOGO_TEXT_BOTTOM = 'Wedding';

const BrandLogo = () => (
  <div className={styles.brandLogo}>
    <span className={styles.logoText}>
      {LOGO_TEXT_TOP}
      <br />
      {LOGO_TEXT_BOTTOM}
    </span>
  </div>
);

export default BrandLogo;
