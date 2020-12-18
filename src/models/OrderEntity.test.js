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
        expect(order.type).toBe('provento');
    });

    it('Should have defined properties', () => {
        const dateValue = '2020-10-06';
        const orderType = 'aporte';
        const order = new OrderEntity(null, dateValue, 10.05, orderType);

        expect(order.dateString).toBe(new Date(`${dateValue}T00:00:00`).toLocaleDateString('pt-br'));
        expect(order.valueString).toBe('10,05');
        expect(order.type).toBe(orderType);
    });
    
    it('Should increment id on new instance', () => {
        let index = OrderEntity.index;

        const order1 = new OrderEntity();
        expect(order1.id).toBe(++index);

        const order2 = new OrderEntity();
        expect(order2.id).toBe(++index);
        
        const order3 = new OrderEntity();
        expect(order3.id).toBe(++index);
    });

    it('Should have defined id', () => {
        const expectedId = 100;
        
        const order = new OrderEntity(expectedId);

        expect(order.id).toBe(expectedId);
    });
})