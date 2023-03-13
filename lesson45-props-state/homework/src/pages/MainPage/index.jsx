import React from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import News from "../../components/News";
import "./index.scss";

import Block from "../../components/Block";

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="main">
        <Blog />
        <News />
      </div>
      <br />
      <hr />
      <br />
      {/* below we create app using one component Block */}
      <header className="header__block">
        <div className="header__logo"></div>
        <Block title="header" blockQty="5" blockColor="#E7EFD6" />
      </header>
      <Block title="banner" />
      <div className="main">
        <Block title="blog" blockQty="4" blockColor="#f9d7d7" text="text" />
        <Block title="news" blockQty="3" blockColor="#BDCDF7" />
      </div>
    </>
  );
};

export default MainPage;
