import SearchButton from "./SearchButton";
const Header = () => {
    return(
        <div className=" flex flex-col md:flex-row md:justify-between md:align-middle md:w-full">
            <div className="flex justify-between items-center">
                <div className="flex p-10">
                    <img src = "/avatar.png" className="hidden md:inline-block h-14"></img>
                    <div className=" pl-2 md:pl-4">
                        <div className=" text-white font-thin text-sm  md:text-lg">Howdy,</div>
                        <div className=" text-white font-bold text-base md:text-xl ">Pearl Harbour</div>
                    </div>
                </div>
                <img src = "/Notifications.png" className="h-[48px] w-[48px] mr-12 md:hidden"></img>
                            
            </div>
            
            <SearchButton />
        </div>
    )
}


export default Header;