import { locationState, forecastWeatherState, currentWeatherState } from "../../../Atoms/location";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

const WeatherCard = () => {
  const location = useRecoilValue(locationState);
  const forecast = useRecoilValue(forecastWeatherState);
  const weather = useRecoilValue(currentWeatherState);
  const [currentTime, setCurrentTime] = useState(new Date());
  

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

  return (
    <div className="flex flex-col w-[90%] max-w-[35rem]  lg:w-full lg:max-w-[23.5rem] mx-auto lg:h-[83vh] linear-gradient p-2 md:p-1 md:space-y-9 lg:space-y-4">
      <div className=" text-[0.875rem] flex justify-between my-5 w-full">
        <div className=" rounded-[1.875rem] bg-white py-2 px-4 text-black mx-6">
          {location}
        </div>
        <div className=" mx-6 py-2 px-4  align-middle text-center">
          {formattedTime}
        </div>
      </div>
      <div className="justify-center flex my-4  items-center mr-6 space-x-3">
        <img
          src={weather ? weather.logo : ""}
          alt="weather icon"
          className=" w-[5rem] h-[5rem]"
        />
        <div className=" text-[#919192] text-[1.25rem]">
          {weather ? weather.condition : "Loading..."}
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className=" text-[5rem]  md:text-[10rem] font-[500]">
          {weather ? weather.temperature : "Loading..."}
        </div>
        <div className=" text-[2.25rem]">°C</div>
      </div>

      <div className=" flex justify-around lg:justify-center lg:space-x-10">
        <div className=" text-center my-3">
          <div className=" font-[#919192] text-[1rem] text-[#919192]">
            Feels Like
          </div>
          <div className=" my-2 flex relative">
            <div className=" text-[1.5rem] font-[500] ">
              {weather ? weather.feels_like : "Loading..."}
            </div>
            <div className=" text-[1.25rem]">°C</div>
          </div>
        </div>

        <div className=" text-center my-3 ">
          <div className=" font-[#919192] text-[1rem] text-[#919192]">
            {" "}
            Humidity{" "}
          </div>
          <div className="text-[1.5rem] my-2 font-[500]">
            {weather ? weather.humidity : ".."}%{" "}
          </div>
        </div>

        <div className=" text-center my-3">
          <div className=" font-[#919192] text-[1rem] text-[#919192]">
            {" "}
            Precipitation{" "}
          </div>
          <div className="text-[1.5rem] my-2">
            {weather ? weather.preciptation : ".."}%
          </div>
        </div>
      </div>

      <div className="sun mx-4 h-[8.5rem] lg:h-[7rem] my-3 p-2 ">
        <div>
          <img src="/sunrise.svg"></img>
        </div>
        <div className="text-[#87878B] text-[1.15rem]">Sunrise</div>
        <div className=" text-[1.5rem] ">{(forecast) ? forecast.days[0].sunrise.substring(0, 5) : ".."}</div>
      </div>
      <div className="sun mx-4 h-[8.5rem] lg:h-[7rem] my-3 p-2 ">
        <div>
          <img src="/sunset.svg"></img>
        </div>
        <div className="text-[#87878B] text-[1.15rem]">Sunset</div>
        <div className=" text-[1.5rem] ">{(forecast) ? forecast.days[0].sunset.substring(0, 5) : ".."}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
