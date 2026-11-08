
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
    Mail,
    PhoneCall,
    MapPin,
    Clock,
    BriefcaseBusiness,
    Users,
    ArrowUpRight,
    Send,
} from "lucide-react";

type FormType = "customer" | "career";

interface CustomerFormData {
    name: string;
    email: string;
    mobile: string;
    service: string;
    message: string;
}

interface CareerFormData {
    name: string;
    email: string;
    mobile: string;
    jobRole: string;
    gender: string;
    message: string;
}

const inputClass =
    "w-full rounded-lg border border-white/10 bg-[#17191c] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

const labelClass =
    "mb-2 block text-sm font-medium text-gray-300";

export default function Contact() {
    const [activeForm, setActiveForm] = useState<FormType>("customer");

    const [customerData, setCustomerData] = useState<CustomerFormData>({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
    });

    const [careerData, setCareerData] = useState<CareerFormData>({
        name: "",
        email: "",
        mobile: "",
        jobRole: "",
        gender: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleCustomerChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCareerChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setCareerData({
            ...careerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSwitch = (form: FormType) => {
        setActiveForm(form);
        setStatus("");
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (activeForm === "customer") {
            console.log("Customer Enquiry:", customerData);
        } else {
            console.log("Career Application:", careerData);
        }

        setStatus(
            activeForm === "customer"
                ? "Your enquiry is ready to be submitted!"
                : "Your job application is ready to be submitted!"
        );

        // Connect your email service or API here.
    };

    return (
        <section
            id="contact"
            className="scroll-mt-10 px-4 pt-10 pb-15 sm:px-8 lg:px-15"
        >
            {/* Section Heading */}
            <div className="mb-10 w-full py-5 text-center">
                <h6 className="py-5 text-md text-amber-400">
                    <span className="pr-2 text-lg font-semibold">07</span>
                    _____ GET IN TOUCH
                </h6>

                <h1 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-[1.2]">
                    Let&apos;s Make Something{" "}
                    <span className="text-amber-400">
                        Extraordinary
                    </span>
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                    Whether you need our services or want to become part
                    of our team, we&apos;d love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">

                {/* LEFT SIDE - FORM */}
                <div className="rounded-2xl bg-black p-2 shadow-xl lg:col-span-2">

                    <div className="rounded-2xl bg-white/2 p-5 shadow-2xl sm:p-8">

                        {/* FORM SWITCH */}
                        <div className="mb-8">
                            <p className="mb-3 text-sm font-medium text-gray-400">
                                What brings you here?
                            </p>

                            <div
                                role="tablist"
                                aria-label="Select enquiry type"
                                className="relative grid grid-cols-2 rounded-xl border border-white/10 bg-[#111315] p-1"
                            >
                                {/* Sliding Background */}
                                <div
                                    className={`absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-lg bg-blue-600 shadow-lg shadow-blue-600/20 transition-transform duration-300 ease-in-out ${
                                        activeForm === "career"
                                            ? "translate-x-full"
                                            : "translate-x-0"
                                    }`}
                                />

                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={activeForm === "customer"}
                                    onClick={() => handleFormSwitch("customer")}
                                    className={`relative z-10 flex items-center justify-center gap-2 rounded-lg px-2 py-3 text-sm font-semibold transition-colors duration-300 sm:text-base ${
                                        activeForm === "customer"
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    <Users size={18} />
                                    I&apos;m a Customer
                                </button>

                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={activeForm === "career"}
                                    onClick={() => handleFormSwitch("career")}
                                    className={`relative z-10 flex items-center justify-center gap-2 rounded-lg px-2 py-3 text-sm font-semibold transition-colors duration-300 sm:text-base ${
                                        activeForm === "career"
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    <BriefcaseBusiness size={18} />
                                    I&apos;m Looking for a Job
                                </button>
                            </div>
                        </div>

                        {/* FORM CONTENT */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* CUSTOMER FORM */}
                            {activeForm === "customer" && (
                                <div className="space-y-6">

                                    <div className="grid gap-6 sm:grid-cols-2">

                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="customer-name" className={labelClass}>
                                                Full Name
                                            </label>

                                            <input
                                                id="customer-name"
                                                name="name"
                                                type="text"
                                                placeholder="John Doe"
                                                value={customerData.name}
                                                onChange={handleCustomerChange}
                                                required
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="customer-email" className={labelClass}>
                                                Email Address
                                            </label>

                                            <input
                                                id="customer-email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={customerData.email}
                                                onChange={handleCustomerChange}
                                                required
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div>
                                            <label htmlFor="customer-mobile" className={labelClass}>
                                                Mobile Number
                                            </label>

                                            <input
                                                id="customer-mobile"
                                                name="mobile"
                                                type="tel"
                                                placeholder="+91 8950924250"
                                                value={customerData.mobile}
                                                onChange={handleCustomerChange}
                                                required
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Service */}
                                        <div>
                                            <label htmlFor="service" className={labelClass}>
                                                Service Required
                                            </label>

                                            <select
                                                id="service"
                                                name="service"
                                                value={customerData.service}
                                                onChange={handleCustomerChange}
                                                required
                                                className={inputClass}
                                            >
                                                <option value="" disabled>
                                                    Select a service
                                                </option>

                                                <option value="Starter Package">
                                                    Starter Package
                                                </option>
                                                <option value="Premium Package">
                                                    Premium Package
                                                </option>
                                                <option value="Web Development">
                                                    Web Development
                                                </option>
                                                <option value="Software Development">
                                                    Software Development
                                                </option>
                                                <option value="Video Editing">
                                                    Video Editing
                                                </option>
                                                <option value="Video Shooting">
                                                    Video Shooting
                                                </option>
                                                <option value="Photo Shoot">
                                                    Photo Shoot
                                                </option>
                                                <option value="Google / Meta Ads">
                                                    Google / Meta Ads
                                                </option>
                                                <option value="Graphic Designing">
                                                    Graphic Designing
                                                </option>
                                                <option value="Social Media Management">
                                                    Social Media Management
                                                </option>
                                                <option value="Digital Marketing">
                                                    Digital Marketing
                                                </option>
                                                <option value="Other">
                                                    Other
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="customer-message" className={labelClass}>
                                            Your Message
                                        </label>

                                        <textarea
                                            id="customer-message"
                                            name="message"
                                            rows={5}
                                            placeholder="Tell us about your project, requirements, and goals..."
                                            value={customerData.message}
                                            onChange={handleCustomerChange}
                                            required
                                            className={`${inputClass} resize-y`}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* CAREER FORM */}
                            {activeForm === "career" && (
                                <div className="space-y-6">

                                    <div className="grid gap-6 sm:grid-cols-2">

                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="career-name" className={labelClass}>
                                                Full Name
                                            </label>

                                            <input
                                                id="career-name"
                                                name="name"
                                                type="text"
                                                placeholder="John Doe"
                                                value={careerData.name}
                                                onChange={handleCareerChange}
                                                required
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="career-email" className={labelClass}>
                                                Email Address
                                            </label>

                                            <input
                                                id="career-email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={careerData.email}
                                                onChange={handleCareerChange}
                                                required
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div>
                                            <label htmlFor="career-mobile" className={labelClass}>
                                                Mobile Number
                                            </label>

                                            <input
                                                id="career-mobile"
                                                name="mobile"
                                                type="tel"
                                                placeholder="+91 8950924250"
                                                value={careerData.mobile}
                                                onChange={handleCareerChange}
                                                required
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Job Role */}
                                        <div>
                                            <label htmlFor="jobRole" className={labelClass}>
                                                Position Applying For
                                            </label>

                                            <select
                                                id="jobRole"
                                                name="jobRole"
                                                value={careerData.jobRole}
                                                onChange={handleCareerChange}
                                                required
                                                className={inputClass}
                                            >
                                                <option value="" disabled>
                                                    Select a position
                                                </option>

                                                <option value="Marketing Team Part">
                                                    Marketing Team Part
                                                </option>
                                                <option value="Sales Executive">
                                                    Sales Executive
                                                </option>
                                                <option value="Video Creator">
                                                    Video Creator
                                                </option>
                                                <option value="Editor">
                                                    Editor
                                                </option>
                                                <option value="Developer">
                                                    Developer
                                                </option>
                                                <option value="Other">
                                                    Other
                                                </option>
                                            </select>
                                        </div>

                                        {/* Gender */}
                                        <div className="sm:col-span-2">
                                            <label htmlFor="gender" className={labelClass}>
                                                Gender
                                            </label>

                                            <select
                                                id="gender"
                                                name="gender"
                                                value={careerData.gender}
                                                onChange={handleCareerChange}
                                                required
                                                className={inputClass}
                                            >
                                                <option value="" disabled>
                                                    Select your gender
                                                </option>

                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                                <option value="Prefer not to say">
                                                    Prefer not to say
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* About Applicant */}
                                    <div>
                                        <label htmlFor="career-message" className={labelClass}>
                                            Tell Us About Yourself
                                        </label>

                                        <textarea
                                            id="career-message"
                                            name="message"
                                            rows={5}
                                            placeholder="Describe your skills, experience, qualifications, and why you would like to join EmpireXGrow..."
                                            value={careerData.message}
                                            onChange={handleCareerChange}
                                            required
                                            className={`${inputClass} resize-y`}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30 active:translate-y-0"
                            >
                                <span>Send Enquiry</span>

                                <Send
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                            {/* STATUS */}
                            {status && (
                                <p
                                    role="status"
                                    className="text-center text-sm text-blue-400"
                                >
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* RIGHT SIDE - CONTACT INFORMATION */}
                <div className="flex flex-col gap-4">

                    {/* Mobile */}
                    <a
                        href="tel:+91946001549"
                        className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-black p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#080d18]"
                    >
                        <div className="rounded-xl bg-blue-500/10 p-3 transition duration-300 group-hover:bg-blue-500/20">
                            <PhoneCall
                                size={23}
                                className="text-blue-500"
                            />
                        </div>

                        <div className="flex-1">
                            <h6 className="font-semibold text-gray-400">
                                Mobile
                            </h6>
                            <p className="mt-1 text-white">
                                +91 946001549
                            </p>
                            <span className="mt-2 block text-xs text-gray-500">
                                Call us for enquiries
                            </span>
                        </div>

                        <ArrowUpRight
                            size={18}
                            className="text-gray-600 transition group-hover:text-blue-400"
                        />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:empirexgrow@gmail.com"
                        className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-black p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#080d18]"
                    >
                        <div className="rounded-xl bg-blue-500/10 p-3 transition duration-300 group-hover:bg-blue-500/20">
                            <Mail
                                size={23}
                                className="text-blue-500"
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h6 className="font-semibold text-gray-400">
                                Email
                            </h6>
                            <p className="mt-1 break-all text-white">
                                empirexgrow@gmail.com
                            </p>
                            <span className="mt-2 block text-xs text-gray-500">
                                Send us your requirements
                            </span>
                        </div>

                        <ArrowUpRight
                            size={18}
                            className="shrink-0 text-gray-600 transition group-hover:text-blue-400"
                        />
                    </a>

                    {/* Studio */}
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=VPO+Naguran%2C+Jind%2C+Haryana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-black p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#080d18]"
                    >
                        <div className="rounded-xl bg-blue-500/10 p-3 transition duration-300 group-hover:bg-blue-500/20">
                            <MapPin
                                size={23}
                                className="text-blue-500"
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h6 className="font-semibold text-gray-400">
                                Studio
                            </h6>
                            <p className="mt-1 leading-6 text-white">
                                VPO Naguran, Distt. Jind, Haryana
                            </p>
                            <span className="mt-2 block text-xs text-blue-400">
                                View location on map
                            </span>
                        </div>

                        <ArrowUpRight
                            size={18}
                            className="shrink-0 text-gray-600 transition group-hover:text-blue-400"
                        />
                    </a>

                    {/* Office Hours */}
                    <div className="mt-2 rounded-2xl border border-white/5 bg-linear-to-br from-[#080d18] to-black p-6">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="rounded-xl bg-amber-400/10 p-3">
                                <Clock
                                    size={22}
                                    className="text-amber-400"
                                />
                            </div>

                            <h6 className="text-lg font-semibold text-white">
                                Office Hours
                            </h6>
                        </div>

                        <p className="text-sm leading-7 text-gray-400">
                            Have a project in mind or interested in joining
                            our team? Get in touch with us and let&apos;s discuss
                            how we can work together.
                        </p>

                        <div className="mt-5 border-t border-white/10 pt-4">
                            <p className="text-sm font-medium text-blue-400">
                                EmpireXGrow
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                Creative Ideas. Digital Growth.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
