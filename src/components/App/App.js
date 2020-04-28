import React from 'react';

import Sidebar from '../Sidebar';
import ExampleSection from '../ExampleSection';

import { dumbRoutesA } from '../../routes/dumb.example.js';

import classNames from './App.scss';

function App() {
  return(
    <div className={classNames._}>
      <Sidebar className={classNames.sidebar}>
        {dumbRoutesA}
      </Sidebar>
      <ExampleSection className={classNames.content} />
    </div>
  );
}

export default App;