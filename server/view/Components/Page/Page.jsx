import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from 'app/Components';
import { Gallery, Home, Rsvp } from './Pages';
import styles from './Page.module.scss';

const getPage = (selectedPage) => {
  if (selectedPage === 0) {
    return <Home />;
  }

  if (selectedPage === 1) {
    return <Gallery />;
  }

  if (selectedPage === 5) {
    return <Rsvp />;
  }

  return <span>{selectedPage}</span>;
};

const Page = ({ selectedPage }) => (
  <div className={styles.page}>
    {getPage(selectedPage)}
    <Footer />
  </div>
);

Page.propTypes = {
  selectedPage: PropTypes.number.isRequired,
};

export default Page;
