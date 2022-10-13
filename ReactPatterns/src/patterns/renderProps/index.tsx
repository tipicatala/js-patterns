import * as React from "react";

import TemperatureConverter from "./TemperatureConverter";

export default function App() {
  // return <Listings />;
  
  return (
    <TemperatureConverter
      renderKelvin={(value) => (
        <div className="temp-card">
          The temperature in Kelvin is: <span className="temp">{value ? `${value}K` : ""}</span>
        </div>
      )}
      renderFahrenheit={(value) => (
        <div className="temp-card">
          The temperature in Fahrenheit is:
          {value && <span className="temp">{value ? `${value}°F` : ""}</span>}
        </div>
      )}
    />
  );
}
