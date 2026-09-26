import { Box, Clock, MapPin, SquareCheck, Users, ChartLine } from 'lucide-react'
import { SectionAnimation } from '../ui/SectionAnimation'
import Faq from '@/app/_components/sections/Faq'
import { BlueButton } from '../ui/BlueButton'
import { SimpleButton } from '../ui/SimpleButton'

const Process = () => {

    return (
        <>
            <section id="process" className="px-5 py-20">
                <div className="text-center w-full py-5 mb-10">
                    <h6 className="text-md py-5 text-blue-400"><span className="text-lg font-semibold pr-2 text-gray-400">07</span>_____ Why Choose Us </h6>
                    <h1 className="text-5xl font-semibold leading-14">What Sets EmpireXGrow <span className="text-blue-400">Apart from the Rest</span></h1>
                    <h6 className="py-5 inline-block lg:w-1/2 text-gray-400">Monthly retainer plans with no hidden fees. All prices in INR. Cancel or upgrade anytime.</h6>
                </div>

                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='group flex items-start gap-3 border rounded-2xl bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <Box className='size-8 shrink-0 text-gray-400 group-hover:text-blue-400' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-gray-200 group-hover:text-blue-400'>Strategy-First Approach</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400'>We don&apos;t just make pretty things. Every deliverable is rooted in brand strategy, audience insights, and conversion goals.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <Clock className='size-8 shrink-0 text-gray-400 group-hover:text-blue-400' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-gray-200 group-hover:text-blue-400'>Fast Turnaround</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400'>We respect your timelines. Our systems and team deliver without compromising on quality — most projects are turned around in 5–10 working days.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <MapPin className='size-8 shrink-0 text-gray-400 group-hover:text-blue-400' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-gray-200 group-hover:text-blue-400'>Local Expertise, Global Standard</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400'>We understand the Indian market intimately — culture, platforms, trends — while delivering production quality that meets global benchmarks.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <SquareCheck className='size-8 shrink-0 text-gray-400 group-hover:text-blue-400' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-gray-200 group-hover:text-blue-400'>Transparent & Accountable</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400'>We don&apos;t just make pretty things. Every deliverable is rooted in brand strategy, audience insights, and conversion goals.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <Users className='size-8 shrink-0 text-gray-400 group-hover:text-blue-400' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-gray-200 group-hover:text-blue-400'>Dedicated Creative Team</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400'>Your project isn&apos;t passed to freelancers. You get a dedicated director, designer, developer, and strategist assigned to your brand.</h6>
                        </div>
                    </div>

                    <div className='group flex items-start gap-3 border rounded-2xl bg-[#121111] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-8'>
                        <ChartLine className='size-8 shrink-0 text-gray-400 group-hover:text-blue-400' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-lg font-semibold text-gray-200 group-hover:text-blue-400'>Results You Can Measure</h5>
                            <h6 className='text-sm leading-5.5 text-gray-400'>We track what matters — engagement, reach, conversions, traffic. Monthly reports show exactly how your investment is working.</h6>
                        </div>
                    </div>
                </div>
            </section>

            <SectionAnimation>
                <section id='ourProcess' className='px-5 py-20 bg-black'>
                    <div className="text-center w-full py-5 mb-10">
                        <h6 className="text-md py-5 text-blue-400"><span className="text-lg font-semibold pr-2 text-gray-400">08</span>_____ Our Process </h6>
                        <h1 className="text-5xl font-semibold leading-14">How We Turn Ideas into <span className="text-blue-400">Impact</span></h1>
                    </div>

                    <div className='grid md:gap-y-15 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pl-5 pt-10'>
                        <div className='relative flex gap-2 flex-col pb-15 md:pb-15 pl-12 md:pl-0 border-l border-l-blue-500 md:border-l-0 md:border-t md:border-t-blue-500 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold bg-blue-600'>01</span>
                            <h6 className='text-sm text-blue-400'>Day 1</h6>
                            <h5 className='text-sm font-semibold'>Discovery Call</h5>
                            <h6 className='text-sm text-gray-400'>We start with a 45-minute strategy session to understand your brand, goals, audience, and current challenges.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-15 pl-12 md:pl-0 border-l border-l-blue-300 md:border-l-0 md:border-t md:border-t-blue-300 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>02</span>
                            <h6 className='text-sm text-blue-400'>Day 2-4</h6>
                            <h5 className='text-sm font-semibold'>Strategy & Planning</h5>
                            <h6 className='text-sm text-gray-400'>We map out the full creative roadmap — platforms, content types, timelines, and KPIs tailored to your goals.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-15 pl-12 md:pl-0 border-l border-l-blue-100 md:border-l-0 md:border-t md:border-t-blue-100 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>03</span>
                            <h6 className='text-sm text-blue-400'>Day 5-14</h6>
                            <h5 className='text-sm font-semibold'>Creative Production</h5>
                            <h6 className='text-sm text-gray-400'>Our team executes — shooting, designing, coding, and writing. You receive drafts for review at key milestones.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-15 pl-12 md:pl-0 border-l border-l-gray-400 md:border-l-0 md:border-t md:border-t-gray-400 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>04</span>
                            <h6 className='text-sm text-blue-400'>Day 15-18</h6>
                            <h5 className='text-sm font-semibold'>Review & Revisions</h5>
                            <h6 className='text-sm text-gray-400'>Two rounds of revisions included. We refine until the work meets your brief and exceeds your expectations.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-15 pl-12 md:pl-0 border-l border-l-gray-600 md:border-l-0 md:border-t md:border-t-gray-600 md:pt-10 pr-5'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>05</span>
                            <h6 className='text-sm text-blue-400'>Day 19-21</h6>
                            <h5 className='text-sm font-semibold'>Launch & Deploy</h5>
                            <h6 className='text-sm text-gray-400'>We go live - videos published, website launched, social profiles activated. Everything is optimized for day-one impact.</h6>
                        </div>

                        <div className='relative flex gap-2 flex-col pb-15 md:pb-15 pl-12 md:pl-0 border-l border-l-gray-800 md:border-l-0 md:border-t md:border-t-gray-800 md:pt-10 pr-10'>
                            <span className='absolute top-0 -left-6 md:-top-7 md:left-0 rounded p-3 text-lg font-bold border border-gray-400 bg-black'>06</span>
                            <h6 className='text-sm text-blue-400'>ONGOING</h6>
                            <h5 className='text-sm font-semibold'>Monitor & Optimize</h5>
                            <h6 className='text-sm text-gray-400'>Post-launch, we track performance, respond to data, and continuously improve content strategy for sustained growth.</h6>
                        </div>
                    </div>
                </section>
            </SectionAnimation>

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


                    <div className="flex flex-col text-center w-full py-20 mb-10">
                        <div className='w-fit flex self-center items-center gap-4 text-gray-400 text-sm bg-white/10 border rounded-2xl border-white/20 py-1.5 px-4'>
                            <span className='circle h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_4px_rgba(59,130,246,0.6)]'></span>
                            <p className='uppercase tracking-widest'>Available for New Projects</p>
                        </div>
                        
                        <h1 className="mt-10 text-5xl font-semibold leading-14 self-center md:w-1/2">Ready to Build Something <span className="text-blue-400">Remarkable?</span></h1>
                        <h6 className="py-5 self-center inline-block lg:w-1/2 text-lg text-gray-400">Let&apos;s create visuals that stop thumbs, win hearts, and grow your business. Your next big brand moment is one conversation away.</h6>

                        <div className='flex gap-10 justify-center py-5'>
                            <BlueButton text='Start a Project' className='px-6'/>
                            <SimpleButton text='WhatsApp Us' className='px-6'/>
                        </div>
                    </div>

                </section>
            </SectionAnimation>
        </>
    )
}

export default Process