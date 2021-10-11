import React from 'react';
import PropTypes from 'prop-types';

import { BrandLogo } from 'app/Components';

import HeaderElement from './HeaderElement';
import styles from './Header.module.scss';

const elementNames = ['Home', 'Gallery', 'Seating', 'Getting There', 'Registry', 'RSVP'];

const Header = ({ selectedPage, changePageFn }) => {
  const getHeaderElements = () => elementNames.map((element, index) => (
    <HeaderElement
      {...{ selectedPage }}
      content={element}
      index={index}
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
  pageName: PropTypes.string.isRequired,
  selectedPage: PropTypes.string.isRequired,
  changePageFn: PropTypes.func.isRequired,
};

export default Header;
