import React from 'react';
import PropTypes from 'prop-types';

import Home from './Pages/Home/Home';
import styles from './Page.module.scss';

const getPage = (selectedPage) => {
  if (selectedPage === 0) {
    return <Home />;
  }

  return <span>{selectedPage}</span>;
};

const Page = ({ selectedPage }) => (
  <div className={styles.page}>
    {getPage(selectedPage)}
  </div>
);

Page.propTypes = {
  selectedPage: PropTypes.number.isRequired,
};

export default Page;
