import { useRecoilValue } from "recoil";
import { forecastWeatherState } from "../../../Atoms/location";
import { getWeatherIconPath } from "../../../Atoms/location";


const ForecastCards = () => {
  const forecast = useRecoilValue(forecastWeatherState);
  const days = forecast.days;

  return (
    <div className=" mx-auto lg:h-[25rem] my-6 lg:my-0 lg:mx-6 weather-div lg:p-8 lg:space-y-4 forecast ">
      <div className=" text-left text-[1.75rem] mx-4 lg:hidden">Weather Advisor</div>
      <div className=" hidden lg:flex lg:justify-between my-3 ">
        <div className=" bg-white rounded-[1.875rem] font-[500] p-2 text-black ">
          Weather Advisor
        </div>
        <div>
          <a href="#">More Details</a>
        </div>
      </div>
      <div className=" flex flex-row overflow-x-scroll gap-6 snap-x snap-mandatory">
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
            <div className=" lg:h-[17rem] bg-[#1B1C1E] rounded-[1.875rem]  2xl:min-w-[11rem]  max-w-[15rem] p-4 flex flex-col h-full justify-center space-y-4 flex-shrink-0 snap-start forecast_card">
              <div className="text-white text-[1.45rem] text-center">{data}</div>
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
