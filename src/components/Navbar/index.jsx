import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../../assets/logo-bob.webp'
import {BiMenu} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'

const links = [
    {section : 'Home', link: '/'},
    {section : 'About Us', link: '/#about'},
    {section : 'Our Package', link: '/#package'},
    {section : 'Our Service', link: '/#service'},
    {section : 'Mata Pelajaran', link: '/#matapelajaran'},
    {section : 'Testimoni', link: '/#testimoni'}
]

const mediaQuery = window.matchMedia('(max-width: 600px)');

const Navbar = () => {
    const [matches, setMatches] = useState(mediaQuery.matches);
    const [open, setOpen] = useState(false)
    const message = "Halo, saya mau nanya soal paket les di Bob Private"
    const phoneNumber = "+6288976739803"

    const handleWhatsappMessage = () => {
        window.open('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message));
    }

    useEffect(() => {
        const handler = (e) => {
          setMatches(e.matches);
        };
    
        mediaQuery.addEventListener('change', handler);
    
        return () => {
          mediaQuery.removeEventListener('change', handler);
        };
      }, []);

      const handleMobileNav = () => {
        setOpen(!open)
    }

  return (
    <div>
        {
            matches? 
            // Mobile Size
            (<div className="fixed z-30 top-0">
                <div className="flex items-center py-4 justify-between relative w-screen bg-white shadow-md">
                <img src={Logo} alt="logo-bob"  className="w-16 pl-5"/>
                {
                    open ? (<IoClose onClick={() => setOpen(false)} className="text-2xl mr-5"/>) : (<BiMenu onClick={handleMobileNav} className="text-2xl mr-5"/>)
                }
                <ul onClick={() => setOpen(false)} className={`${open? "bg-gray-100 top-16" : "-top-[300px]"} space-y-3 absolute p-3 shadow-md w-full`}>
                    {
                        links.map((val, idx) => (
                            <li key={idx}>
                                <Link smooth to={val.link}>{val.section}</Link>
                            </li>
                        ))
                    }
                    <div onClick={handleWhatsappMessage}>
                         <button className="bg-[#F59300] py-2.5 w-full rounded-full text-white shadow-lg px-5">Contact Us</button>
                    </div>
                </ul>
                </div>
            </div>) : 
            // Desktop Size
            (
                <div className=" flex items-center px-24 py-3 justify-between fixed top-0 w-full bg-white shadow-md z-30">
                    <img src={Logo} alt="logo-bob"  className="w-20"/>
                    <ul className="flex items-center space-x-8">
                        {
                            links.map((val, idx) => (
                                <li key={idx}>
                                    <Link smooth to={val.link}>{val.section}</Link>
                                </li>
                            ))
                        }
                        <button onClick={handleWhatsappMessage} className="bg-[#F59300] py-2.5 rounded-full text-white shadow-lg px-5">Contact Us</button>
                    </ul>
                </div>
            )
            
        }
    </div>
  )
}

export default Navbar