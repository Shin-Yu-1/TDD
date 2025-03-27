import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

test('renders hello message', () => {
  render(<App />);
  expect(screen.getByText(/on/off/i)).toBeInTheDocument();
});