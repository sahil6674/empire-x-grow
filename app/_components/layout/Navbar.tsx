"use client"

import Image from 'next/image'
import Link from 'next/link'
import { BlueButton } from '../ui/BlueButton'
import { Menu, X } from "lucide-react"
import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 w-full z-50 bg-black'>
        <div className='flex justify-between items-center h-15 text-gray-400  px-5 py-10'>
          <Image src="/logo-2.png" alt="Logo" height={100} width={200} />
          <ul className='hidden lg:flex gap-10 items-center text-[15px]'>
            <li className='transition duration-300 hover:text-white'><Link href="#home">Home</Link></li>
            <li className='transition duration-300 hover:text-white'><Link href="">About</Link></li>
            <li className='transition duration-300 hover:text-white'><Link href="#services">Services</Link></li>
            <li className='transition duration-300 hover:text-white'><Link href="#packages">Packages</Link></li>
            <li className='transition duration-300 hover:text-white'><Link href="#process">Why Us</Link></li>
            <li className='transition duration-300 hover:text-white'><Link href="#contact">Contact Us</Link></li>
            <li><BlueButton text="Let&apos;s work Together" className="py-1" /></li>
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='block lg:hidden'
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className='border-t border-white/10 px-6 py-10 lg:hidden bg-black'>
            <ul className='flex flex-col gap-10 items-center text-[15px]'>
              <li><Link href="">Home</Link></li>
              <li><Link href="">About</Link></li>
              <li><Link href="">Packages</Link></li>
              <li><Link href="">Why Us</Link></li>
              <li><Link href="">Contact Us</Link></li>
              <li><Link href="">Services</Link></li>
              <li><BlueButton text="Let&apos;s work Together" className="py-1" /></li>
            </ul>
          </div>
        )}

      </nav>
    </>
  )
}

export default Navbar