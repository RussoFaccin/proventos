import { DateUtils } from './DateUtils';

describe('DateUtils', () => {
    test(`It should return ${DateUtils.getTodayFormated()} when empty`, () => {
        const date = DateUtils.getTodayFormated();
        expect(date).toMatch(/\d{4}-\d{2}-\d{2}/);
    });

    test('It should return 2020-11-05', () => {
        const date = DateUtils.getTodayFormated(new Date(2020, (11 - 1), 5));
        expect(date).toBe('2020-11-05');
    });
})