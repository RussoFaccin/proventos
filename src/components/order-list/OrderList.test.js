import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// Component
import OrderList from '../order-list/OrderList';
// Models
import { OrderEntity } from '../../models/OrderEntity';

describe('OrderList component', () => {
    const actionSelect = jest.fn();
    const actionDelete = jest.fn();
    
    // Mock data
    const mockList = [
        new OrderEntity(null, '2020-01-20', 10),
        new OrderEntity(null, '2020-02-01', 100.45),
        new OrderEntity(null, '2020-02-20', 66.5),
        new OrderEntity(null, '2020-03-15', 20),
        new OrderEntity(null, '2020-01-20'),
        new OrderEntity(null, '2020-02-14', 74.45),
    ];

    const expectList = [
        mockList[0],
        mockList[4],
        mockList[1],
        mockList[5],
        mockList[2],
        mockList[3],
        
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

    it('Should have "Delete" and "Edit" buttons', () => {
        render(<OrderList listEntry={mockList} />);

        screen.getAllByRole('button', {name: /edit/i});
        screen.getAllByRole('button', {name: /delete/i});
    });

    it('Should fire actionSelect', () => {
        const { container } = render(<OrderList listEntry={mockList} actionSelect={actionSelect} />);

        const listItemList = screen.getAllByRole('button', {name: /edit/i});

        fireEvent.click(listItemList[0]);

        expect(actionSelect).toBeCalled();
    });
});