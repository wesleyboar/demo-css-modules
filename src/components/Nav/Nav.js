import React from 'react';

import './Nav.css';

function Nav(props) {
  return (
    <nav className="nav">
      <ul>
      {props.children.map( (link, index) => (
        <li className="item" key={index /* WARNING: Only for demo */}>
          <a className="link" href={link.url}>{link.text}</a>
        </li>
      ))}
      </ul>
    </nav>
  );
}

export default Nav;