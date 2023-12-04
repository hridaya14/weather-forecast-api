import SearchButton from "./SearchButton";
const Header = () => {
    return(
        <div className=" flex flex-col lg:flex-row lg:justify-between lg:align-middle">
            <div className="flex justify-between items-center">
                <div className="flex p-10">
                    <img src = "/avatar.png" className="hidden lg:inline-block h-14"></img>
                    <div className=" pl-2 md:pl-4">
                        <div className=" text-white font-thin text-[0.8rem]  md:text-lg">Howdy,</div>
                        <div className=" text-white font-bold text-[1.25rem] md:text-xl ">Pearl Harbour</div>
                    </div>
                </div>
                
                <img src = "/menu.png" className=" h-[2.2rem] w-[2.2rem] mr-12 lg:hidden"></img>
                            
            </div>
            <div className=" flex items-center justify-center mx-3 w-full lg:w-auto">
                <SearchButton/>
                <img src = "/Notifications.png" className=" h-[48px] w-[48px] mx-3"></img>
            </div>
        </div>
    )
}


export default Header;