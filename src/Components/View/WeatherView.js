import React from 'react'
import WeatherTile from './WeatherTile'

const WeatherView = ({tiles}) => {
    return (
        <section id="weatherSection">
            <div className="weatherHeading">
                THE WEATHER CHANNEL
            </div>
            <div className="weatherTileContainer">
                {
                    tiles.map( (tile,index) => <WeatherTile key={index} tileInfo={tile} tileIndex={index}/>)
                }
            </div>
        </section>
    )
}

export default WeatherView
