import React from 'react';
import PropTypes from 'prop-types';

import { BrandLogo } from 'app/Components';

import HeaderElement from './HeaderElement';
import styles from './Header.module.scss';

const elementNames = ['HOME', 'GALLERY', 'FAQ', 'SCHEDULE', 'TRAVEL', 'THINGS TO DO', 'REGISTRY'];

const Header = ({ selectedPage, changePageFn }) => {
  const getHeaderElements = () => elementNames.map((element, index) => (
    <HeaderElement
      {...{ selectedPage, index }}
      key={element}
      content={element}
      changePageFn={changePageFn}
    />
  ));

  return (
    <div className={styles.header}>
      <BrandLogo />
      <div className={styles.headerElementWrapper}>
        {getHeaderElements()}
      </div>
    </div>
  );
};
Header.propTypes = {
  selectedPage: PropTypes.number.isRequired,
  changePageFn: PropTypes.func.isRequired,
};

export default Header;
