import React from 'react'
import BgHeroSection from "../../../assets/bg-herosection.webp";
import Patern from "../../../assets/patern.svg";

const herosection = {
    title: "Les privat terbaik dengan instruktur terbaik.",
    content:
      "Request kebutuhan guru les private di Jakarta untuk online /offline (guru datang ke rumahmu). Dengan kemampuan yang mumpuni di bidangnya, berkomitmen memiliki integritas yang tinggi, serta profesional.",
  };

const HeroSection = ({matches}) => {
  return (
    <div id="about">
        {matches ? (
        <div className=" relative block bg-gradient-to-r from-[#0066FF] to-[#61CCFA] w-screen h-screen px-5 pt-20 mt-12">
          <div className="-mt-10">
            <img src={Patern} alt="pattern" className="w-10" />
            <h1 className="font-bold text-white text-[35px]">
              {herosection.title}
            </h1>
            <p className="text-white text-[14px]">{herosection.content}</p>
          </div>
          <img
            src={BgHeroSection}
            alt="bg-hero"
            className="absolute bottom-0 w-[92%] mx-auto"
          />
        </div>
      ) : (
        <div className=" relative bg-gradient-to-r from-blue-500 to-cyan-500 w-screen h-[80vh] pt-52 px-24">
          <div className="absolute bottom-0 flex">
            <div className="-mt-20">
              <img src={Patern} alt="bg-hero-section" />
              <h1 className="mt-10 font-bold text-white">
                {herosection.title}
              </h1>
              <p className="w-[85%] text-white pb-5">{herosection.content}</p>
              <button className="bg-[#F59300] py-2.5 rounded-full text-white shadow-lg px-5">
                Contact Us
              </button>
            </div>
            <img
              src={BgHeroSection}
              alt="bg-hero-section"
              className="w-[40%] mr-40"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSection