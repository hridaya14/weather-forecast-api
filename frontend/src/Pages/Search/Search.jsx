import { useEffect,useState,useCallback } from "react";
import { currentWeatherState, forecastWeatherState} from "../../Atoms/location";
import ForecastCards from "./Components/ForecastCards";
import WeatherCard from "./Components/WeatherCard";
import {useRecoilValue} from 'recoil';

const Search = () =>{
    
    const weather = useRecoilValue(currentWeatherState);
    const forecast = useRecoilValue(forecastWeatherState);
    return(
        <div className=" w-[90%] lg:w-full nav mx-auto lg:mx-3  ">
            <WeatherCard weather = {weather}   />
            <div className="w-4/5">
                <ForecastCards forecast={forecast}  />
            </div>
            
        </div>
    )
}

export default Search;