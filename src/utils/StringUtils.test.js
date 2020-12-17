import { StringUtils } from './StringUtils';

describe('StringUtils', () => {
    it('Should capitalize first letter', () => {
        const capitalized = StringUtils.capitalize('proventos');
        expect(capitalized).toBe('Proventos');
    })
});