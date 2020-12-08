import { OrderEntity } from './OrderEntity';

describe('OrderEntity', () => {
    it('Should exists', () => {
        const order = new OrderEntity();
        expect(order).toBeDefined();
    });

    it('Should have default properties', () => {
        const order = new OrderEntity();

        expect(order.dateString).toEqual(new Date().toLocaleDateString('pt-br'));
        expect(order.valueString).toBe('0');
    });

    it('Should have defined properties', () => {
        const dateValue = '2020-10-06';
        const order = new OrderEntity(dateValue, 10.05);

        expect(order.dateString).toBe(new Date(`${dateValue}T00:00:00`).toLocaleDateString('pt-br'));
        expect(order.valueString).toBe('10,05');
    });
})