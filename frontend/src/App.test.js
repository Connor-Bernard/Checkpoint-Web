import { render, screen } from '@testing-library/react';
import App from './App';
import ExpandedFooter from './components/footer/ExpandedFooter';
import Footer from './components/footer/Footer';

// Mock the child components
jest.mock('./components/footer/ExpandedFooter', () => {
    return function MockExpandedFooter() {
        return <div data-testid='expanded-footer'>Mocked Expanded Footer</div>;
    };
});

jest.mock('./components/footer/Footer', () => {
    return function MockFooter() {
        return <div data-testid='footer'>Mocked Footer</div>;
    };
});

describe('App Component', () => {
    it('renders without crashing', () => {
        render(<App />);
    });

    it('renders with correct layout structure', () => {
        render(<App />);
        const container = screen.getByTestId('expanded-footer').parentElement;
        expect(container).toHaveClass('flex flex-col');
    });

    it('renders ExpandedFooter component', () => {
        render(<App />);
        expect(screen.getByTestId('expanded-footer')).toBeInTheDocument();
    });

    it('renders Footer component', () => {
        render(<App />);
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('renders components in correct order', () => {
        render(<App />);
        const elements = screen.getAllByTestId(/footer/);
        expect(elements[0]).toHaveAttribute('data-testid', 'expanded-footer');
        expect(elements[1]).toHaveAttribute('data-testid', 'footer');
    });
});
