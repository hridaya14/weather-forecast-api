
const MobileNavbar = () => {
    return(
        <div className=" absolute right-6 top-24 lg:hidden searchRec2 mobileNav bg-opacity-20">
            <div className=" h-full flex flex-col justify-around">
                <div className="flex flex-col space-y-8 items-center">
                    <a href = "/"> <img src = "/Logo.svg"></img></a>
                    <a href = "/"> <img src = "/search.png"></img></a>
                </div>
                <div className=" flex flex-col space-y-12 h-1/2  items-center">
                    <a href = "/"> <img src = "/home.png"></img></a>
                    <a href = "/"> <img src = "/stats.png"></img></a>
                    <a href = "/"> <img src = "/globe.png"></img></a>
                    <a href = "/"> <img src = "/sports.png"></img></a>
                </div>
                <div className=" flex flex-col items-center space-y-8">
                    <a href = "/"> <img src = "/settings.png"></img></a>
                    <a href = "/"> <img src = "/exit.png" className="w-[30px] h-[30px]"></img></a>
                </div>
            </div>
        </div>
    )
}
export default MobileNavbar;