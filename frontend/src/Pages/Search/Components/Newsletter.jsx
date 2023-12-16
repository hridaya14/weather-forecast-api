
const Newsletter = () => {
    return (
        <div className=" hidden news relative flex-col  justify-center">
                <img src = "/subscribe.png" className = "w-[14rem]"></img>

                <div className=" w-[14rem] h-[10rem] subscribe-div text-left newsletter flex flex-col justify-start">
                    <div className="flex flex-row mx-auto">
                        <div>
                            <h3>Stay Ahead of the</h3>
                            <h3>Weather!</h3>
                            <h3>Subscribe to our</h3>
                            <h3>Newsletter</h3>
                        </div>
                        <div className=" flex flex-col justify-end">
                            <img src = "/arrow.png"></img>
                        </div>
                    </div>
                    
                </div>
                
        </div>
    )
}   

export default Newsletter;