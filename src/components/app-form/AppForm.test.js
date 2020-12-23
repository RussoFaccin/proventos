import React from 'react';
import {render, screen} from '@testing-library/react';
import AppForm from './AppForm';

describe('AppForm component', () => {
    it('Should exists', () => {
        expect(AppForm).toBeDefined();
    });

    it('Should render the component', () => {
        render(<AppForm/>);
    })
});