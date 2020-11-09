import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('Render the App component', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument()
  });
})
