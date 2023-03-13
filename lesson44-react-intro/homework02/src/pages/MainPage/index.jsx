import React from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import News from "../../components/News";
import "./index.scss";

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="main">
        <Blog />
        <News />
      </div>
    </>
  );
};

export default MainPage;
