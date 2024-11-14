import React from 'react';
import SocialIcon from './SocialIcon';

const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/0a7524ba7fb14db381bea79b3ad860c0/e8ef3005-28ba-4521-9942-4e5b7d6a34b6?apiKey=0a7524ba7fb14db381bea79b3ad860c0&", alt: "Twitter Icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/0a7524ba7fb14db381bea79b3ad860c0/5bdd7fbf-44c3-4250-8d3c-2e3a1ada8a6c?apiKey=0a7524ba7fb14db381bea79b3ad860c0&", alt: "LinkedIn Icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/0a7524ba7fb14db381bea79b3ad860c0/7d163373-8073-4f3e-8805-b8a5bbb70a60?apiKey=0a7524ba7fb14db381bea79b3ad860c0&", alt: "Discord Icon" }
];

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center px-16 py-7 w-full bg-black max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1130px] max-md:max-w-full">
                <p className="my-auto text-sm leading-7 text-neutral-400">
                    All Rights Reserved Checkpoint ©2024
                </p>
                <div className="flex gap-4">
                    {socialIcons.map((icon, index) => (
                        <SocialIcon key={index} src={icon.src} alt={icon.alt} />
                    ))}
                </div>
            </div>
        </footer>
    );
}
