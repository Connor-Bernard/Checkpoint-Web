import React from 'react';

export default function SocialIcon({ src, alt }) {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className="object-contain shrink-0 w-10 h-10 rounded-2xl aspect-square bg-zinc-900"
        />
    );
}
