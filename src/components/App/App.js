import React from 'react';

import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';

import classNames from './App.scss';

const dumbRoutes = [{
    url: 'fake',
    text: 'Fake Link 1',
    icon: 'nav-folder'
  }, {
    url: 'fool',
    text: 'Fool Me Twice',
    icon: 'nav-application'
  }, {
    url: 'fly',
    text: 'Fly, You Fool',
    icon: 'nav-dashboard'
}];

function App() {
  return(
    <div className={classNames._}>
      <Sidebar className={classNames.sidebar}>
        {dumbRoutes}
      </Sidebar>
      <Dashboard className={classNames.content} />
    </div>
  );
}

export default App;