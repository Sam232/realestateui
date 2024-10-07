import React from "react";
import Container from "./Container";

const Experience = () => {
  return (
    <div className="flex items-center justify-between w-full h-96">
        <div className="flex items-center justify-center flex-col bg-red-600 w-full h-full">
            <div className="flex flex-col gap-y-10 text-white">
                <div className="flex flex-col">
                    <span className="text-sm">Experience</span>
                    <span className="text-5xl font-semibold">Our Experience</span>
                </div>
                <div>
                    <span className="text-sm">With 15 years of experience we are ready to help you. Exponent is pixel perfect theme,
                        that is tailor made for<br/>startups and businesses. Build your website swiftly
                    </span>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-y-3">
                        <span className="text-4xl">100+</span>
                        <span className="text-sm">Homes for sale</span>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <span className="text-4xl">1000+</span>
                        <span className="text-sm">Homes recently sold</span>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <span className="text-4xl">100+</span>
                        <span className="text-sm">Homes for sale</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-[290px] h-full bg-orange-100">
            <span className="-rotate-90 text-[20px] ">With 15 years of experience<br/>we are ready to help you</span>
        </div>
    </div>
  );
}

export default Experience;