import CityCard from "./CityCard";
const OtherCities = () => {
    return(
        <div className="space-y-4 lg:space-x-0">
            <div className="flex flex-row justify-between">
                <div className="text-white text-[1.5rem] mx-6">
                    Other Cities
                </div>

                <div className="rounded-[1.875rem]">
                    Show all
                </div>
            </div>
            <div className="grid w-[20rem] md:w-auto lg:w-auto grid-flow-col overflow-x-scroll lg:overflow-visible lg:grid-cols-2 lg:grid-rows-2 gap-5 lg:p-2 mx-6 ">
                <CityCard name="New York, US" icon="/sunrise.svg" condition="Mostly Sunny" temp="25° C"/>
                <CityCard name="New York, US" icon="sunrise.svg" condition="Mostly Sunny" temp="25° C"/>
                <CityCard name="New York, US" icon="sunrise.svg" condition="Mostly Sunny" temp="25° C"/>
                <CityCard name="New York, US" icon="sunrise.svg" condition="Mostly Sunny" temp="25° C"/>

            </div>
        </div>
    )
}

export default OtherCities;