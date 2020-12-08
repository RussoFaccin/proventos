import React from 'react';
import { render, screen } from '@testing-library/react';
// Component
import OrderList from './OrderList.js';
// Models
import { OrderEntity } from '../../../models/OrderEntity';
import { element } from 'prop-types';

// Mock data
const mockList = [
    new OrderEntity('2020-01-20'),
    new OrderEntity('2020-01-20', 10),
    new OrderEntity('2020-02-01', 100.45),
    new OrderEntity('2020-02-14', 74.45),
    new OrderEntity('2020-02-20', 66.5),
    new OrderEntity('2020-03-15', 20),
];

describe('OrderList component', () => {
    it('Should exist', () => {
        expect(OrderList).toBeDefined()
    });

    it('Should render the component', () => {
        render(<OrderList />);
    });

    it('Should render the list', () => {
        const {container} = render(<OrderList listEntry={mockList} />);

        const listItemList = container.querySelectorAll('.orderList__row');

        mockList.forEach((mockData, index) => {
            console.log(JSON.stringify(mockData));
        });

        expect(listItemList).toBeTruthy();

        listItemList.forEach((itemList, index) => {
            expect(itemList.innerHTML).toMatch(new RegExp(``, 'i'));
        });
    });
});