import { ChartData } from './ChartData';
import { OrderEntity } from '../models/OrderEntity';

describe('ChartData', () => {
    it('Should exists', () => {
        expect(ChartData).toBeDefined();
    });

    it('Should create data structure given OrderEntity[]', () => {
        const entryList = [
            new OrderEntity(null, '2020-08-05', 200),
            new OrderEntity(null, '2020-01-02', 100.5),
            new OrderEntity(null, '2020-01-01', 100),
            new OrderEntity(null, '2020-01-14', 50.47),
            new OrderEntity(null, '2020-02-10', 60.45),
            new OrderEntity(null, '2020-12-31', 10),
            new OrderEntity(null, '2020-02-10', 50),
            new OrderEntity(null, '2020-10-10', 52),
        ]

        const formatedList = ChartData.createData(entryList, '2020');

        const expectedList = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            data: [250.97, 110.45, 0, 0, 0, 0, 0, 200, 0, 52, 0, 10]
        };

        expect(formatedList).toEqual(expectedList);
    });
});