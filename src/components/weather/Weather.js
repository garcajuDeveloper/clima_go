import React from 'react';

const Weather = ({cityResulted}) => {

    const {name, main} = cityResulted;
    if(!name) return null;
    const KELVIN = 273.15;

    return ( 
        <div className="card-panel blue accent-2 col s12">
            <div className="white-text">
                <h3>{name}</h3>
                <p className="temp">{parseFloat(main.temp - KELVIN, 10).toFixed(1)}<span className="temp span">&#x2103;</span></p>
            </div>
            <div className="result-badges">
                <p><span class="new badge blue darken-3" data-badge-caption="°">max {parseFloat(main.temp_max - KELVIN, 10).toFixed(1)}</span></p>
                <p><span class="new badge blue darken-3" data-badge-caption="°">min {parseFloat(main.temp_min - KELVIN, 10).toFixed(1)}</span></p>
                <p><span class="new badge blue darken-3" data-badge-caption="%">humedad {main.humidity}</span></p>
            </div>
        </div>
     );
}
 
export default Weather;