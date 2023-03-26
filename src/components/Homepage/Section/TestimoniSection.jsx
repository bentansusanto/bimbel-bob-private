import React from "react";
import BgTestimoni from "../../../assets/bg-testimoni.svg";
import { listTestimoni } from "../../../Data/ListTestimoni";

const TestimoniSection = ({ matches }) => {


  return (
    <div className="mt-40 mb-20" id="testimoni">
      {matches ? (
        // Mobile View
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(125, 177, 255, 0.15) 0%, rgba(136, 255, 198, 0.1) 100%)",
          }}
          className="py-5"
        >
          <h2 className="text-[24px] text-center font-bold">
            Pengalaman mereka belajar di Bob’s Private
          </h2>
          <div className="grid grid-flow-col-dense gap-5 overflow-x-scroll scroll-smooth scrollbar-hide mx-5 mt-14">
            {listTestimoni.map((val, idx) => (
              <div
                key={idx}
                className="w-[20rem] justify-items-center relative"
              >
                <div className="absolute top-0 inset-1 items-center justify-center">
                  <img
                    src={require("../../../assets/" + val.image)}
                    alt={val.nama}
                    className="w-24 mx-auto"
                  />
                </div>
                <div className="-z-10 relative">
                  <img
                    src={BgTestimoni}
                    alt=""
                    className="mt-5 w-[85%] mx-auto h-[50vh]"
                  />
                  <div className="absolute inset-1 top-20 text-white justify-center text-center space-y-1 px-8">
                    <h4 className="font-bold">{val.nama}</h4>
                    <p className="font-semibold pb-3">{val.sekolah}</p>
                    <p className="text-[13px]">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop View
        <div>Desktop view</div>
      )}
    </div>
  );
};

export default TestimoniSection;
