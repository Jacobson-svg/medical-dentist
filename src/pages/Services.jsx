import React from "react";
import DentalCare from "../components/DentalCare";
import Header from "../components/Header";
import dentalCareArray from "../components/dentalCareArray";
import Location from "../components/Location";
import Footer from "../components/Footer";
import QuickActionCard from "../components/QuickActionCard";



export default function Services(){

    const dentalCareElements = dentalCareArray.map(item => (
        <DentalCare
            key={item.id}
            img={item.img}
            text={item.text}
        />
    ))

    return(
        <>
            <Header />

            <section className="pt-[220px] max-lg:pt-[120px] max-lg:px-[16px] px-[40px] ">

                <div className="py-[96px] max-md:py-0 max-xl:py-[44px] px-[24px] max-md:px-[0] font-medium ">
                    <div className="mb-[24px] flex flex-col ">
                        <p className="">Services</p>
                        <h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] max-md:mb-[12px] w-[40%] max-md:w-full">We guarantee high quality dental care</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center grid-rows-auto  items-center gap-[12px] ">
                        {dentalCareElements}
                        {dentalCareElements}
                    </div>
                </div>

                <div className="px-[24px] max-lg:px-[16px] max-md:px-0 pt-[72px] pb-[24px] font-medium flex max-md:flex-col justify-between space-x-4 ">
                    <div className="w-4/12 max-md:w-full max-md:mb-[16px] "><p>History of medical</p></div>
                    <div className="w-8/12 max-md:w-full "><h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] ">With over 20 years of experience, Medical is committed to making high-quality dental care accessible and affordable for everyone. With multiple convenient locations, we make it easy for you to prioritize your dental health and receive the exceptional care you deserve, all with peace of mind and trusted expertise you can rely on. </h1></div>
                </div>

                <div>
                    <Location />
                </div>

                <div className="mt-5 mb-15">
                    <QuickActionCard />
                </div>
            </section>

            <Footer />

        </>
    )
}