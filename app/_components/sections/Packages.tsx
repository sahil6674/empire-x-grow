import { BlueButton } from "../ui/BlueButton"
import { SimpleButton } from "../ui/SimpleButton"
import { IndianRupee, CircleCheck } from 'lucide-react'
import Link from 'next/link'

const Packages = () => {
    return (
        <>
            <section id="packages" className="scroll-mt-10 px-5 pt-5 pb-15 bg-black">
                <div className="text-center w-full py-5 mb-10">
                    <h6 className="text-md py-5 text-blue-400"><span className="text-lg font-semibold pr-2 text-gray-400">04</span>_____ Packages </h6>
                    <h1 className="text-5xl font-semibold leading-14">Transparent Pricing, <span className="text-blue-400">Extraordinary Value</span></h1>
                    <h6 className="py-5 inline-block lg:w-1/2 text-gray-400">Monthly retainer plans with no hidden fees. All prices in INR. Cancel or upgrade anytime.</h6>
                </div>

                <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">

                    <div className="relative h-160 flex flex-col gap-5 p-10 border rounded-lg border-gray-500 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300">
                        <h6 className="text-sm tracking-widest text-gray-400">STARTER</h6>
                        <h1 className="text-5xl font-bold -ml-1"><IndianRupee className="inline size-10 stroke-3 -mt-2 -mr-1" />15,000<span className="text-sm font-thin text-gray-400">/ month</span></h1>
                        <h6 className=" text-gray-400">Perfect for small businesses & new brands getting started.</h6>
                        
                        <ul className="space-y-4 text-sm mt-3 pt-8 border-t border-t-gray-800 text-gray-400">
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Social media management (2 platforms)</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> 10 short form videos / reels per month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> 5 posters per month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Monthly analytics report</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Meta Ads Management on 2 videos</li>
                        </ul>
                        <Link href="#contact">
                            <SimpleButton text="Get Started" className="absolute self-center bottom-5 w-[80%]"/>
                        </Link>
                    </div>

                    <div className="relative h-160 flex flex-col gap-5 p-10 border rounded-lg border-blue-400 hover:-translate-y-1 transition-all duration-300">
                        <h6 className="absolute -top-3 left-[30%] bg-blue-600 px-4 text-sm font-semibold py-0.5 rounded-xl">MOST POPULAR</h6>
                        <h6 className="text-sm tracking-widest text-blue-400">PREMIUM</h6>
                        <h1 className="text-5xl font-bold -ml-1 text-blue-400"><IndianRupee className="inline size-10 stroke-3 -mt-2 -mr-1" />25,000<span className="text-sm font-thin text-gray-400">/ month</span></h1>
                        <h6 className=" text-gray-400">Built for growing brands who need more visibility and content.</h6>
                        
                        <ul className="space-y-4 text-sm mt-3 pt-8 border-t border-t-gray-800 text-gray-400">
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> Social media management (3 platforms)</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> 20 short form videos / reels per month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> 8 posters per month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> Monthly analytics report</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> Meta Ads Management on 4 videos</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> Captions & hashtags for every post</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> Priority editing & faster delivery</li>
                        </ul>
                        <Link href="#contact">
                            <BlueButton text="Start Growing" className="absolute self-center bottom-5 w-[80%]"/>
                        </Link>
                    </div>

                    <div className="relative h-160 flex flex-col gap-5 p-10 border rounded-lg border-gray-500 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300">
                        <h6 className="text-sm tracking-widest text-gray-400">CUSTOM</h6>
                        <h1 className="text-4xl font-bold -ml-1">Let&apos;s Talk</h1>
                        <h6 className=" text-gray-400">Need something beyond a monthly plan? Pick any services below.</h6>
                        
                        <ul className="space-y-4 text-sm mt-3 pt-8 border-t border-t-gray-800 text-gray-400">
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Full video production shoots</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Music video shoots</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Custom website build</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Custom software for any business</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Video editing: reels, YouTube videos</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Graphic design: logo, poster, banner</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Google & Meta ads with full campaign</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> One-time or long-term monthly projects</li>
                        </ul>
                        <SimpleButton text="WhatsApp Us" className="absolute self-center bottom-5 w-[80%]"/>
                    </div>
                </div>

                <h6 className="text-center pt-8 text-gray-400">All plans include onboarding consultation. One-time project pricing available. GST extra. <span className="cursor-pointer text-blue-400">Have questions? Chat with us.</span></h6>
            </section>
        </>
    )
}

export default Packages