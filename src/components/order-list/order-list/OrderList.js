import React from 'react';
import PropTypes, { instanceOf } from 'prop-types';
// Models
import { OrderEntity } from '../../../models/OrderEntity';
// Utils
import { ListFilter } from '../../../utils/ListFilter';

const OrderList = ({ listEntry = [] }) => {
    const orderedList = ListFilter.sortByDate(listEntry);
    let renderList = orderedList.map((entry, index) => {
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
    listEntry: PropTypes.arrayOf(instanceOf(OrderEntity))
}

export default OrderList;