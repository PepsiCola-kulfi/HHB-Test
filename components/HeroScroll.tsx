"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import YieldCalculator from "./YeildCalulator";
import { AnimatedShinyTextDemo } from "./AmarBhaloLage";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <> 
             
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                CORE <span className="text-orange-500 ">DAO</span>
              </span>
            </h1>
          </>
        }
      >
        <YieldCalculator/>
        {/* <Image
          src=<YieldCalculator/>
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
      </ContainerScroll>
    </div>
  );
}
