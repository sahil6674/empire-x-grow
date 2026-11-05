import { Clapperboard, Globe, Megaphone, MonitorCloud, Music, Video } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
    return (
        <>
            <section id='services' className="scroll-mt-10 px-5 pt-5 pb-15">
                <div className="md:w-1/2 py-5 mb-10">
                    <h6 className="text-md py-5 text-blue-400"><span className="text-lg font-semibold pr-2 text-gray-400">02</span> OUR SERVICES _____</h6>
                    <h1 className="text-5xl font-semibold leading-14">Everything Your Brand Needs, <span className="text-blue-400">Under One Roof</span></h1>
                </div>

                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div id='videoShoot' className='group scroll-mt-28 flex flex-col gap-4 p-5 border rounded-lg border-gray-400 bg-black hover:border-blue-400 hover:-translate-y-1 transition-all duration-300'>
                        <Clapperboard className='size-10 text-gray-500 group-hover:text-white' />
                        <h2 className='text-xl font-semibold text-blue-400'>Cinematic Shoots</h2>
                        <h6 className='text-sm text-gray-400'>From the first idea to the final delivery, we shoot brand films, product videos, event coverage and testimonials that look professional and hold your audience’s attention.</h6>
                        <ul className='space-y-1.5 text-sm list-disc text-gray-300 marker:text-blue-400 group-hover:text-white ml-3'>
                            <li>Concept & Scripting</li>
                            <li>Studio & On-Location Shoots</li>
                            <li>Professional camera & Lighting</li>
                            <li>Direction on set</li>
                            <li>Editing & Color grading</li>
                        </ul>
                        <Link href='#contact'>
                            <button className='text-start text-sm font-semibold text-blue-400 mt-3 transition-all duration-300 hover:cursor-pointer hover:text-blue-500 hover:translate-x-1'>Enquire Now ➜</button>
                        </Link>
                    </div>
                    <div className='group flex flex-col gap-4 p-5 border rounded-lg border-gray-400 bg-black hover:border-blue-400 hover:-translate-y-1 transition-all duration-300'>
                        <Music className='size-10 text-gray-500 group-hover:text-white' />
                        <h2 className='text-xl font-semibold text-blue-400'>Music Video Shoot</h2>
                        <h6 className='text-sm text-gray-400'>We turn your song into a visual story. From planning the concept to the final cut, we make music videos that look great and stand out on YouTube and social media.</h6>
                        <ul className='space-y-1.5 text-sm list-disc text-gray-300 marker:text-blue-400 group-hover:text-white ml-3'>
                            <li>Concept & storyboarding</li>
                            <li>Studio & outdoor locations</li>
                            <li>Direction & shooting</li>
                            <li>Editing & color grading</li>
                            <li>Ready for YouTube & social media</li>
                        </ul>
                        <Link href='#contact'>
                            <button className='text-start text-sm font-semibold text-blue-400 mt-3 transition-all duration-300 hover:cursor-pointer hover:text-blue-500 hover:translate-x-1'>Enquire Now ➜</button>
                        </Link>
                    </div>
                    <div className='group flex flex-col gap-4 p-5 border rounded-lg border-gray-400 bg-black hover:border-blue-400 hover:-translate-y-1 transition-all duration-300'>
                        <Video className='size-10 text-gray-500 group-hover:text-white' />
                        <h2 className='text-xl font-semibold text-blue-400'>Video Editing</h2>
                        <h6 className='text-sm text-gray-400'>We turn raw footage into polished videos for reels, shorts, ads and films, with smooth cuts, clean sound and a style that suits your brand.</h6>
                        <ul className='space-y-1.5 text-sm list-disc text-gray-300 marker:text-blue-400 group-hover:text-white ml-3'>
                            <li>Reels, Shorts & YouTube videos</li>
                            <li>Ad & Promo videos</li>
                            <li>Transitions & Motion graphics</li>
                            <li>Sound mixing & Color correction</li>
                        </ul>
                        <Link href='#contact'>
                            <button className='text-start text-sm font-semibold text-blue-400 mt-3 transition-all duration-300 hover:cursor-pointer hover:text-blue-500 hover:translate-x-1'>Enquire Now ➜</button>
                        </Link>
                    </div>

                    <div id='web' className='group scroll-mt-28 flex flex-col gap-4 p-5 border rounded-lg border-gray-400 bg-black hover:border-blue-400 hover:-translate-y-1 transition-all duration-300'>
                        <Globe className='size-10 text-gray-500 group-hover:text-white' />
                        <h2 className='text-xl font-semibold text-blue-400'>Social Media Management</h2>
                        <h6 className='text-sm text-gray-400'>We plan, create and post content for your social media pages, so your brand stays active, looks consistent and keeps growing without you handling it daily.</h6>
                        <ul className='space-y-1.5 text-sm list-disc text-gray-300 marker:text-blue-400 group-hover:text-white ml-3'>
                            <li>Content planning & Monthly calendar</li>
                            <li>Posts, reels & creative design</li>
                            <li>Regular posting</li>
                            <li>Growth & Engagement tracking</li>
                        </ul>
                        <Link href='#contact'>
                            <button className='text-start text-sm font-semibold text-blue-400 mt-3 transition-all duration-300 hover:cursor-pointer hover:text-blue-500 hover:translate-x-1'>Enquire Now ➜</button>
                        </Link>
                    </div>
                    <div className='group flex flex-col gap-4 p-5 border rounded-lg border-gray-400 bg-black hover:border-blue-400 hover:-translate-y-1 transition-all duration-300'>
                        <Megaphone className='size-10 text-gray-500 group-hover:text-white' />
                        <h2 className='text-xl font-semibold text-blue-400'>Google & Meta Ads</h2>
                        <h6 className='text-sm text-gray-400'>We run targeted ad campaigns on Google, Facebook and Instagram that put your business in front of the right people and bring you more leads and sales.</h6>
                        <ul className='space-y-1.5 text-sm list-disc text-gray-300 marker:text-blue-400 group-hover:text-white ml-3'>
                            <li>Audience research & targeting</li>
                            <li>Ad creative & copywriting</li>
                            <li>Campaign setup & budget control</li>
                            <li>Performance tracking & optimization</li>
                        </ul>
                        <Link href='#contact'>
                            <button className='text-start text-sm font-semibold text-blue-400 mt-3 transition-all duration-300 hover:cursor-pointer hover:text-blue-500 hover:translate-x-1'>Enquire Now ➜</button>
                        </Link>
                    </div>
                    <div className='group flex flex-col gap-4 p-5 border rounded-lg border-gray-400 bg-black hover:border-blue-400 hover:-translate-y-1 transition-all duration-300'>
                        <MonitorCloud className='size-10 text-gray-500 group-hover:text-white' />
                        <h2 className='text-xl font-semibold text-blue-400'>Website & Software Development</h2>
                        <h6 className='text-sm text-gray-400'>We build fast, mobile-friendly websites and custom software for businesses, schools, hospitals and shops, designed around how you actually work.</h6>
                        <ul className='space-y-1.5 text-sm list-disc text-gray-300 marker:text-blue-400 group-hover:text-white ml-3'>
                            <li>Static & dynamic websites</li>
                            <li>School & college management systems</li>
                            <li>Hospital management systems</li>
                            <li>Software for shops & businesses</li>
                            <li>Domain Name & Deploy</li>
                            <li>Ongoing support & maintenance</li>
                        </ul>
                        <Link href='#contact'>
                            <button className='text-start text-sm font-semibold text-blue-400 mt-3 transition-all duration-300 hover:cursor-pointer hover:text-blue-500 hover:translate-x-1'>Enquire Now ➜</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services