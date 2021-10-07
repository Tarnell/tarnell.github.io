import React, { useState } from 'react';
import { Header, Page } from 'app/Components';
import DictionaryProvider from './Hooks/provider/DictionaryProvider';

import styles from './App.module.scss';

function App() {
  const [selectedPage, setSelectedPage] = useState('Home');
  return (
    <div className={styles.App}>
      <DictionaryProvider>
        <Header {...{ selectedPage }} changePageFn={setSelectedPage} />
        <Page {...{ selectedPage }} />
      </DictionaryProvider>
    </div>
  );
}

export default App;
