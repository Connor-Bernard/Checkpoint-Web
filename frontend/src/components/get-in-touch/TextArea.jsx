import React from 'react';

export default function TextArea({ placeholder, className }) {
    return (
        <textarea
            placeholder={placeholder}
            className={`flex flex-col gap-2.5 px-7 pt-3 pb-32 w-full whitespace-nowrap rounded-md bg-zinc-900 min-h-[156px] text-neutral-400 ${className}`}
            aria-label={placeholder}
        />
    );
}
