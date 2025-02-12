
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../components/Header"
import Footer from "../components/Footer"
import OurStats from "../components/OurStats"
import BookAppointmentBtn from "../components/ui/BookAppointmentBtn"
import ViewServicesBtn from "../components/ui/ViewServicesBtn"
import Cards from "../components/Cards"
import doctorData from "../components/doctorData"
import dentalCareArray from "../components/dentalCareArray";
import HomeContact from "../components/HomeContact";

import svg1 from "../assets/icons/svg1.png"
import svg2 from "../assets/icons/svg2.png"
import svg3 from "../assets/icons/svg3.png"
import svg4 from "../assets/icons/svg4.png"
import svg5 from "../assets/icons/svg5.png"
import DentalCare from "../components/DentalCare"
import FeedBacks from "../components/FeedBacks"
import LocationCard from "../components/LocationCard";
import Input from "../components/Input";
import Contact from "../components/Contact";
import Location from "../components/Location";


export default function Home(){


    const dentalCareElements = dentalCareArray.map(item => (
        <DentalCare
            defClass={""}
            key={item.id}
            img={item.img}
            text={item.text}
        />
    ))

    const contactElements = HomeContact.map(item => (
        <Input
            key={item.d}
            select={item.select}
            label={item.label}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            option1={item.option1}
            option2={item.option2}
            option3={item.option3}
            defClass={"w-full"}
        />
    ))

    const cardElements = doctorData.map(item => (
        <Cards
            key={item.id}
            img={item.img}
            name={item.name}
        />
    ))



    return(
        <>
            <Header />
            
            <section className="pt-[220px] max-lg:pt-[120px] max-lg:px-[16px] px-[40px] ">
                <div className="mx-[24px] max-lg:mx-[16px] max-md:mx-0 ">
                    <div className="flex justify-between mb-[36px] max-md:flex-col ">
                        <div>
                            <p className="font-medium mb-[12px]">Welcome at Medical</p>
                            <h1 className="font-medium text-[64px] max-xl:text-[48px] max-lg:text-[38px] max-md:text-[27px] ">Dentistry for</h1>
                            <h1 className="font-medium text-[64px] max-xl:text-[48px] max-lg:text-[38px] max-md:text-[27px] ">the whole family</h1>
                        </div>
                        <div className="flex max-md:flex-col max-md:items-center items-end space-x-3 max-md:space-x-0 ">
                            <div className="max-md:my-[8px] max-md:w-full"><BookAppointmentBtn defClass="max-md:w-full " /></div>
                            <div className="max-md:w-full"><ViewServicesBtn defClass="max-md:w-full " /> </div>
                        </div>  
                    </div>

                    <div className="">
                        <img 
                            className="object-cover w-full max-md:aspect-13/16 rounded-[12px] "
                            src="https://framerusercontent.com/images/s9KFUNke6s3gTRLi8zKcXVfCmI.png" 
                            alt="Man brushing his white teeth" 
                        />
                    </div>
                </div>

                <div className="px-[24px] max-lg:px-[16px] max-md:px-0 pt-[72px] pb-[24px] font-medium flex max-md:flex-col justify-between space-x-4 ">
                    <div className="w-4/12 max-md:w-full max-md:mb-[16px] "><p>About</p></div>
                    <div className="w-8/12 max-md:w-full "><h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] ">At Medical, your comfort and comprehensive dental care are our top priorities. We believe dental visits should be stress-free and focused on your well-being. </h1></div>
                </div>

                <OurStats />

                <div className="py-[96px] max-xl:py-[24px] px-[24px] max-md:px-0 flex max-xl:flex-col justify-between space-x-[12px] relative ">
                    <div className="font-medium w-4/12 max-xl:w-full h-fit sticky">
                        <h1 className="text-[42px] max-xl:text-[34px] ">Meet our expert team</h1>
                        <p>Learn more</p>
                    </div>

                    <div className="w-8/12 max-xl:w-full flex max-md:flex-col space-x-[12px] max-md:space-x-0 max-xl:mt-[24px] ">
                        <div className="max-md:mb-6 w-full">
                            {cardElements[0]}
                        </div>

                        <div className="max-md:mb-6 w-full">
                            {cardElements[1]}
                        </div>
                    </div>
                </div>
                
                {/* <div className="py-[96px] px-[24px] flex justify-between space-x-[12px] ">
                    <div className="font-medium w-4/12">
                        <h1 className="text-[42px] ">Meet our expert team</h1>
                        <p>Learn more</p>
                    </div>

                    <div className="w-8/12 flex space-x-[12px]">
                        <div className="">
                            {cardElements[0]}
                        </div>

                        <div className="">
                            {cardElements[1]}
                        </div>
                    </div>
                </div> */}

                <div className="relative px-24px bg-linear-to-143 from-[#545454] to-[#000] ">
                    <img 
                        className="h-[560px] rounded-[12px] w-full object-cover brightness-[60%] "
                        src="https://framerusercontent.com/images/6aQrMytNW316GF4kU5RE5szv5JE.png" 
                        alt="Dental office" 
                    />
                    <div className="absolute flex max-md:flex-col max-md:items-center justify-between w-full bottom-0 text-white px-[24px] py-[24px] ">
                        <div><h1 className="text-[28px] max-md:mb-6 font-medium ">We partner with all major insurance networks</h1></div>
                        <div className="flex justify-between w-11/12 max-md:w-full">
                            <div className=""><img className="max-xl:w-[60px] " src={svg1} alt="icons" /></div>
                            <div className=""><img className="max-xl:w-[60px] " src={svg2} alt="icons" /></div>
                            <div className=""><img className="max-xl:w-[60px] " src={svg3} alt="icons" /></div>
                            <div className=""><img className="max-xl:w-[60px] " src={svg4} alt="icons" /></div>
                            <div className=""><img className="max-xl:w-[60px] " src={svg5} alt="icons" /></div>
                        </div>
                    </div>
                </div>

                <div className="p-[24px] pt-[48px] flex max-md:flex-col justfy-between gap-[36px] text-[#00000080] font-medium ">
                    <p className="w-4/12 max-md:w-full "></p>
                    <p className="w-4/12 max-md:w-full ">At Medical, your comfort and comprehensive dental care are our top priorities. We believe dental visits should be stress-free and focused on your well-being. Our team is dedicated to making every visit as comfortable as possible, so you can leave feeling confident about your oral health and smile.</p>
                    <p className="w-4/12 max-md:w-full ">We are committed to making high-quality dental care accessible and affordable for everyone. That’s why we proudly work with all major insurance networks, helping to maximize your benefits and minimize out-of-pocket costs. Our knowledgeable team is here to assist you with any insurance-related questions, making the process as seamless as possible so you can focus on your dental health with peace of mind.</p>
                </div>

                <div className="py-[96px] max-xl:py-[44px] px-[24px] max-md:px-[0] font-medium ">
                    <div className="mb-[24px] flex max-md:flex-col max-md:items-start justify-between items-end ">
                        <h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] max-md:mb-[12px] w-[40%] max-md:w-full">We guarantee high quality dental care</h1>
                        <p className="">View all services</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] ">
                        {dentalCareElements}
                    </div>
                </div>

            </section>

            <section className="py-[96px] max-md:py-[44px] font-medium ">
                <div className="px-[64px] max-lg:px-[44px] max-md:px-[24px] mb-[24px] ">
                    <h1 className="text-[34px] max-xl:text-[28px] max-md:text-[24px] ">Real experiences</h1>
                    <h1 className="text-[34px] max-xl:text-[28px] max-md:text-[24px] ">& stories from our patients </h1>
                </div>

                <div className="flex max-md:flex-col max-md:px-[16px] gap-[12px] justify-center overflow-auto">
                    <FeedBacks />
                    <FeedBacks />
                    <FeedBacks />
                </div>
            </section>

            <div className="max-md:px-[16px] ">
                <Location />
            </div>

            <section className="mx-[40px] max-lg:mx-[16px] max-md:mx-0 px-[24px] max-lg:px-  max-md:px-[24px] py-[96px] flex max-md:flex-col justify-between gap-[48px]  font-medium ">
                <div className="w-6/12 max-md:w-full ">
                    <div>
                        <h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] mb-[10px] ">We are here to help.</h1>
                        <p className="text-[#00000080] mb-[10px] ">Please fill out the form below to contact our team.</p>
                    </div>

                    <form className="mt-[48px]">
                        <div>
                            <div>{contactElements[0]}</div>
                            <div>{contactElements[1]}</div>
                            <div className="flex max-sm:flex-col max-sm:gap-0 gap-[8px] ">
                                <div className="w-full">{contactElements[2]}</div>
                                <div className="w-full">{contactElements[3]}</div>
                            </div>
                        </div>

                        <div className="flex gap-[8px] items-center">
                            <p className="text-[11px] text-[#00000080] w-full ">By sending, you confirm that you are familiar with the processing of personal data</p>
                            <button className="bg-[#095950] hover:bg-[#333333c7] transition transition-discete duration-200 rounded-[6px] w-full font-medium text-white py-[12px] px-[24px] cursor-pointer ">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="w-5/12 max-lg:w-6/12  max-md:w-full">
                    <Contact />
                    <Contact />
                    <Contact />
                </div>
            </section>

            <Footer />
            
        </>
    )
}