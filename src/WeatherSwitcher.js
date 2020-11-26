import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function WeatherSwitcher() {
  const [isSunny, setIsSunny] = useState(false);
  return (
    <div>
      {isSunny ? <h1>🌤️</h1> : <h1>🌧</h1>}
      <button onClick={() => setIsSunny(!isSunny)}>
        {isSunny ? `Rain` : `Sun`}
      </button>
    </div>
  );
}

WeatherSwitcher.propTypes = {
  isSunny: PropTypes.bool,
};
