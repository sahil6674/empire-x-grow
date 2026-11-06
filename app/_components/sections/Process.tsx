import { Box, Clock, MapPin, SquareCheck, Users, ChartLine } from 'lucide-react'
import { SectionAnimation } from '../ui/SectionAnimation'
import Faq from '@/app/_components/sections/Faq'
import { BlueButton } from '../ui/BlueButton'
import Link from 'next/link'
import WhatsAppButton from '../ui/WhatsAppButton'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Process = () => {

    return (
        <>
            <section id="process" className="scroll-mt-10 px-5 pt-5 pb-15">
                <div className="text-center w-full py-5 mb-5">
                    <h6 className="text-md py-5 text-amber-400"><span className="text-lg font-semibold pr-2">04</span>_____ Why Choose Us </h6>
                    <h1 className="text-5xl font-semibold leading-14">What Sets EmpireXGrow <span className="text-amber-400">Apart from the Rest</span></h1>
                    <h6 className="py-5 inline-block lg:w-1/2 text-gray-400">Creative ideas, smart strategies and real results, at packages that suit your budget. Your success is our priority.</h6>
                </div>

                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='group flex items-start gap-3 border border-blue-400 rounded-2xl bg-[#121111] hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <Box className='size-8 shrink-0 text-gray-400 group-hover:text-white' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-blue-400 group-hover:text-amber-400'>Strategy-First Approach</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400 group-hover:text-white'>We start by understanding your business, your audience and your goals. Every video, design and ad is made to bring results, not just to look good.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl border-amber-400 bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <Clock className='size-8 shrink-0 text-gray-400 group-hover:text-white' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-amber-400 group-hover:text-blue-400'>On-Time Delivery</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400 group-hover:text-white'>We agree on timelines before we start and stick to them, so your content, campaigns and website go live when planned.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl border-blue-400 bg-[#121111] hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <MapPin className='size-8 shrink-0 text-gray-400 group-hover:text-white' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-blue-400 group-hover:text-amber-400'>Local Roots, Professional Quality</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400 group-hover:text-white'>Based in Naguran (Jind), we understand local and Indian audiences, and we bring professional quality to every project.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl border-amber-400 bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <SquareCheck className='size-8 shrink-0 text-gray-400 group-hover:text-white' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-amber-400 group-hover:text-blue-400'>Transparent & Accountable</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400 group-hover:text-white'>Clear packages and clear communication. You know what you’re paying for and what you’ll get, with no hidden charges.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl border-blue-400 bg-[#121111] hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <Users className='size-8 shrink-0 text-gray-400 group-hover:text-white' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-blue-400 group-hover:text-amber-400'>Dedicated Creative Team</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400 group-hover:text-white'>Your project isn&apos;t passed to freelancers. You get a dedicated director, designer, developer, and strategist assigned to your brand.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl border-amber-400 bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <ChartLine className='size-8 shrink-0 text-gray-400 group-hover:text-white' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-amber-400 group-hover:text-blue-400'>Results You Can Measure</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400 group-hover:text-white'>We focus on what matters to your business: reach, leads and sales. We track how your ads and pages perform and keep improving them.</h6>
                        </div>
                    </div>
                </div>
            </section>

            <SectionAnimation>
                <section id='ourProcess' className='scroll-mt-10 px-5 pt-5 bg-black'>
                    <div className="text-center w-full py-5 mb-10">
                        <h6 className="text-md py-5 text-blue-400"><span className="text-lg font-semibold pr-2">05</span>_____ Our Process </h6>
                        <h1 className="text-5xl font-semibold leading-14">How We Turn Ideas into <span className="text-blue-400">Impact</span></h1>
                    </div>

                    <div className='grid md:gap-y-15 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pl-5 pt-10'>
                        <div className='relative flex gap-2 flex-col pb-15 md:pb-5 pl-12 md:pl-0 border-l border-l-blue-500 md:border-l-0 md:border-t md:border-t-blue-500 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold bg-blue-600'>01</span>
                            <h5 className='text-sm font-semibold text-amber-400'>Understand Your Business</h5>
                            <h6 className='text-sm text-gray-400'>Call or WhatsApp us and tell us about your business, your goals and your budget. We listen first, then suggest what will work best for you.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-5 pl-12 md:pl-0 border-l border-l-blue-300 md:border-l-0 md:border-t md:border-t-blue-300 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>02</span>
                            <h5 className='text-sm font-semibold text-amber-400'>Plan & Proposal</h5>
                            <h6 className='text-sm text-gray-400'>We choose the right services and package for you, and share a clear plan with the work involved, the timeline and the cost, so there are no surprises later.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-5 pl-12 md:pl-0 border-l border-l-blue-100 md:border-l-0 md:border-t md:border-t-blue-100 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>03</span>
                            <h5 className='text-sm font-semibold text-amber-400'>Creative Production</h5>
                            <h6 className='text-sm text-gray-400'>Our team gets to work: shooting, editing, designing, writing, or building your website or software. You see progress at key stages.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-5 pl-12 md:pl-0 border-l border-l-gray-400 md:border-l-0 md:border-t md:border-t-gray-400 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>04</span>
                            <h5 className='text-sm font-semibold text-amber-400'>Review & Feedback</h5>
                            <h6 className='text-sm text-gray-400'>We share the drafts with you. You tell us what to change, and we refine the work.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-5 pl-12 md:pl-0 border-l border-l-gray-600 md:border-l-0 md:border-t md:border-t-gray-600 md:pt-10 pr-5'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>05</span>
                            <h5 className='text-sm font-semibold text-amber-400'>Launch & Delivery</h5>
                            <h6 className='text-sm text-gray-400'>Your videos get published, your ad campaigns go live, your website or software is launched and your social media profiles are set up. You get everything ready to use.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-5 pl-12 md:pl-0 border-l border-l-gray-800 md:border-l-0 md:border-t md:border-t-gray-800 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>06</span>
                            <h6 className='text-sm text-blue-400'>ONGOING</h6>
                            <h5 className='text-sm font-semibold text-amber-400'>Support & Growth</h5>
                            <h6 className='text-sm text-gray-400'>After launch, we track how your content and ads perform, keep improving them, and stay available for support so your brand keeps growing.</h6>
                        </div>
                    </div>
                </section>
            </SectionAnimation>

            {/* Client Reviews Section */}
            {/* <SectionAnimation>
                <section id='reviews' className='px-5 py-20'>
                    <div className="text-center w-full py-5 mb-10">
                        <h6 className="text-md py-5 text-blue-400"><span className="text-lg font-semibold pr-2 text-gray-400">09</span>_____ Client Stories </h6>
                        <h1 className="text-5xl font-semibold leading-14">Brands That Bet on LUMA <span className="text-blue-400">and Won</span></h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <span></span>
                            <h5>“LUMA transformed our brand completely. The brand film they produced went viral and brought us 3x more leads in the first month alone. Their strategic eye and cinematic quality is unmatched.”</h5>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
            </SectionAnimation> */}

            <SectionAnimation>
                <Faq></Faq>
            </SectionAnimation>

            <SectionAnimation>
                <section>
                    
                    <div className="flex flex-col text-center w-full pt-20">
                        <div className='w-fit flex self-center items-center gap-4 text-blue-400 text-sm bg-white/10 border rounded-2xl border-blue-400 py-1.5 px-4'>
                            <span className='circle h-2 w-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_10px_4px_rgba(59,130,246,0.6)]'></span>
                            <p className='uppercase tracking-widest'>Available for New Projects</p>
                        </div>
                        
                        <h1 className="mt-10 text-5xl font-semibold leading-14 self-center md:w-1/2">Ready to Grow Your <span className="text-blue-400">Business?</span></h1>
                        <h6 className="py-5 self-center inline-block lg:w-1/2 text-lg text-gray-400">Tell us about your business and your goals. Whether you need videos, designs, social media, ads, a website or custom software, we’ll suggest the best plan for you. Call or WhatsApp us today, and let’s start building your growth.</h6>

                        <div className='flex gap-10 justify-center py-5'>
                            <Link href="#contact">
                                <BlueButton text='Start a Project' className='px-6'/>
                            </Link>
                            <WhatsAppButton className="px-5 py-3 text-center rounded-lg font-bold bg-green-500 transition-all duration-600 hover:text-green-600 hover:bg-white"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us</WhatsAppButton>
                        </div>
                    </div>

                </section>
            </SectionAnimation>
        </>
    )
}

export default Process