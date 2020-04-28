import React from 'react';

import classNames from './Breadcrumbs.scss';

function Breadcrumbs(props) {
  return (
    <nav className={props.className + ' ' + classNames._}>
      {props.children.map( (link, index) => (
        (link.url) ? (
          <a className={classNames.link + ' ' + classNames.item}
            href={'#' + link.url}
            key={index /* WARNING: Only for demo */}>
            <span className={classNames.text}>{link.text}</span>
          </a>
         ) : (
          <span className={classNames.text + ' ' + classNames.item}
            key={index /* WARNING: Only for demo */}>
            {link.text}
          </span>
         )
      ))}
    </nav>
  );
}

export default Breadcrumbs;