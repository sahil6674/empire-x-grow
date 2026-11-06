import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faInstagram,
    faFacebook,
    faYoutube,
    faLinkedin,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import Image from 'next/image'
import Link from 'next/link';

import WhatsAppButton from '../ui/WhatsAppButton'

const Footer = () => {
    return (
        <>
            <footer className="px-5 pt-15 pb-5 bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-15 pb-15">
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <Image src='/logo-2.png' alt='Logo' height={150} width={170}></Image>
                        <h6 className="pl-1 text-gray-300">India&apos;s premier creative studio for video production, brand design, social media strategy, and web development.</h6>
                        <div className="flex justify-center md:justify-start gap-5 text-2xl">
                            <Link href="https://www.instagram.com/empirexgrow?mdxt=MW8zMW14MDNna2Zxdg%3D%3D&utm_source=qr" target="blank">
                                <FontAwesomeIcon icon={faInstagram} height={25} className="text-pink-500 transition-colors duration-300 hover:text-white hover:-translate-y-0.5 cursor-pointer" />
                            </Link>
                            <Link href="https://www.facebook.com/share/1eYBSjnrhz/?mibextid=wwXIfr" target="blank">
                                <FontAwesomeIcon icon={faFacebook} height={25} className="text-blue-500 transition-colors duration-300 hover:text-white hover:-translate-y-0.5 cursor-pointer" />
                            </Link>
                            <Link href="" target="blank">
                                <FontAwesomeIcon icon={faYoutube} height={25} className="text-red-500 transition-colors duration-300 hover:text-white hover:-translate-y-0.5 cursor-pointer" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/empirexgrow/" target="blank">
                                <FontAwesomeIcon icon={faLinkedin} height={25} className="text-blue-400 transition-colors duration-300 hover:text-white hover:-translate-y-0.5 cursor-pointer" />
                            </Link>
                            <WhatsAppButton>
                                <FontAwesomeIcon icon={faWhatsapp} height={25} className="text-green-400 transition-colors duration-300 hover:text-white hover:-translate-y-0.5 cursor-pointer" />
                            </WhatsAppButton>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h5 className="text-md font-semibold uppercase pb-3 text-blue-400">Company</h5>
                        <ul className="flex flex-col gap-2 text-sm font-medium text-gray-400">
                            <li><Link href="#about" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">About</Link></li>
                            <li><Link href="#about" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Our Work</Link></li>
                            <li><Link href="#about" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Case Studies</Link></li>
                            <li><Link href="#about" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h5 className="text-md font-semibold uppercase pb-3 text-blue-400">Services</h5>
                        <ul className="flex flex-col gap-2 text-sm font-medium text-gray-400">
                            <li><Link href="#videoShoot" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Video Production</Link></li>
                            <li><Link href="#videoShoot" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Video Editing</Link></li>
                            <li><Link href="#videoShoot" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Music Video Production</Link></li>
                            <li><Link href="#videoShoot" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Graphic Design</Link></li>
                            <li><Link href="#web" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Social Media</Link></li>
                            <li><Link href="#web" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Web Development</Link></li>
                            <li><Link href="#web" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Software Development</Link></li>
                            <li><Link href="#web" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Hosting & Maintenance</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h5 className="text-md font-semibold uppercase pb-3 text-blue-400">Resources</h5>
                        <ul className="flex flex-col gap-2 text-sm font-medium text-gray-400">
                            <li><Link href="#packages" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Packages</Link></li>
                            <li><Link href="#ourProcess" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Process</Link></li>
                            <li><Link href="#faq" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">FAQ</Link></li>
                            <li><Link href="#about" className="inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5">Blog</Link></li>
                        </ul>
                    </div>

                </div>

                <hr className="text-amber-400"/>
                <h6 className="text-sm text-center pt-5 text-amber-400">© 2026 EmpireXGrow. All rights reserved.</h6>

            </footer>
        </>
    )
}

export default Footer