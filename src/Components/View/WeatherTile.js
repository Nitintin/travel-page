import React from 'react'
import cloudImg from '../../Assets/icon-party-sunny.svg'

const WeatherTile = ({tileInfo,tileIndex}) => {
    return (
        <div className={'weather'+tileIndex+" weatherTile"}>
            <h4>{tileInfo.city}</h4>
            <img src={cloudImg} alt="clouds"/>
            <p className="temp">{tileInfo.temp_Celsius}*</p>
        </div>
    )
}

export default WeatherTile
