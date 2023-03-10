import React from "react";

import "./index.scss";

const Menu = () => {
  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Blog
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            News
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
