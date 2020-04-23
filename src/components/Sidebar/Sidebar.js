import React from 'react';

import classNames from './Sidebar.scss';

function Sidebar(props) {
  return (
    <nav className={props.className + ' ' + classNames._}>
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

export default Sidebar;