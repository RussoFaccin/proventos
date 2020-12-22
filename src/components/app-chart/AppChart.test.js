import React from 'react';
import { render, screen } from '@testing-library/react';
// Component
import AppChart from './AppChart.coomponent';

it ('Should render the component', () => {
    render(<AppChart />);
});