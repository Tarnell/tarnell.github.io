import React from 'react';
import useDictionary from 'app/Hooks/useDictionary';

import styles from './BrandLogo.module.scss';

const BrandLogo = () => (
  <div className={styles.brandLogo}>
    <span className={styles.logoText}>
      {useDictionary('tarnell_and_autumn')}
      <br />
      {useDictionary('wedding')}
    </span>
  </div>
);

export default BrandLogo;
