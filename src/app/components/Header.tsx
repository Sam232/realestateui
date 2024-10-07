import React from "react";
import Image from "next/image";
import { Apartment } from "@/app/images";
import Container from "./Container";

const Header = () => {
  return (
    <div className="w-full h-[680px] relative">
      <Image className="object-cover w-full h-full" src={Apartment} alt=""/>
      <Container styles="absolute top-1 w-full h-full">
        <div className="flex flex-col text-white bg-white p-[70px] gap-y-4">
          <span className="text-sm text-blue-400">Your Dream Home Awaits</span>
          <span className="text-6xl font-semibold text-gray-800">Homes<br/>That Match</span>
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">Better Homes & Gardens encourages its client to expect more</span>
            <span className="text-sm text-gray-600">from their realtor and promises they're up to the challenge</span>
          </div>
          <div className="bg-gray-100 w-full h-16 p-2">
            <form action="" className="flex items-center justify-between gap-x-4">
              <input type="text" placeholder="28,000 properties found" className="bg-gray-100 text-black w-full ml-3" />
              <button type="button" className="bg-red-600 text-white px-8 py-3">Explore</button>
            </form>
          </div>
        </div>
        <div></div>
        <div></div>
      </Container>
      <div className="flex items-center justify-around w-full h-16 bg-white bg-gradient-to-t opacity-65 from-white-950 absolute bottom-0">
        <span>Trasaco</span>
        <span>Devtraco</span>
        <span>Villagio</span>
        <span>Signature</span>
        <span>Wonderland</span>
      </div>
    </div>
  );
}

export default Header;