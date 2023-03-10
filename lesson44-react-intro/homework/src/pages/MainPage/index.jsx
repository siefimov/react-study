import React from "react";
import { WiSunrise } from "react-icons/wi";
import { WiDayCloudyWindy } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiDayRainWind } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { WiNightPartlyCloudy } from "react-icons/wi";

import { Weather } from "../../components/Weather";
import "./index.scss";

export const MainPage = () => {
  return (
    <div className="wrapper">
      <div className="title">
        <h2 className="title__text">CSS Weather Forecast </h2>
        <WiSunrise />
      </div>

      <div className="weather__wrapper">
        <Weather title="Lisbon" temperature="21&deg;C" icon={<WiSunrise />} />
        <Weather title="Paris" temperature="11&deg;C" icon={<WiDayCloudyWindy />} />
        <Weather title="Belgrade" temperature="15&deg;C" icon={<WiSunrise />} />
        <Weather title="Venice" temperature="21&deg;C" icon={<WiSunrise />} />
        <Weather title="Tel-Avive" temperature="32&deg;C" icon={<WiSnow />} />
        <Weather title="Cair" temperature="21&deg;C" icon={<WiSunrise />} />
        <Weather title="New-York" temperature="17&deg;C" icon={<WiDayCloudy />} />
        <Weather title="New-Delhi" temperature="17&deg;C" icon={<WiDayRainWind />} />
        <Weather title="San-Francisco" temperature="15&deg;C" icon={<WiDaySunnyOvercast />} />
        <Weather title="Tokyo" temperature="8&deg;C" icon={<WiNightClear />} />
        <Weather title="Sydney" temperature="25&deg;C" icon={<WiNightPartlyCloudy />} />
      </div>
      <div className='footer'>
      <p className="footer__text">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
      </div>
    </div>
  );
};
