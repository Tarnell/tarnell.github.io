import React, { useState } from 'react';
import Header from '../src/Components/Header/Header';
import Page from '../src/Components/Page/Page';

import styles from './App.module.css';

function App() {
  const [pageName, setPageName] = useState('Home');

  return (
    <div className={styles.App}>
      <Header changePageFn={setPageName} />
      <Page pageName={pageName} />
    </div>
  );
}

export default App;
