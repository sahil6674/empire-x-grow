import { BlueButton } from "../ui/BlueButton"
import { SimpleButton } from "../ui/SimpleButton"
import { IndianRupee, CircleCheck } from 'lucide-react'


const Packages = () => {
    return (
        <>
            <section id="packages" className="px-5 py-15 bg-black">
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
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> 20 posts per month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> 4 graphic designs per month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Monthly analytics report</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Community management</li>
                        </ul>
                        <SimpleButton text="Get Started" className="absolute self-center bottom-5 w-[80%]"/>
                    </div>

                    <div className="relative h-160 flex flex-col gap-5 p-10 border rounded-lg border-blue-400 hover:-translate-y-1 transition-all duration-300">
                        <h6 className="absolute -top-3 left-[30%] bg-blue-600 px-4 text-sm font-semibold py-0.5 rounded-xl">MOST POPULAR</h6>
                        <h6 className="text-sm tracking-widest text-blue-400">PREMIUM</h6>
                        <h1 className="text-5xl font-bold -ml-1 text-blue-400"><IndianRupee className="inline size-10 stroke-3 -mt-2 -mr-1" />25,000<span className="text-sm font-thin text-gray-400">/ month</span></h1>
                        <h6 className=" text-gray-400">Built for growing brands who need more visibility and content.</h6>
                        
                        <ul className="space-y-4 text-sm mt-3 pt-8 border-t border-t-gray-800 text-gray-400">
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> Social media management (3 platforms)</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> 40 posts + stories per month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> 8 graphic designs per month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> 4 short-form video edits/month</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> Monthly campaign strategy</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> WhatsApp priority support</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1 text-blue-400" /> Competitor analysis report</li>
                        </ul>
                        <BlueButton text="Start Growing" className="absolute self-center bottom-5 w-[80%]"/>
                    </div>

                    <div className="relative h-160 flex flex-col gap-5 p-10 border rounded-lg border-gray-500 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300">
                        <h6 className="text-sm tracking-widest text-gray-400">CUSTOM</h6>
                        <h1 className="text-4xl font-bold -ml-1">Let&apos;s Talk</h1>
                        <h6 className=" text-gray-400">Enterprise, multi-brand, or one-time project needs? We&apos;ll build a custom plan.</h6>
                        
                        <ul className="space-y-4 text-sm mt-3 pt-8 border-t border-t-gray-800 text-gray-400">
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Full video production shoots</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Custom web application build</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Multi-brand management</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> White-label services</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Agency partnerships</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> IPO / launch campaign packages</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Dedicated creative team</li>
                            <li><CircleCheck className="inline size-4 -mt-1 mr-1" /> Priority SLA & reporting</li>
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