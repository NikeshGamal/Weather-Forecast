import { useState } from "react"

const useForecast = ()=>{
    const [isError,setIsError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [isForecast,setIsForecast] = useState(false);

    //api call
    //hitting the api we need to have the data that user gives an input so we need to get the location value from the form jsx
    //goto form jsx line
    const submitRequest =(value)=>{
       console.log(value);
    }

    return {
        isError,
        isLoading,
        isForecast,
        submitRequest
    }
}

export default useForecast