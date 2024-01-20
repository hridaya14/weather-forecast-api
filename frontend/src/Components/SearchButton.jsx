import { useRef, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { filteredCities, suggestionState } from "../Atoms/suggestion";
import { locationState } from "../Atoms/location";

const SearchButton = () => {
  const [isFocussed, setIsFocussed] = useState(false);
  const setSuggestion = useSetRecoilState(suggestionState);
  const suggestion = useRecoilValue(suggestionState);
  const cityList = useRecoilValue(filteredCities);
  const setLocation = useSetRecoilState(locationState);

  const getClosestMatch = (suggestion, cityList) => {
    const match = cityList.filter(city => city.toLowerCase().includes(suggestion.toLowerCase(suggestion)));
    const matchList = match[0];
    return matchList;
  }

  const handleSubmit = () => {
    const city = getClosestMatch(suggestion, cityList);
    setLocation(city);
    setIsFocussed(false);
  };

  const handleCityClick = (city) => {
    setLocation(city);
    setSuggestion(city); 
    setIsFocussed(false);
  }

  const handleFocus = () => {
    setIsFocussed(true);
  };
  const handleBlur = () => {
    setIsFocussed(false);
  };
  return (
    <div className="relative w-[70%] max-w-[35rem] my-8 lg:w-[25rem]  rounded-[15px]">
      <div className="flex items-center justify-center w-full ">
        <input
          type="text"
          placeholder="Search Location"
          className={`bg-[#1A1B1D] rounded-tl-[15px]  h-[60px] pl-5 w-3/4 border-none ${!isFocussed ? "rounded-bl-[15px]" : ""}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            setSuggestion(e.target.value);
          }}
        />
        <button
          className={
            `bg-[#1A1B1D] rounded-tr-[15px] h-[60px] pr-3 w-1/4 flex justify-end items-center border-none ${!isFocussed ? "rounded-br-[15px]" : ""}}`
          }
          onClick = {() => {handleSubmit()}}
        >
          <img src="/searchbutton.png" alt="Search" />
        </button>
      </div>
      
      {isFocussed && (
        <div className=" absolute rounded-bl-[15px] rounded-br-[15px] \ bg-[#1A1B1D] z-10 mb-2 w-full">
          <ul className="pl-4 py-2 text-[#919192] text-lg font-bold overflow-y-scroll space-x-2 h-36 justify-start">
            {cityList.map((city,index) => {return <li key={index} className="cursor-pointer hover:text-white" onClick={() => handleCityClick(city)}>{city}</li>})}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchButton;
