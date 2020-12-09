import React from 'react';
import PropTypes from 'prop-types';
// Models
import { OrderEntity } from '../../../models/OrderEntity';

const OrderList = ({ listEntry = [] }) => {
    let renderList = listEntry.map((entry, index) => {
        return (
            <li className="orderList__row" key={`listKey_${index}`}>
                <div className="orderList__rowItem">{entry.dateString}</div>
                <div className="orderList__rowItem">{entry.valueString}</div>
            </li>
        );
    });

    return (
        <ul className="orderList">
            {renderList}
        </ul>
    );
}

OrderList.propTypes = {
    listEntry: PropTypes.arrayOf(OrderEntity)
}

export default OrderList;