import Image from 'next/image'
import Link from 'next/link'
import { BlueButton } from './BlueButton'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center h-15 text-gray-400 px-5 py-10'>
        <Image src="/logo-2.png" alt="Logo" height={100} width={200} />
        <ul className='flex gap-10 items-center text-[15px]'>
          <li className='transition duration-300 hover:text-white'><Link href="">Home</Link></li>
          <li className='transition duration-300 hover:text-white'><Link href="">About</Link></li>
          <li className='transition duration-300 hover:text-white'><Link href="">Services</Link></li>
          <li className='transition duration-300 hover:text-white'><Link href="">Packages</Link></li>
          <li className='transition duration-300 hover:text-white'><Link href="">Why Us</Link></li>
          <li className='transition duration-300 hover:text-white'><Link href="">Contact Us</Link></li>
          <li><BlueButton text='Start a Project'/></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar