// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LangBolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LangBolt/i);
    expect(titleElement).toBeInTheDocument();
});
