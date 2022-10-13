import React from 'react';

export default function TemperatureConverter({renderKelvin, renderFahrenheit}) {
  const [value, setValue] = React.useState(0);

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Degrees Celcius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      {renderKelvin(Math.floor(value + 273.15))}
      {renderFahrenheit(Math.floor((value * 9) / 5 + 32))}
    </div>
  );
}
