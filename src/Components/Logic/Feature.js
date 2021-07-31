import React from 'react'
import FeatureView from '../View/FeatureView'
import useFetch from '../../Hooks/useFetch'

const Feature = () => {
    const fetchUrl = `https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c`;
    const [data,isLoading]=useFetch(fetchUrl);

    if(isLoading){
        return '';
    }
    return (
        <FeatureView tiles={data}/>
    )
}

export default Feature
