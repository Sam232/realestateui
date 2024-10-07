import React from "react";
import Image from "next/image";
import {Apartment} from "@/app/images";
import { BsArrow90DegUp, BsArrowUpRight } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full h-[500px] gap-y-3">
      <div className="flex items-center justify-between px-[155px] w-full">
        <div className="relative">
            <div className="w-[475px] h-[413px]">
                <Image src={Apartment} className="object-cover w-full h-full" alt="" />
            </div>
            <div className="flex items-center justify-center absolute w-full -top-12">
                <div className="flex flex-col w-48 h-48 bg-white border-[1px] p-5">
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold">40,000+</span>
                        <span><BsArrowUpRight/></span>
                    </div>
                    <span className="text-[12px] font-thin">By average for 2 bedroom</span>
                    <span className="text-[12px] font-thin">apartments in Accra</span>
                    <hr className="mt-5"/>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center flex-col w-[550px] h-96">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3">
              <span>About Us</span>
              <span className="text-5xl">Our Process</span>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="text-xl font-bold">1. Choose your type</span>
              <div className="font-thin">
                <span>Exponent is a pixel perfect theme, that is tailor made for startups and</span>
                <span>businesses. Build your website swiftly</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="text-xl font-bold">2. See the property directly</span>
              <div className="font-thin">
                <span>Exponent is a pixel perfect theme, that is tailor made for startups and</span>
                <span>businesses. Build your website swiftly</span>
              </div>
            </div>
            <button type="button" className="bg-red-600 text-white px-8 py-3 w-48">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
