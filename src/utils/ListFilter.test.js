import { ListFilter } from '../utils/ListFilter';
// Models
import { OrderEntity } from '../models/OrderEntity';

describe('ListFilter', () => {
    it('Should exists', () => {
        expect(ListFilter).toBeDefined();
    });

    it('Should sort OrderEntity by date in ascending order', () => {
        const matchList = [
            new OrderEntity(null, '2020-04-10'),
            new OrderEntity(null, '2020-03-20'),
            new OrderEntity(null, '2020-03-20'),
            new OrderEntity(null, '2020-01-01'),
            new OrderEntity(null, '2020-02-01')
        ];

        const expectList = [
            matchList[3],
            matchList[4],
            matchList[1],
            matchList[2],
            matchList[0],
        ];

        expect(ListFilter.sortByDate(matchList)).toEqual(expectList);
    });

    it('Should sort OrderEntity by date in descending order', () => {
        const matchList = [
            new OrderEntity(null, '2020-04-10'),
            new OrderEntity(null, '2020-03-20'),
            new OrderEntity(null, '2020-03-20'),
            new OrderEntity(null, '2020-01-01'),
            new OrderEntity(null, '2020-02-01')
        ];

        const expectList = [
            matchList[0],
            matchList[2],
            matchList[1],
            matchList[4],
            matchList[3],
        ];

        expect(ListFilter.sortByDate(matchList, 'desc')).toEqual(expectList);
    });
});