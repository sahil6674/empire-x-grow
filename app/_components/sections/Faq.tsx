"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import WhatsAppButton from '../ui/WhatsAppButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does a typical project take?",
            answer:
                "It depends on the type and size of the work. Reels, posters and other designs usually take a few days. Video shoots, websites and software take longer, depending on the features you need. After understanding your requirements, we share a clear timeline before starting.",
        },
        {
            question: "How much does a project cost?",
            answer:
                "Our social media plans start at ₹15,000 per month, and you can see all packages in the Packages section. For websites, software and custom work, the price depends on the features you need. Tell us your requirements and we will share a clear quote with no hidden charges.",
        },
        {
            question: "Do you work with small businesses?",
            answer:
                "Yes. We work with startups, local shops, schools, clinics and growing brands. Our packages are made to be affordable, and we can adjust the work to fit your budget.",
        },
        {
            question: "Can you maintain my website after development?",
            answer:
                "Yes. Every website and software project includes free support after launch, and we also offer yearly maintenance for updates, fixes and technical help.",
        },
        {
            question: "How do I get started?",
            answer:
                "Simply call or WhatsApp us and tell us about your business and what you need. We will suggest the best plan, share the timeline and price, and start work once you are happy with it.",
        },
        {
            question: "Do you provide custom solutions?",
            answer:
                "Yes. Along with our packages, we build custom websites and software such as school, college, hospital and shop management systems, designed around how your business works.",
        },

    ];

    return (
        <section id="faq" className="scroll-mt-10 bg-black px-5 pt-5 pb-15">
            <div className="mb-10 w-full py-5 text-center">
                <h6 className="text-md py-5 text-amber-400"><span className="text-lg font-semibold pr-2">06</span>_____ FAQs </h6>
                <h1 className="text-5xl font-semibold leading-14">
                    Questions You Might{" "}
                    <span className="text-amber-400">Already Have</span>
                </h1>
            </div>

            <div className="flex flex-col gap-3 md:px-30">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className="relative cursor-pointer rounded-xl border border-gray-800 p-5"
                    >
                        <Plus
                            className={`absolute top-5 right-5 size-6 rounded-full border border-gray-800 p-1 transition-transform duration-300 ${openIndex === index
                                ? "rotate-45 bg-gray-800"
                                : "rotate-0"
                                }`}
                        />

                        <h5 className="pr-10 font-semibold">
                            {faq.question}
                        </h5>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                ? "max-h-40 opacity-100"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            <h6 className="mt-3 text-sm text-gray-300">
                                {faq.answer}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>

            <h6 className="text-center mt-10 mb-5 text-gray-400">Still have questions? We&apos;d love to talk.</h6>
            <WhatsAppButton className="block w-55 m-auto py-2 text-center rounded-lg font-bold bg-green-500 transition-all duration-600 hover:text-green-600 hover:bg-white"><FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp</WhatsAppButton>
        </section>
    );
};

export default Faq;