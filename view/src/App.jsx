import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Page from './Components/Page/Page';

import styles from './App.module.scss';

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
