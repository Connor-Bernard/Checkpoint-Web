import React from 'react';

export default function InputField({ type, placeholder, className }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`gap-2.5 px-7 py-3 w-full rounded-md bg-zinc-900 text-neutral-400 ${className}`}
            aria-label={placeholder}
        />
    );
}
