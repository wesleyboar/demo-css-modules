import React from 'react';

import Sidebar from '../Sidebar';
import Breadcrumbs from '../Breadcrumbs';
import MainContent from '../MainContent';

import { dumbRoutesB, dumbRoutesC } from '../../routes/dumb.example.js';

import classNames from './ExampleSection.scss';

function ExampleSection(props) {
  return(
    <MainContent className={props.className + ' ' + classNames._}

      head={<>
        <Breadcrumbs className={classNames.breadcrumbs}>
          {dumbRoutesC}
        </Breadcrumbs>
        <button>
          Do Some Action
        </button>
      </>}

      body={<>
        <Sidebar className={classNames.sidebar}>
          {dumbRoutesB}
        </Sidebar>
        <div className={classNames.content}>
          <table>
            <thead>
              <tr>
                <td>Title</td>  <td>P.I.</td>  <td>Team</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coppr</td>  <td>Paul</td>  <td><a className="c-link" href="#">View Team</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>}

    />
  );
}

export default ExampleSection;