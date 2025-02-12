
import React from "react";
import LocationCard from "./LocationCard";
import locationData from "./locationData"


export default function Location(){

    let position = "absolute top-0"

    const location = React.useRef(null)
    const locationPos = React.useRef(null)


    React.useEffect(()=>{
        // console.log(locationPos.current.getBoundingClientRect().top)
        if(locationPos.current.getBoundingClientRect().top < 136 && locationPos.current.getBoundingClientRect().top > -216){
            position = "fixed top-[135px] left-0 px-[94px]"
        }else if(locationPos.current.getBoundingClientRect().top > 136){
            position = "absolute top-0"
        }else if(locationPos.current.getBoundingClientRect().top < -216){
            position = "absolute bottom-0"
        }
    }, [])

    const locationElts = locationData.map(item => (
        <LocationCard
            key={item.id}
            town={item.town}
            address={item.address}
        />
    ))

    return(
        <>
            <section className="mx-[40px] max-lg:mx-0 p-[24px]  max-md:py-[24px] max-md:px-0 pt-[96px] max-md:pt-[44px] font-medium ">
                <div className="mb-[24px] flex max-md:flex-col max-md:items-start justify-between items-end ">
                    <h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] max-md:mb-[12px] w-[30%] max-xl:w-[35%] max-md:w-full ">Find the right location for you</h1>
                    <p className="">More about locations</p>
                </div>

                <div className="relative w-full">
                    <div className=" w-full">
                        <img 
                            className="h-[560px]  rounded-[12px] w-full object-cover brightness-[60%] "
                            src="https://framerusercontent.com/images/6B7I7qrqo9zPRHL2LXBnxvUIDY.png" 
                            alt="Dental office" 
                        />

                    </div>

                    <div className="">
                        <div ref={locationPos} className="location absolute top-[0] p-[24px] "></div>
                        <div ref={location} className={`p-[24px] w-full ${position} flex max-md:flex-col justify-center gap-[36px] max-lg:gap-[20px] `}>                            
                            {locationElts}
                        </div>
                    </div>

                </div>
                
            </section>
        </>
    )
}