import React from 'react';
import PropTypes from 'prop-types';
import DictionaryContext from './DictionaryContext';
import Dictionary from '../../wedding-dict';

const DictionaryProvider = ({ children }) => (
  <DictionaryContext.Provider value={Dictionary}>
    {children}
  </DictionaryContext.Provider>
);

DictionaryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DictionaryProvider;
