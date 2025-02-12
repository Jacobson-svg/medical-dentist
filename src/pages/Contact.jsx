
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import Location from "../components/Location";
import QuickActionCard from "../components/QuickActionCard";


export default function Contact(){

    const contactArray = [
        {
            id:1,
            select: false,
            label: "First Name",
            type: "text",
            name: "fname",
            placeholder: "Jane"
        },

        {
            id:2,
            select: false,
            label: "Last Name",
            type: "text",
            name: "lname",
            placeholder: "Smith"
        },
    
        {
            id:3,
            select: false,
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "jane@medical.com"
        },
    
        {
            id:4,
            select: false,
            label: "Phone Number",
            type: "number",
            name: "number",
            placeholder: "+237"
        },
    
        {
            id:5,
            select: false,
            label: "Comment",
            type: "text",
            name: "comment",
            placeholder: "How can we help you ?"
        }
    
    ]

    const contactElements = contactArray.map(item => (
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
        />
    ))

    return(
        <>
            <Header />

            <section className="pt-[220px] pb-[96px] max-md:pb-[40px] max-lg:pt-[120px] max-lg:px-[16px] px-[40px] font-medium ">
                <div className="flex max-md:flex-col max-md:justify-start justify-between gap-[48px] max-md:gap-[24px] ">
                    <div className="w-4/12 max-md:w-full">
                        <p>Book an appointment</p>
                        <h1 className="text-[64px] max-xl:text-[48px] max-lg:text-[38px]  ">Covenient online booking</h1>
                    </div>

                    <div className="w-8/12 max-md:w-full">

                        <div>
                            <h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] mb-[10px] ">Contact Us.</h1>
                            <p className="text-[#00000080] mb-[10px] ">Please fill out the form below to contact our team.</p>
                        </div>

                        <form className="mt-[48px]">
                            <div>
                                <div className="flex justify-start max-sm:flex-col max-sm:gap-0 gap-[8px] ">
                                    <div className="w-full">{contactElements[0]}</div>
                                    <div className="w-full">{contactElements[1]}</div>
                                </div>
                                <div className="flex justify-start max-sm:flex-col max-sm:gap-0 gap-[8px] ">
                                    <div className="w-full">{contactElements[2]}</div>
                                    <div className="w-full">{contactElements[3]}</div>
                                </div>
                                <div>{contactElements[4]}</div>
                            </div>

                            <div className="flex gap-[8px] items-center">
                                <p className="text-[11px] text-[#00000080] w-full ">By sending, you confirm that you are familiar with the processing of personal data</p>
                                <button className="bg-[#095950] hover:bg-[#333333c7] transition transition-discete duration-200 rounded-[6px] w-full font-medium text-white py-[12px] px-[24px] cursor-pointer ">Submit</button>
                            </div>
                        </form>

                    </div>
                    
                </div>

                <div className="max-md:px-[16px] ">
                    <Location />
                </div>

                <div className="mt-5">
                    <QuickActionCard />
                </div>

            </section>

            <Footer />
        </>
    )
}