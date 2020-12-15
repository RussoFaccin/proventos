import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// Component
import OrderList from './OrderList.js';
// Models
import { OrderEntity } from '../../../models/OrderEntity';

describe('OrderList component', () => {
    const actionSelect = jest.fn();
    // Mock data
    const mockList = [
        new OrderEntity('2020-01-20', 10),
        new OrderEntity('2020-02-01', 100.45),
        new OrderEntity('2020-02-20', 66.5),
        new OrderEntity('2020-03-15', 20),
        new OrderEntity('2020-01-20'),
        new OrderEntity('2020-02-14', 74.45),
    ];

    const expectList = [
        new OrderEntity('2020-01-20', 10),
        new OrderEntity('2020-01-20'),
        new OrderEntity('2020-02-01', 100.45),
        new OrderEntity('2020-02-14', 74.45),
        new OrderEntity('2020-02-20', 66.5),
        new OrderEntity('2020-03-15', 20),
    ];

    it('Should exist', () => {
        expect(OrderList).toBeDefined()
    });

    it('Should render the component', () => {
        render(<OrderList listEntry={mockList} actionSelect={actionSelect} />);
    });

    it('Should render the list sorted by date', () => {
        const { container } = render(<OrderList listEntry={mockList} />);

        const listItemList = container.querySelectorAll('.orderList__row');

        expect(listItemList).toBeTruthy();

        expectList.forEach((item, index) => {
            expect(listItemList[index].innerHTML).toMatch(new RegExp(`${item.dateString}`, 'i'));
            expect(listItemList[index].innerHTML).toMatch(new RegExp(`${item.dateString}`, 'i'));
        });
    });

    it('Should fire actionSelect', () => {
        const { container } = render(<OrderList listEntry={mockList} actionSelect={actionSelect} />);

        const listItemList = container.querySelectorAll('.orderList__row');

        fireEvent.click(listItemList[0]);

        expect(actionSelect).toBeCalled();
    });
});