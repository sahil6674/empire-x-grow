import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <section id='about' className='scroll-mt-14 flex gap-10 flex-col md:flex-row pt-10 pb-15 px-5 bg-black'>
                <div className='relative min-h-75 md:basis-1/2'>
                    <Image
                        src="/StudioNaguran.jpeg"
                        alt='Studio'
                        fill
                        className='object-cover rounded-2xl'
                    />
                </div>

                <div className="md:basis-1/2 w-full">
                    <h6 className="text-md py-3 text-blue-400"><span className="text-lg font-semibold pr-2">01</span>_____ About Us </h6>
                    <h1 className="text-5xl font-semibold leading-14">We Are the Growth Partner Behind <br/><span className="text-blue-400">Ambitious Brands</span></h1>
                    <h6 className="py-5 inline-block text-lg text-gray-400">EmpireXGrow was built on one simple belief: every business deserves to be seen, remembered and chosen. We help startups, local businesses and growing brands turn their ideas into a strong digital presence that brings real leads and real sales.</h6>
                    <h6 className="inline-block text-lg text-gray-500">From our base in Naguran (Jind), our team of editors, designers, developers and digital marketers works with one goal: to take your business to new heights. Whether it’s reels, a logo, a social media page, Meta ads or a complete website, we handle it with creativity, smart strategy and on-time delivery.</h6>
                </div>
            </section>
        </>
    )
}

export default About