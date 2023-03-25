import React from 'react'
import { ListService } from '../../../Data/ListService'
import PaternService from "../../../assets/patten-service.svg";

const ServiceSection = ({matches}) => {
  return (
    <section className="mt-40 overflow-x-hidden" id="service">
      {matches ? (
        <div className="px-5 relative">
          <h2 className="text-[24px] font-bold text-center">
            Mengapa memilih les private di Bob’s Private?
          </h2>
          <div className="mt-10 space-y-5">
            {ListService.map((val, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <img src={require('../../../assets/'+val.icon)} alt="" />
                <h4 className="text-[18px] pt-2 pb-1 font-bold">
                  {val.service}
                </h4>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
          <div className="-ml-20">
            <img src={PaternService} alt="PaternService" className="w-[55%]" />
          </div>
        </div>
      ) : (
        <div>Service Desktop</div>
      )}
    </section>
  )
}

export default ServiceSection