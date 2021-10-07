import { createContext } from 'react';
// import Dictionary from '../../wedding-dict';

const DictionaryContext = createContext({
  dict: () => 'context not defined',
});

export default DictionaryContext;
