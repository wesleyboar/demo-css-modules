import React from 'react';

import classNames from './Nav.scss';

function Nav(props) {
  return (
    <nav className={classNames.container}>
      <ul className={classNames.list}>
      {props.children.map( (link, index) => (
        <li className={classNames.item}
          key={index /* WARNING: Only for demo */}>
          <a className={classNames.link}
            href={'#' + link.url}>
            <i className={classNames.icon + ' icon-' + link.icon}
              ></i>
            <span className={classNames.text}>{link.text}</span>
          </a>
        </li>
      ))}
      </ul>
    </nav>
  );
}

export default Nav;