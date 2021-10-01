import React from 'react';
import PropTypes from 'prop-types';

import HeaderElement from './HeaderElement/HeaderElement';

import styles from './Header.module.scss';

const Header = ({ changePageFn }) => (
  <div className={styles.header}>
    <HeaderElement content="Home" index={0} changePageFn={changePageFn} />
    <HeaderElement content="Gallery" index={1} changePageFn={changePageFn} />
    <HeaderElement content="Wedding" index={2} changePageFn={changePageFn} />
    <HeaderElement content="Getting There" index={3} changePageFn={changePageFn} />
    <HeaderElement content="Registry" index={4} changePageFn={changePageFn} />
    <HeaderElement content="RSVP" index={5} changePageFn={changePageFn} />
  </div>
);

Header.propTypes = {
  changePageFn: PropTypes.func.isRequired,
};

export default Header;
