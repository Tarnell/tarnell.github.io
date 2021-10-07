import React from 'react';
import PropTypes from 'prop-types';

import HeaderElement from './HeaderElement';
import BrandLogo from '../BrandLogo/BrandLogo';

import styles from './Header.module.scss';

const Header = ({ selectedPage, changePageFn }) => (
  <div className={styles.header}>
    <BrandLogo />
    <div className={styles.headerElementWrapper}>
      <HeaderElement {...{ selectedPage }} content="Home" index={0} changePageFn={changePageFn} />
      <HeaderElement {...{ selectedPage }} content="Gallery" index={1} changePageFn={changePageFn} />
      <HeaderElement {...{ selectedPage }} content="Wedding" index={2} changePageFn={changePageFn} />
      <HeaderElement {...{ selectedPage }} content="Getting There" index={3} changePageFn={changePageFn} />
      <HeaderElement {...{ selectedPage }} content="Registry" index={4} changePageFn={changePageFn} />
      <HeaderElement {...{ selectedPage }} content="RSVP" index={5} changePageFn={changePageFn} />
    </div>
  </div>
);

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  selectedPage: PropTypes.string.isRequired,
  changePageFn: PropTypes.func.isRequired,
};

export default Header;
