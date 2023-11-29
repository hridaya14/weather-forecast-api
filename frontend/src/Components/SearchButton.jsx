import { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { filteredCities, suggestionState } from "../Atoms/suggestion";

const SearchButton = () => {
  const [isFocussed, setIsFocussed] = useState(false);
  const setSuggestion = useSetRecoilState(suggestionState);
  const cityList = useRecoilValue(filteredCities);

  const handleFocus = () => {
    setIsFocussed(true);
  };
  const handleBlur = () => {
    setIsFocussed(false);
  };
  return (
    <div className="relative my-8">
      <div className="flex items-center md:w-[400px] mx-12">
        <input
          type="text"
          placeholder="Search Location"
          className="bg-[#1A1B1D] rounded-tl-[15px] rounded-bl-[15px] h-[60px] w-full pl-5"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            setSuggestion(e.target.value);
          }}
        />
        <button
          className={
            "bg-[#1A1B1D] rounded-tr-[15px] rounded-br-[15px] h-[60px] pr-3"
          }
        >
          <img src="/searchbutton.png" alt="Search" />
        </button>
      </div>
      {isFocussed && (
        <div className="absolute rounded-bl-[15px] rounded-br-[15px] \ bg-[#1A1B1D] mx-12 w-[400px] overflow-hidden z-10 mb-2">
          <ul className="pl-5 py-2 text-[#FFB800] text-lg font-bold overflow-y-scroll h-36">
            {cityList.map((city) => {
              return <li>{city}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchButton;
