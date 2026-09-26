"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does a typical project take?",
            answer:
                "It depends on the scope. A brand film typically takes 3–4 weeks from shoot to final delivery. Website builds range from 4–8 weeks. Social media management starts within 5 business days of onboarding.",
        },
        {
            question: "How much does a project cost?",
            answer:
                "Project pricing depends on the scope, requirements, and timeline. We discuss your needs first and then provide a clear quote.",
        },
        {
            question: "Do you work with small businesses?",
            answer:
                "Yes. We work with businesses of different sizes and can tailor the project according to your requirements.",
        },
        {
            question: "Can you maintain my website after development?",
            answer:
                "Yes. We can provide ongoing website maintenance, updates, hosting support, and other technical assistance.",
        },
        {
            question: "How do I get started?",
            answer:
                "Simply contact us and tell us about your project. We will discuss your requirements, timeline, and next steps.",
        },
        {
            question: "Do you provide custom solutions?",
            answer:
                "Yes. Our solutions are customized according to your business goals, audience, and project requirements.",
        },
    ];

    return (
        <section id="ourProcess" className="bg-black px-5 py-20">
            <div className="mb-10 w-full py-5 text-center">
                <h6 className="text-md py-5 text-blue-400"><span className="text-lg font-semibold pr-2 text-gray-400">09</span>_____ FAQs </h6>
                <h1 className="text-5xl font-semibold leading-14">
                    Questions You Might{" "}
                    <span className="text-blue-400">Already Have</span>
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
                            <h6 className="mt-3 text-sm text-gray-400">
                                {faq.answer}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>

            <h6 className="text-center mt-10 mb-5 text-gray-400">Still have questions? We&apos;d love to talk.</h6>
            <button className="block mx-auto py-2 px-5 rounded-lg font-bold bg-green-400">Chat on WhatsApp</button>
        </section>
    );
};

export default Faq;