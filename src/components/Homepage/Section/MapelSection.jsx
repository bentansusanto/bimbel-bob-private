import React from 'react'
import { ListMataPelajaran } from '../../../Data/ListMapel'

const MapelSection = ({matches}) => {
  return (
    <div className='mt-10' id='matapelajaran'>
        {
            matches? 
            (<div>
                <div>
                    <h2 className='text-[24px] font-bold text-center px-5'>Ada 15 mata pelajaran yang akan kami ajarkan</h2>
                    <div className='mt-5 grid grid-cols-2 gap-5 px-2'>
                      {
                        ListMataPelajaran.map((val, idx) => (
                          <div key={idx} className="relative">
                            <img src={val.foto} alt=""  className='brightness-50 h-24 w-full rounded-md'/>
                            <div className='absolute inset-0 px-2 flex justify-center items-center'>
                              <h4 className='text-[15px] text-center text-white font-bold'>{val.mapel}</h4>
                            </div>
                            {/* <img src={val.foto} alt='mapel' className='rounded-md brightness-50'/> */}
                          </div>
                        ))
                      }
                    </div>
                </div>
            </div>) : 
            // Desktop View
            (<div>Desktop View</div>)
        }
    </div>
  )
}

export default MapelSection