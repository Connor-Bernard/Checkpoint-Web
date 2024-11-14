import React from 'react';

export default function Logo() {
    return (
        <div className="flex flex-col mt-2 text-sm leading-7 text-neutral-400">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/0a7524ba7fb14db381bea79b3ad860c0/75605b4be09e83145d4058543e5780ac8de799c6f017ba23ffa16097d75e4d46?apiKey=0a7524ba7fb14db381bea79b3ad860c0&" alt="Company logo" className="object-contain w-14 aspect-[1.24]" />
            <p className="mt-6">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>
        </div>
    );
}
