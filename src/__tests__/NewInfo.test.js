import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import NewInfo, { ERROR_MESSAGES } from '../components/NewInfo.component';

describe('<NewInfo/>', () => {    
    let container;
    const saveAction = jest.fn();

    beforeEach(() => {
        container = render(<NewInfo title="Proventos" saveAction={saveAction} />).container;
    });

    test('It should render the component', () => {
        expect(container).toBeInTheDocument();
    });

    test('It should have "Proventos" title', () => {
        screen.getByRole('heading', {name: /proventos/i})
    });

    test('It should have "Data" and "Value" fields', () => {
        screen.getByLabelText(/data/i);
        screen.getByRole('textbox', {name: /value/i});
    });

    test('It should have "Salvar" and "Cancelar" buttons', () => {
        screen.getByRole('button', {name: /salvar/i});
        screen.getByRole('button', {name: /cancelar/i});
    });

    test('It should display error message when some fields were empty', () => {
        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));
        
        screen.getByTitle(/Message Box/i);
        screen.getByText(ERROR_MESSAGES.EMPTY_FIELDS);
    });

    test('It should not diplay error message when fields were filled', () => {
        fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
        fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });
        
        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));

        expect(screen.queryByTitle(/Message Box/i)).toBeNull();
    });

    test('It should return field values', () => {
        fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
        fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));
        const actionReturn = saveAction.mock.calls[0][0];
        
        expect(actionReturn.date).toBe('2020-10-05');
        expect(actionReturn.value).toBe('450.65');
    });
});