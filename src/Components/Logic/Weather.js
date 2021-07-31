import React from 'react'
import WeatherView from '../View/WeatherView'
import useFetch from '../../Hooks/useFetch'

const Weather = () => {
    const fetchUrl = `https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576`;
    const [data,isLoading]=useFetch(fetchUrl);

    if(isLoading){
        return '';
    }
    return (
        <WeatherView tiles={data}/>
    )
}

export default Weather
