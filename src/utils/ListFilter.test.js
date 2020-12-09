import { ListFilter } from '../utils/ListFilter';

describe('ListFilter', () => {
    it('Should exists', () => {
        expect(ListFilter).toBeDefined();
    });

    it('Should sort by date', () => {
        const matchList = [
            {date: '2020-04-10'},
            {date: '2020-03-20'},
            {date: '2020-03-01'},
            {date: '2020-01-01'},
            {date: '2020-02-01'}
        ];

        const expectList = [
            {date: '2020-01-01'},
            {date: '2020-02-01'},
            {date: '2020-03-01'},
            {date: '2020-03-20'},
            {date: '2020-04-10'},
        ];

        expect(ListFilter.filterByDate(matchList)).toEqual(expectList);
    })
});