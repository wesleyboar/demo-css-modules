import React from 'react';

import Sidebar from '../Sidebar';

import { dumbRoutesB } from '../../routes/dumb.example.js';

import classNames from './Dashboard.scss';

function Dashboard(props) {
  return(
    <main className={props.className + ' ' + classNames._}>
      <Sidebar className={classNames.sidebar}>
        {dumbRoutesB}
      </Sidebar>
      <section className={classNames.content}>
        <h1>Hello, World!</h1>
      </section>
    </main>
  );
}

export default Dashboard;