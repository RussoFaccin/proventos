import React from 'react';
import { render, screen } from '@testing-library/react';
// Component
import OrderList from './OrderList.js';
// Models
import { OrderEntity } from '../../../models/OrderEntity';

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
    {
        date: '20/01/2020',
        value: '10'
    },
    {
        date: '20/01/2020',
        value: '0'
    },
    {
        date: '01/02/2020',
        value: '100,45'
    },
    {
        date: '14/02/2020',
        value: '74,45'
    },
    {
        date: '20/02/2020',
        value: '66,5'
    },
    {
        date: '15/03/2020',
        value: '20'
    },
]

describe('OrderList component', () => {
    it('Should exist', () => {
        expect(OrderList).toBeDefined()
    });

    it('Should render the component', () => {
        render(<OrderList />);
    });

    it('Should render the list sorted by date', () => {
        const {container} = render(<OrderList listEntry={mockList} />);

        const listItemList = container.querySelectorAll('.orderList__row');

        expect(listItemList).toBeTruthy();

        expectList.forEach((item, index) => {
            expect(listItemList[index].innerHTML).toMatch(new RegExp(`${item.date}`, 'i'));
            expect(listItemList[index].innerHTML).toMatch(new RegExp(`${item.value}`, 'i'));
        });
    });
});