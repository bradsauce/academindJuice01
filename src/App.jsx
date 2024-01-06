import {Fragment} from 'react';
import CoreConcepts from './components/CoreConcepts';
import MyHeader from './components/MyHeader';

import Examples from './components/Examples';

function App() {
  console.log('App component executing');
  
  return (
    <Fragment>
      <MyHeader />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
