import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Apartment} from "@/app/images";

const OurProperties = () => {
  return (
    <div className="flex flex-col w-full h-[684px] px-[120px] py-10 gap-y-14 ring-offset-purple-400 mb-8">
        <div className="flex flex-col justify-center w-full h-64 gap-y-14">
            <div className="flex flex-col gap-y-3">
                <span className="text-sm">Our Properties</span>
                <span className="text-5xl font-semibold">Our Properties</span>
            </div>
            <div className="flex items-center justify-between">
                <span>Better Homes & Gardens encourages its clients to expect more from the realtor<br/>
                    and promises they are up to the challenge
                </span>
                <button className="bg-red-600 font-bold text-white px-8 py-3">Explore</button>
            </div>
        </div>
        <div className="flex flex-col w-full h-full gap-y-10">
            <div className="flex items-center justify-between w-full">
                <ul className="flex gap-x-8">
                    <li><Link href="#" className="text-zinc-500 hover:text-black">Popular</Link></li>
                    <li><Link href="#" className="text-zinc-500 hover:text-black">Private House</Link></li>
                    <li><Link href="#" className="text-zinc-500 hover:text-black">Executive Hotel</Link></li>
                    <li><Link href="" className="text-zinc-500 hover:text-black">Private Room</Link></li>
                    <li><Link href="" className="text-zinc-500 hover:text-black">Apartments</Link></li>
                </ul>
                <span className="font-semibold">Explore All</span>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[400px] h-54 hover:shadow-2xl">
                    <div className="relative">
                        <Image src={Apartment} className="w-full h-full object-cover" alt=""/>
                        <div className="flex items-center justify-center w-24 h-10 bg-red-600 absolute top-0 text-white">
                            <span>$30,000</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-28 p-5 gap-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold">Accra, Cantoment</span>
                            <span className="text-sm text-zinc-400 font-bold">GHANA</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-x-4">
                                <span className="text-sm text-zinc-400">4 Beds</span>
                                <span className="text-sm text-zinc-400">300 m</span>
                            </div>
                            <button type="button" className="bg-red-600 text-white px-8 py-3">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[400px] h-54 hover:shadow-2xl">
                    <div className="relative">
                        <Image src={Apartment} className="w-full h-full object-cover" alt=""/>
                        <div className="flex items-center justify-center w-24 h-10 bg-red-600 absolute top-0 text-white">
                            <span>$30,000</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-28 p-5 gap-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold">Accra, Villagio</span>
                            <span className="text-sm text-zinc-400 font-bold">GHANA</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-x-4">
                                <span className="text-sm text-zinc-400">4 Beds</span>
                                <span className="text-sm text-zinc-400">300 m</span>
                            </div>
                            <button type="button" className="bg-red-600 text-white px-8 py-3">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[400px] h-54 hover:shadow-2xl">
                    <div className="relative">
                        <Image src={Apartment} className="w-full h-full object-cover" alt=""/>
                        <div className="flex items-center justify-center w-24 h-10 bg-red-600 absolute top-0 text-white">
                            <span>$30,000</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-28 p-5 gap-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold">Accra, Trasaco</span>
                            <span className="text-sm text-zinc-400 font-bold">GHANA</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-x-4">
                                <span className="text-sm text-zinc-400">4 Beds</span>
                                <span className="text-sm text-zinc-400">300 m</span>
                            </div>
                            <button type="button" className="bg-red-600 text-white px-8 py-3">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurProperties;