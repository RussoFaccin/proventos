import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormEntity } from './FormEntity';

describe('FormEntity', () => {
    it('Should exists', () => {
        expect(FormEntity).toBeDefined();
    });

    it('Should have default values', () => {
        const formEntity = new FormEntity({});

        expect(formEntity.label).toBe('');
        expect(formEntity.type).toBe('text');
        expect(formEntity.value).toBe('');
        expect(formEntity.required).toBe(false);
        expect(formEntity.pattern).toBe('');
    });

    it('Should have defined values', () => {
        const formEntity = new FormEntity({
            name: 'fld_date',
            label: 'Date',
            type: 'date',
            required: true
        });

        expect(formEntity.name).toBe('fld_date');
        expect(formEntity.label).toBe('Date');
        expect(formEntity.type).toBe('date');
        expect(formEntity.value).toBe('');
        expect(formEntity.required).toBe(true);
        expect(formEntity.pattern).toBe('');
    });
});