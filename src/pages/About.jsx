import React from "react";
import { motion } from "framer-motion";
import Cards from "../components/Cards";
import doctorData from "../components/doctorData"
import Header from "../components/Header";
import OurStats from "../components/OurStats";
import Location from "../components/Location";
import Footer from "../components/Footer";
import QuickActionCard from "../components/QuickActionCard";
import dental_office from "../assets/images/dental_office.png"



export default function About(){

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
                <div className="flex justify-between mb-[36px]">
                    <div>
                        <p className="font-medium mb-[12px]">About us</p>
                        <h1 className="font-medium text-[64px] max-xl:text-[48px] max-lg:text-[38px] max-md:text-[27px] ">Meet the experts</h1>
                        <h1 className="font-medium text-[64px] max-xl:text-[48px] max-lg:text-[38px] max-md:text-[27px] ">behind Medical</h1>
                    </div>
                </div>

                <div className="flex gap-[24px] max-xl:flex-col ">
                    <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[24px]">
                        {cardElements}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="px-[24px] max-lg:px-[16px] max-md:px-0 pt-[72px] pb-[24px] font-medium flex max-md:flex-col justify-between space-x-4 "
                >
                    <div className="w-4/12 max-md:w-full max-md:mb-[16px] "><p>History of medical</p></div>
                    <div className="w-8/12 max-md:w-full "><h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] ">At Medical, your comfort and comprehensive dental care are our top priorities. We believe dental visits should be stress-free and focused on your well-being. </h1></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="relative px-24px bg-linear-to-143 from-[#545454] to-[#000] "
                >
                    <img 
                        className="h-[560px] rounded-[12px] w-full object-cover brightness-[60%] "
                        src={dental_office}
                        alt="Dental office" 
                    />
                    <div className="absolute flex jsutify-between bottom-0 text-white px-[24px] max-md:px-0 py-[24px] ">
                        <div className="w-4/12 max-lg:w-2/12 max-md:hidden"></div>
                        <div className="w-8/12 max-lg:w-10/12 max-md:w-full">
                            <h1 className="text-[20px] max-lg:text-[16px] p-[16px] max-md:mb-6 font-medium ">
                                At Medical, we are committed to making high-quality dental care accessible and affordable for everyone. 
                                That’s why we proudly work with all major insurance networks, helping to maximize your benefits and minimize out-of-pocket costs. 
                                Our knowledgeable team is here to assist you with any insurance-related questions, making the process as seamless as possible so you can focus on your dental health with peace of mind.
                            </h1>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="pt-[82px]"
                >
                    <p className="ml-[24px]">By the numbers</p>
                    <OurStats />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >
                    <Location />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="mt-8 mb-15"
                >
                    <QuickActionCard />
                </motion.div>
            </section>


            <Footer />

        </>
    )
}