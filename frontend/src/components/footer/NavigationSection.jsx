import React from 'react';

export default function NavigationSection({ title, items }) {
    return (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
                {title && (
                    <h2 className="self-start text-base font-semibold leading-8 text-center text-white">
                        {title}
                    </h2>
                )}
                <ul className="text-sm leading-7 text-neutral-400">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
