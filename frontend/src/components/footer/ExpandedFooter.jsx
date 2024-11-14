import React from 'react';
import Logo from './Logo';
import NavigationSection from './NavigationSection';

const navigationSections = [
    { title: "Sections", items: ["Home", "Section One", "Section Two", "Section Tree"] },
    { title: "", items: ["Home", "Section One", "Section Two", "Section Tree"] },
    { title: "", items: ["Home", "Section One", "Section Two", "Section Tree"] }
];

export default function ExpandedFooter() {
    return (
        <div className="flex flex-col justify-center items-center px-16 py-16 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-start w-full max-w-[1108px] max-md:max-w-full">
                <Logo />
                <nav className="flex-auto max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        {navigationSections.map((section, index) => (
                            <NavigationSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
}
