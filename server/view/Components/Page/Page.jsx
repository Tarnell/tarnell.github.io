import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from 'app/Components';
import {
  FAQ, Gallery, Home, Registry, Rsvp, Schedule, Travel, ThingsToDo,
} from './Pages';
import styles from './Page.module.scss';

const getPage = (selectedPage) => {
  switch (selectedPage) {
    case 0:
      return <Home />;
    case 1:
      return <Gallery />;
    case 2:
      return <FAQ />;
    case 3:
      return <Schedule />;
    case 4:
      return <Travel />;
    case 5:
      return <ThingsToDo />;
    case 6:
      return <Registry />;
    case 7:
      return <Rsvp />;
    default:
      return <span>{selectedPage}</span>;
  }
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
