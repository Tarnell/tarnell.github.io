import React, { useState } from 'react';
import * as qs from 'query-string';
import { Header, Page } from 'app/Components';
import DictionaryProvider from './Hooks/provider/DictionaryProvider';

import styles from './App.module.scss';

function App() {
  // eslint-disable-next-line no-restricted-globals
  const pageParams = qs.parse(location.search);
  const defaultSelectedPage = pageParams.rsvp ? 7 : 0;

  const [selectedPage, setSelectedPage] = useState(defaultSelectedPage);
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
