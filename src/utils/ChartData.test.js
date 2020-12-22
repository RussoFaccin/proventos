import { ChartData } from './ChartData';
import { OrderEntity } from '../models/OrderEntity';

describe('ChartData', () => {
    const entryList = [
        new OrderEntity(null, '2019-08-05', 200),
        new OrderEntity(null, '2020-08-05', 200),
        new OrderEntity(null, '2020-01-02', 100.5),
        new OrderEntity(null, '2020-01-01', 100),
        new OrderEntity(null, '2020-01-14', 50.47),
        new OrderEntity(null, '2020-02-10', 60.45),
        new OrderEntity(null, '2020-12-31', 10),
        new OrderEntity(null, '2020-02-10', 50),
        new OrderEntity(null, '2020-10-10', 52),
    ];

    it('Should exists', () => {
        expect(ChartData).toBeDefined();
    });

    it('Should filter entry by year', () => {
        const dataInYear2019 = ChartData.filterByYear(entryList, '2019');
        expect(dataInYear2019.length).toBe(1);

        const dataInYear2020 = ChartData.filterByYear(entryList, '2020');
        expect(dataInYear2020.length).toBe(8);

        const dataInYear2010 = ChartData.filterByYear(entryList, '2010');
        expect(dataInYear2010.length).toBe(0);
    })

    it('Should create data structure given OrderEntity[]', () => {

        /*
        | ---------------------------------------------------------------------------
        | Scenario 1
        | ---------------------------------------------------------------------------
        */

        const formatedList1 = ChartData.createData(entryList, '2020');

        const expectedList1 = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            data: [250.97, 110.45, 0, 0, 0, 0, 0, 200, 0, 52, 0, 10]
        };

        expect(formatedList1).toEqual(expectedList1);

        /*
        | ---------------------------------------------------------------------------
        | Scenario 2
        | ---------------------------------------------------------------------------
        */

       const formatedList2 = ChartData.createData(entryList, '2019');

       const expectedList2 = {
           labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
           data: [0, 0, 0, 0, 0, 0, 0, 200, 0, 0, 0, 0]
       };

       expect(formatedList2).toEqual(expectedList2);
    });
});