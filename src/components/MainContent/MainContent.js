import React from 'react';

import classNames from './MainContent.scss';

function MainContent(props) {
  return(
    <main className={props.className + ' ' + classNames._}>
      <header className={classNames.head}>
        {props.head}
      </header>
      <section className={classNames.body}>
        {props.body}
      </section>
    </main>
  );
}

export default MainContent;