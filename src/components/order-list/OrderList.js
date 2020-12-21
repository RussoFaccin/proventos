import React from 'react';
import PropTypes, { instanceOf } from 'prop-types';
// Models
import { OrderEntity } from '../../models/OrderEntity';
// Utils
import { ListFilter } from '../../utils/ListFilter';

/**
 * <OrderList /> Component
 * @param {Array<OrderEntity>} props.listEntry
 * @param {Function} actionSelect
 */
const OrderList = ({ listEntry, actionSelect, actionDelete }) => {
    const orderedList = ListFilter.sortByDate(listEntry);
    
    // Methods
    const onSelect = (order) => {
        actionSelect(order);
    };

    const onDelete = (order) => {
        actionDelete(order);
    };

    // Render
    let renderList = orderedList.map((entry, index) => {
        return (
            <li className="orderList__row" key={`listKey_${index}`} onClick={() => onSelect(entry)}>
                <div className="orderList__rowItem">{entry.dateString}</div>
                <div className="orderList__rowItem">{entry.valueString}</div>
                <div className="orderList__rowItem"><button className="prvButton" onClick={() => onDelete(entry)}>Delete</button></div>
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
    listEntry: PropTypes.arrayOf(instanceOf(OrderEntity)),
    actionSelect: PropTypes.func,
    actionDelete: PropTypes.func,
}

export default OrderList;