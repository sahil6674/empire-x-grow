
"use client";

import { Mail, PhoneCall } from "lucide-react";
import { useState, type FormEvent } from "react";
import { BlueButton } from "../ui/BlueButton";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form Data:", formData);
        setStatus("Your form is ready to be submitted!");

        // Connect an email service or API here.
    };

    return (
        <section id="contact" className="scroll-mt-10 px-15 pt-10 pb-15">
            <div className="mb-10 w-full py-5 text-center">
                <h6 className="py-5 text-md text-amber-400">
                    <span className="pr-2 text-lg font-semibold">
                        07
                    </span>
                    _____ GET IN TOUCH
                </h6>

                <h1 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-[1.2]">
                    Let&apos;s Make Something{" "}
                    <span className="text-amber-400">Extraordinary</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-15 md:grid-cols-3">
                {/* Contact Form */}
                <div className="rounded-2xl bg-black p-2 md:col-span-2">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-2xl bg-white/3 p-6 shadow-2xl sm:p-8"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/10 bg-[#17191c] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/10 bg-[#17191c] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="mobile"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Mobile Number
                                </label>

                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="text"
                                    placeholder="+91 8950924250"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/10 bg-[#17191c] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="service"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Service Required
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/10 bg-[#17191c] px-4 py-3 text-gray-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    <option value="Web Development">Starter Package</option>
                                    <option value="Web Development">Premium Package</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Web Development">Software Development</option>
                                    <option value="Video Editing">Video Editing</option>
                                    <option value="Video Shooting">Video Shooting</option>
                                    <option value="Video Shooting">Photo Shoot</option>
                                    <option value="Video Shooting">Google / Meta Ads</option>
                                    <option value="Graphic Designing">Graphic Designing</option>
                                    <option value="Social Media Management">
                                        Social Media Management
                                    </option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Your Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell us about your project, requirements, and goals..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full resize-y rounded-lg border border-white/10 bg-[#17191c] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />
                        </div>

                        <BlueButton text="Send Enquiry →" className="w-full"></BlueButton>

                        {status && (
                            <p role="status" className="text-center text-sm text-blue-400">
                                {status}
                            </p>
                        )}
                    </form>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-3">
                    <a
                        href="tel:+91946001549"
                        className="relative rounded-xl bg-black px-15 py-4 transition"
                    >
                        <PhoneCall className="absolute left-5 text-blue-500" />

                        <h6 className="text-sm font-semibold text-gray-400">Mobile</h6>
                        <h5 className="text-sm text-white">+91 946001549</h5>
                    </a>

                    <a
                        href="mailto:empirexgrow@gmail.com"
                        className="relative rounded-xl bg-black px-15 py-4 transition"
                    >
                        <Mail className="absolute left-5 top-5 text-blue-500" />

                        <h6 className="text-sm font-semibold text-gray-400">Mail</h6>
                        <h5 className="wrap-break-word text-sm text-white">
                            empirexgrow@gmail.com
                        </h5>
                    </a>

                    <a
                        href="mailto:empirexgrow@gmail.com"
                        className="relative rounded-xl bg-black px-15 py-4 transition"
                    >
                        <Mail className="absolute left-5 text-blue-500" />

                        <h6 className="text-sm font-semibold text-gray-400">Studio</h6>
                        <h5 className="wrap-break-word text-sm text-white">VPO Naguran, Distt. Jind, Haryana
                        </h5>
                    </a>

                    
                    <div>
                        <h6>Office Hours</h6>

                    </div>
                </div>
            </div>
        </section>
    );
}
