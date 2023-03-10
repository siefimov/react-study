import React from "react";

import "./index.scss";

export const Weather = ({ title, temperature, icon }) => {
  return (
    <div className={`weather ${title}`}>
      <h3 className="weather__title">{title}</h3>
      <div className="weather__forecast">
        <span className="weather__temperature">{temperature}</span>
        <span className="weather__icon">{icon}</span>
      </div>
    </div>
  );
};
