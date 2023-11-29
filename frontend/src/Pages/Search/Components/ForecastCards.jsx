import { useRecoilValue } from "recoil";
import { forecastWeatherState } from "../../../Atoms/location";
import { getWeatherIconPath} from "../../../Atoms/location"
const ForecastCards = () => {
  const forecast = useRecoilValue(forecastWeatherState);
  return (
    <div className=" w-full lg:flex lg:justify-around ">
      {forecast.days.slice(0, 5).map((days)=> {
        return (
          <div className=" ">
            <div className=" text-[1.45rem] ">{days.datetime.substring(5,9)}</div>
            
          </div>
        )
      })}

    </div>
  );
};


export default ForecastCards;