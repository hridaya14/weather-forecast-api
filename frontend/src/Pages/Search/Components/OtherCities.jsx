import CityCard from "./CityCard";
const OtherCities = () => {
    return(
        <div className=" space-y-4 lg:space-x-0">
            <div className="flex flex-row justify-between">
                <div className="text-white text-[1.5rem] mx-6 font-[700]">
                    Other Cities
                </div>
                <div className=" font-[700] text-center pt-2 bg-[#333] rounded-[1.875rem] w-[5.7rem] h-[2.12rem] text-[0.687rem] text-[#D1D1E3]">
                    Show all
                </div>
                
                
            </div>

            <div className=" flex lg:justify-start xl:justify-center">            
            <div className=" noscroll grid md:w-auto grid-flow-col overflow-x-scroll lg:overflow-visible lg:grid-rows-2 lg:grid-cols-[1fr,1fr] gap-5 lg:p-2 mx-6  ">
                <CityCard name="New York, US" icon="/sunrise.svg" condition="Mostly Sunny" temp="25° C"/>
                <CityCard name="New York, US" icon="sunrise.svg" condition="Mostly Sunny" temp="25° C"/>
                <CityCard name="New York, US" icon="sunrise.svg" condition="Mostly Sunny" temp="25° C"/>
                <CityCard name="New York, US" icon="sunrise.svg" condition="Mostly Sunny" temp="25° C"/>
            </div>
            </div>
        </div>
    )
}

export default OtherCities;