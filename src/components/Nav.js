import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav =() => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/blog">
          Blog
        </NavLink>
        <NavLink exact activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
