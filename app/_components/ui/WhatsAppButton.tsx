import React from 'react'
import Link from 'next/link'

interface WhatsAppButtonProps {
    children: React.ReactNode;
    message?: string;
    className?: string;
}

const WhatsAppButton = ({
    children,
    message,
    className = "",
}: WhatsAppButtonProps) => {

    const phoneNumber = "919468001549";

    const WhatsAppURL = message
        ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        : `https://wa.me/${phoneNumber}`;

    return (
        <>
            <Link
                href={WhatsAppURL}
                target='_blank'
                rel="noopener noreferrer"
                className={className}
            >
                {children}
            </Link>
        </>
    );
};

export default WhatsAppButton;