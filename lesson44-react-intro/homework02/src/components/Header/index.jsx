import React from "react";

import Menu from "./Menu";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <h2 className="header__title title-h2">Blog name</h2>
      <Menu />
    </header>
  );
};

export default Header;
