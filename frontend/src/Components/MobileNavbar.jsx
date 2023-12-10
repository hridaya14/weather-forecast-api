
const MobileNavbar = () => {
    return(
        <div className=" absolute right-6 top-24 lg:hidden searchRec2 mobileNav bg-opacity-20">
            <a href = "/" className=" p-2 my-4 ">
                <img src="/Logo.svg" className="h-[40px] w-[40px] "></img>
            </a>
            <a href = "/" className=" p-2 ">
                <img src="/search.png" className="h-[22px] w-[22px] my-10   "></img>
            </a>
        </div>
    )
}
export default MobileNavbar;