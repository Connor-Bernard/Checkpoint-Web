import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpandedFooter from './ExpandedFooter';

describe('ExpandedFooter', () => {
    it('renders the logo', () => {
        render(<ExpandedFooter />);
        expect(screen.getByAltText('Company logo')).toBeInTheDocument();
    });

    it('renders navigation sections', () => {
        render(<ExpandedFooter />);
        expect(screen.getByText('Sections')).toBeInTheDocument();
        expect(screen.getAllByText('Home')).toHaveLength(3);
    });
});
