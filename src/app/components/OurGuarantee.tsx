import React from "react";
import Image from "next/image";
import { Apartment } from "@/app/images";

const OurGuarantee = () => {
  return (
    <div className="flex flex-col w-full h-[835px] gap-y-3 mb-10">
      <div className="flex items-center justify-between px-[155px] w-full">
        <div className="w-[565px] h-96">
          <Image src={Apartment} className="object-cover w-full h-full" alt="" />
        </div>
        <div className="flex items-center justify-center flex-col w-[620px] h-96">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <span>Guarantee</span>
              <span className="text-5xl">Our Guarantee</span>
            </div>
            <div className="flex flex-col font-thin">
              <span>We provide best services with guarantee. We are the best realtor in</span>
              <span>country and always bring best option for our customer or clients. We</span>
              <span>never compromise on guarantee. Lorem ipsum dolor sit amet,</span>
              <span>consectetur adipiscing elit, sed do eiusmod tempor.</span>
            </div>
            <button type="button" className="bg-red-600 text-white px-8 py-3 w-48">Explore</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-[155px] w-full">
        <div className="flex justify-center flex-col h-96">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <span>Guarantee</span>
              <span className="text-5xl">Our Guarantee</span>
            </div>
            <div className="flex flex-col font-thin">
              <span>We provide best services with guarantee. We are the best realtor in</span>
              <span>country and always bring best option for our customer or clients. We</span>
              <span>never compromise on guarantee. Lorem ipsum dolor sit amet,</span>
              <span>consectetur adipiscing elit, sed do eiusmod tempor.</span>
            </div>
            <button type="button" className="bg-red-600 text-white px-8 py-3 w-48">Explore</button>
          </div>
        </div>
        <div className="w-[549px] h-96">
          <Image src={Apartment} className="object-cover w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurGuarantee;