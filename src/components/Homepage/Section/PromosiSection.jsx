import React from "react";
import Diskon from "../../../assets/diskon.svg";
import FreeTrial from "../../../assets/free-trial.svg";
import "../../../index.css";

const PromosiSection = ({ matches }) => {
  const message = "Halo, saya mau nanya soal paket les di Bob's Private"
  const phoneNumber = "+628812518233"

    const handleWhatsappMessage = () => {
        window.open('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message));
    }

  return (
    <div className="mt-40">
      {matches ? (
        <div className="bg-promo-mobile pt-5">
          <h2 className="text-[22px] font-bold text-center text-white">
            Khusus private online registrasi dan biaya bimbingan.
          </h2>
          <div className="grid grid-cols-1 justify-items-center gap-y-10 mt-10">
            <div className="relative">
              <div className="justify-center absolute top-0 inset-1">
                <img src={Diskon} alt="diskon" className="mx-auto" />
              </div>
              <div className="text-center bg-gradient-to-b mt-12 rounded-md text-white p-5 space-y-2 from-blue-500 to-cyan-300">
                <p className="font-medium">Dapatkan diskon</p>
                <p className="font-bold text-[26px]">50%</p>
              </div>
            </div>
            <div className="relative">
              <div className="justify-center absolute top-0 inset-1">
                <img src={FreeTrial} alt="diskon" className="mx-auto" />
              </div>
              <div className="text-center bg-gradient-to-b mt-14 rounded-md text-white p-5 space-y-2 from-blue-500 to-cyan-300 w-[55%] mx-auto">
                <p className="font-medium w-[90%] mx-auto">
                  Khusus private online bisa free trial.
                </p>
              </div>
            </div>
          </div>
            <button id="contact" onClick={handleWhatsappMessage} className="bg-[#F59300] py-2.5 rounded-full flex mx-auto text-center mt-12 text-white shadow-lg px-5 font-semibold">
              Pesan Sekarang
            </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PromosiSection;
