import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo-bob.webp'
import { HashLink as Link } from 'react-router-hash-link';
import Whatsapp from '../../assets/icon-whatsapp.svg'

const mediaQuery = window.matchMedia('(max-width: 600px)');

const links = [
    {section : 'Home', link: '/'},
    {section : 'About Us', link: '/#about'},
    {section : 'Our Package', link: '/#package'},
    {section : 'Our Service', link: '/#service'},
    {section : 'Mata Pelajaran', link: '/#matapelajaran'},
    {section : 'Testimoni', link: '/#testimoni'}
]

const Footer = () => {
    const [matches, setMatches] = useState(mediaQuery.matches)
    const message = "Halo, saya mau nanya soal paket les di Bob's Private"
    const phoneNumber = "+628812518233"

    const handleWhatsappMessage = () => {
        window.open('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message));
    }

    useEffect(() => {
        const handler = (e) => {
            setMatches(e.matches)
        }

        mediaQuery.addEventListener('change', handler)

        return () => {
            mediaQuery.removeEventListener('change', handler)
        }
    }, [])
  return (
    <div className='mt-40'>
        {
            matches? 
            (<div className='bg-[#002050] p-5 text-white'>
                <div className='space-y-2'>
                    <img src={Logo} alt="logo-bob" className='w-20'/>
                    <h4 className='font-bold'>Bob's Private</h4>
                    <p>Bob’s Private adalah lembaga resmi & legal yang berada di bawah naungan PT.Gigih Bertumbuh Bersama yang juga menaungi brand Bimbel Prof.Excellent, Prof.Bob, KIPO & Bob’s Private</p>
                </div>
                <div className='grid grid-cols-2 gap-3 mt-10'>
                    <div>
                        <h4 className='font-bold'>QuickLink</h4>
                        <ul className='space-y-3 mt-4'>
                            {
                                links.map((val, idx) => (
                                    <li key={idx}>
                                        <Link smooth to={val.link}>{val.section}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='font-bold'>Contact Us</h4>
                        <p>Jl. Rengas Raya No.21, Rengas, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412 (Sebelah TK Kartini)</p>
                    </div>
                </div>
                <footer className='text-center text-[14px] mt-10'>
                    ©2023, Bob's Private Indonesia
                </footer>
                <div className='fixed bottom-10 right-5' onClick={handleWhatsappMessage}>
                    <button id='contact'>
                        <img src={Whatsapp} alt="" className='w-14'/>
                    </button>
                </div>
            </div>) : 
            (<div></div>)
        }
    </div>
  )
}

export default Footer

// bob-private