import { useEffect,useState,useCallback, Suspense } from "react";
import { currentWeatherState, forecastWeatherState} from "../../Atoms/location";
import ForecastCards from "./Components/ForecastCards";
import WeatherCard from "./Components/WeatherCard";
import {useRecoilValue} from 'recoil';

const Search = () =>{
    
    const weather = useRecoilValue(currentWeatherState);
    const forecast = useRecoilValue(forecastWeatherState);
    
    return(
        <Suspense fallback={<div>Loading...</div>}>
        <div className=" w-[90%] lg:w-full nav mx-auto lg:mx-3  ">
            <WeatherCard    />
            <div className=" w-4/5 md:w-full items-center mx-auto lg:mx-8">
                <ForecastCards  />
            </div>
            
        </div>
        </Suspense>
    )
}

export default Search;