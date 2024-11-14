import React from 'react';

export default function Button({ children }) {
    return (
        <button
            type="submit"
            className="gap-2.5 px-7 py-3 text-white rounded-md bg-[linear-gradient(93deg,#FF9898_0.48%,#8054FF_100%)]"
        >
            {children}
        </button>
    );
}
