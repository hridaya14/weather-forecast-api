import { useRecoilValue } from "recoil";
import { forecastWeatherState } from "../../../Atoms/location";
import { getWeatherIconPath } from "../../../Atoms/location";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ForecastCards = () => {
  const forecast = useRecoilValue(forecastWeatherState);
  const days = forecast.days;

  return (
    <div className=" w-full lg:w-[90%] mx-auto lg:h-[28rem] lg:mx-6 weather-div lg:p-8 lg:space-y-4  ">
      <div className=" hidden lg:flex lg:justify-between my-3 ">
        <div className=" bg-white rounded-[.875rem] font-[500] p-2 text-black ">
          Weather Advisor
        </div>
        <div>
          <a href="#">More Details</a>
        </div>
      </div>
      <div className="flex flex-row space-x-4 lg:space-x-10 justify-start my-3 p-3 scroll-container lg:overflow-hidden ">
        {days.slice(1,7).map((day, index) => {
          const myDate = new Date(day.datetime);
          const dayOfWeek = myDate.getDay();
          const daysList = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const monthsList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          const correspondingDay = daysList[dayOfWeek];
          const correspondingMonth = monthsList[myDate.getMonth()];
          const data = `${myDate.getDate()} ${correspondingMonth}`;
          return (
            <div className=" lg:h-[17rem] bg-[#1B1C1E] rounded-[1.875rem] p-5 flex flex-col h-full justify-center space-y-4 carousel-item">
              <div className="text-white text-[1.45rem]">{data}</div>
              <div className=" text-[1.25rem] text-[#919192] text-center ">
                {correspondingDay}
              </div>
              <img
                src={getWeatherIconPath(day.icon)}
                alt="weather icon"
                className=" w-[3rem] h-[3rem] mx-auto"
              ></img>
              <div className="text-center text-[2rem]">{day.temp}°C</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastCards;
