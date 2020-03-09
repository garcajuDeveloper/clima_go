import React from 'react';

const Weather = ({cityResulted}) => {

    const {name, main} = cityResulted;
    if(!name) return null;
    const KELVIN = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h3>{name}</h3>
                <p className="temp">{parseFloat(main.temp - KELVIN, 10).toFixed(1)}<span className="temp span">&#x2103;</span></p>
            </div>
        </div>
     );
}
 
export default Weather;