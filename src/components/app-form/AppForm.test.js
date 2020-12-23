import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import AppForm from './AppForm';

//Models
import { FormEntity } from '../../models/FormEntity';

describe('AppForm component', () => {
    const fieldList = [
        new FormEntity({
            name: 'fld_date',
            label: 'Date',
            type: 'date',
            required: true,
        }),
        new FormEntity({
            name: 'fld_value',
            label: 'Value',
            type: 'text',
            required: true,
            pattern: '[0-9]+([,.]+[0-9]+)?'
        }),
    ];
    
    it('Should exists', () => {
        expect(AppForm).toBeDefined();
    });

    it('Should render the component', () => {
        render(<AppForm fieldList={fieldList}/>);
    });

    it('Should have "Cancelar" and "Salvar" buttons', () => {
        const cancelAction = jest.fn();
        const submitAction = jest.fn();

        const buttonList = [
            {
                value: 'Cancelar',
                action: cancelAction
            },
            {
                value: 'Salvar',
                action: submitAction
            }
        ];

        render(<AppForm fieldList={fieldList} buttonList={buttonList}/>);

        buttonList.forEach((button) => {
            screen.getByRole('button', {name: button.value});
        });
    });

    it('Should call cancelAction and submitAction', () => {
        const cancelAction = jest.fn();
        const submitAction = jest.fn();

        const buttonList = [
            {
                value: 'Cancelar',
                action: cancelAction
            },
            {
                value: 'Salvar',
                action: submitAction
            }
        ];

        render(<AppForm fieldList={fieldList} buttonList={buttonList}/>);

        buttonList.forEach((button) => {
            fireEvent.click(screen.getByRole('button', {name: button.value}))
        });
        
        expect(cancelAction).toBeCalled();
        expect(submitAction).toBeCalled();
    });

    it('Should render fields', () => {
        render(<AppForm fieldList={fieldList}/>);

        fieldList.forEach((field) => {
            screen.getByLabelText(new RegExp(`${String(field.label).toLowerCase()}`, 'i'));
        });
    });

    it('Should change fields', () => {
        render(<AppForm fieldList={fieldList}/>);

        const fldDate = screen.getByLabelText(/date/i);
        const fldValue = screen.getByLabelText(/value/i);

        fireEvent.change(fldDate, { target: { value: '2020-10-05' } });
        fireEvent.change(fldValue, { target: { value: 400.5 } });

        expect(fldDate.value).toBe('2020-10-05');
        expect(fldValue.value).toEqual('400.5');
    });
});