import { useContext } from 'react';
import DictionaryContext from './provider/DictionaryContext';

const useDictionary = (entry) => {
  const dictionary = useContext(DictionaryContext);
  return dictionary[entry];
};

export default useDictionary;
