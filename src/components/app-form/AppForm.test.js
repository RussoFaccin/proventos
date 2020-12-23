import React from 'react';
import {render, screen} from '@testing-library/react';
import AppForm from './AppForm';

//Models
import { FormEntity } from '../../models/FormEntity';

describe('AppForm component', () => {
    it('Should exists', () => {
        expect(AppForm).toBeDefined();
    });

    it('Should render the component', () => {
        render(<AppForm/>);
    });

    it('Should render fields', () => {
        const fieldList = [
            new FormEntity({
                label: 'Date',
                type: 'date',
                required: true,
            }),
            new FormEntity({
                label: 'Value',
                type: 'text',
                required: true,
                pattern: '[0-9]+([,.]+[0-9]+)?'
            }),
        ];

        render(<AppForm fieldList={fieldList} />);

        fieldList.forEach((field) => {
            screen.getByLabelText(new RegExp(field.label, 'i'));
        })
    });
});