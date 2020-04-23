import React from 'react';

import Sidebar from '../Sidebar';

import classNames from './Dashboard.scss';

const dumbRoutes = [{
    url: 'sand',
    text: 'Desert',
    icon: 'nav-jupyter'
  }, {
    url: 'cloud',
    text: 'Clouds',
    icon: 'nav-dashboard'
  }, {
    url: 'tree',
    text: 'Forest',
    icon: 'nav-notification'
}];

function Dashboard(props) {
  return(
    <main className={props.className + ' ' + classNames._}>
      <Sidebar className={classNames.sidebar}>
        {dumbRoutes}
      </Sidebar>
      <section className={classNames.content}>
        <h1>Hello, World!</h1>
      </section>
    </main>
  );
}

export default Dashboard;