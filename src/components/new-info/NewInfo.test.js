import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import NewInfo, { ERROR_MESSAGES } from './NewInfo.component';

describe('<NewInfo/>', () => {    
    const saveAction = jest.fn();
    const cancelAction = jest.fn();

    it('It should render the component', () => {
        render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);
    });

    it('It should have "Proventos" title', () => {
        render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);

        screen.getByRole('heading', {name: /proventos/i})
    });

    it('It should have "Data" and "Value" fields', () => {
        render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);

        screen.getByLabelText(/data/i);
        screen.getByRole('textbox', {name: /value/i});
    });

    it('It should have "Salvar" and "Cancelar" buttons', () => {
        render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);

        screen.getByRole('button', {name: /salvar/i});
        screen.getByRole('button', {name: /cancelar/i});
    });

    it('It should display error message when some fields were empty', () => {
        render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);

        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));
        
        screen.getByTitle(/Message Box/i);
        screen.getByText(ERROR_MESSAGES.EMPTY_FIELDS);
    });

    it('It should not diplay error message when fields were filled', () => {
        render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);

        fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
        fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });
        
        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));

        expect(screen.queryByTitle(/Message Box/i)).toBeNull();
    });

    it('It should return field values and close window', () => {
        render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);

        fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
        fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));
        const actionReturn = saveAction.mock.calls[0][0];
        
        expect(actionReturn.date).toBe('2020-10-05');
        expect(actionReturn.value).toBe('450.65');
        expect(cancelAction).toBeCalled();
    });

    it('It should return "proventos" property', () => {
        let actionReturn;
        render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);
        
        fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
        fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));
        actionReturn = saveAction.mock.calls[0][0];
        
        expect(actionReturn.infoKey).toBe('proventos');
    });

    it('It should return "aportes" property', () => {
        let actionReturn;
        render(<NewInfo title="Aportes" saveAction={saveAction} cancelAction={cancelAction} infoKey="aportes" />);
        
        fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
        fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));
        actionReturn = saveAction.mock.calls[0][0];
        
        expect(actionReturn.infoKey).toBe('aportes');
    });

    it('It should update the component', () => {
        const {rerender} = render(<NewInfo title="Proventos" saveAction={saveAction} cancelAction={cancelAction} infoKey="proventos" />);
        rerender(<NewInfo title="Aportes" saveAction={saveAction} cancelAction={cancelAction} infoKey="aportes" />);
        
        screen.getByRole('heading', {name: /aportes/i})

        fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
        fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

        fireEvent.click(screen.getByRole('button', {name: /salvar/i}));
        const actionReturn = saveAction.mock.calls[0][0];
        
        expect(actionReturn.infoKey).toBe('aportes');
    });

    it('Should fire cancel event', () => {
        const saveAction = jest.fn();
        const cancelAction = jest.fn();

        render(<NewInfo title="Aportes" saveAction={saveAction} cancelAction={cancelAction} infoKey="aportes" />);

        fireEvent.click(screen.getByRole('button', {name: /cancel/i}));

        expect(cancelAction).toBeCalled();
    });
});