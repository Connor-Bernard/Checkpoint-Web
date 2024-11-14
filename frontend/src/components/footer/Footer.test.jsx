import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    it('renders copyright text', () => {
        render(<Footer />);
        expect(
            screen.getByText(/All Rights Reserved Checkpoint ©2024/i),
        ).toBeInTheDocument();
    });

    it('renders social icons', () => {
        render(<Footer />);
        const twitterIcon = screen.getAllByAltText('Twitter Icon');
        const linkedInIcon = screen.getAllByAltText('LinkedIn Icon');
        const discordIcon = screen.getAllByAltText('Discord Icon');
        expect(twitterIcon).toHaveLength(1);
        expect(linkedInIcon).toHaveLength(1);
        expect(discordIcon).toHaveLength(1);
    });
});
