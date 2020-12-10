import { ListFilter } from '../utils/ListFilter';
// Models
import { OrderEntity } from '../models/OrderEntity';

describe('ListFilter', () => {
    it('Should exists', () => {
        expect(ListFilter).toBeDefined();
    });

    it('Should sort OrderEntity by date in ascending order', () => {
        const matchList = [
            new OrderEntity('2020-04-10'),
            new OrderEntity('2020-03-20'),
            new OrderEntity('2020-03-20'),
            new OrderEntity('2020-01-01'),
            new OrderEntity('2020-02-01')
        ];

        const expectList = [
            new OrderEntity('2020-01-01'),
            new OrderEntity('2020-02-01'),
            new OrderEntity('2020-03-20'),
            new OrderEntity('2020-03-20'),
            new OrderEntity('2020-04-10'),
        ];

        expect(ListFilter.sortByDate(matchList)).toEqual(expectList);
    });

    it('Should sort OrderEntity by date in descending order', () => {
        const matchList = [
            new OrderEntity('2020-04-10'),
            new OrderEntity('2020-03-20'),
            new OrderEntity('2020-03-20'),
            new OrderEntity('2020-01-01'),
            new OrderEntity('2020-02-01')
        ];

        const expectList = [
            new OrderEntity('2020-04-10'),
            new OrderEntity('2020-03-20'),
            new OrderEntity('2020-03-20'),
            new OrderEntity('2020-02-01'),
            new OrderEntity('2020-01-01'),
        ];

        expect(ListFilter.sortByDate(matchList, 'desc')).toEqual(expectList);
    });
});