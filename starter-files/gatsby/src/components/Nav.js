import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas">Pizza menu</Link>
      </li>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/slicemasters">Slicemasters</Link>
      </li>
      <li>
        <Link to="/orders">Order Ahead!</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
