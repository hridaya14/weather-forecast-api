
const CityCard = ({name,icon,condition,temp})=> {
    return(
    <div className=" h-[8rem] card-bg  w-[16rem] lg:w-[20rem] flex flex-row justify-around">
        <div className="flex flex-col h-full justify-center space-y-2">
                <div className="text-[1.75rem] text-[#919192]">{name}</div>
                <div className=" text-[0.85rem]">{condition}</div>
        </div>
        <div className="flex flex-col h-full justify-center space-y-2 items-start" >
            <div><img src={icon} className=" h-[2rem] w-[2rem]"></img></div>
            <div className="text-[1.625rem]">{temp}</div>
        </div>
        
        
        
    </div>
    )
}

export default CityCard;