import { useEffect,useState,useCallback, Suspense } from "react";
import { currentWeatherState, forecastWeatherState} from "../../Atoms/location";
import ForecastCards from "./Components/ForecastCards";
import OtherCities from "./Components/OtherCities";
import WeatherCard from "./Components/WeatherCard";
import Newsletter from "./Components/Newsletter";
import {useRecoilValue} from 'recoil';


const Search = () =>{
    
    const weather = useRecoilValue(currentWeatherState);
    const forecast = useRecoilValue(forecastWeatherState);
    
    return(
        <Suspense fallback={<div>Loading...</div>}>
        <div className=" w-[90%] nav mx-auto lg:mx-3 h-full  ">
            <WeatherCard/>
            <div className=" mx-auto lg:mx-4">
                <ForecastCards />
                <div className=" w-auto lg:flex my-6 space-x-16 mx-auto lg:mx-6">
                    <OtherCities/>
                    <Newsletter/>
                </div>
            </div>
        </div>
        </Suspense>
    )
}

export default Search;