import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
    it('renders the logo image', () => {
        render(<Logo />);
        const logoImage = screen.getByAltText('Company logo');
        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveAttribute('src', expect.stringContaining('cdn.builder.io'));
        expect(logoImage).toHaveClass('object-contain', 'w-14', 'aspect-[1.24]');
    });

    it('renders the description text', () => {
        render(<Logo />);
        const description = screen.getByText(/A good design is not only aesthetically pleasing/i);
        expect(description).toBeInTheDocument();
        expect(description).toHaveClass('mt-6');
    });

    it('has correct wrapper styling', () => {
        render(<Logo />);
        const wrapper = screen.getByRole('img', { name: 'Company logo' }).parentElement;
        expect(wrapper).toHaveClass('flex', 'flex-col', 'mt-2', 'text-sm', 'leading-7', 'text-neutral-400');
    });
}); 