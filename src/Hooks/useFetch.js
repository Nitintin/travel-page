import {useState,useEffect} from 'react'
import axios from 'axios'

const useFetch = (fetchUrl) => {

    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        const fetchData= async () =>{
            const result = await axios(fetchUrl);
            console.log(result.data.result);
            setData(result.data.result);
            setIsLoading(false);
        } 
        fetchData();
    },[fetchUrl]);

    return [data,isLoading];
}

export default useFetch
