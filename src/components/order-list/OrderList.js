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
    const onSelect = (order, evt) => {
        evt.preventDefault();

        actionSelect(order);
    };

    const onDelete = (order) => {
        actionDelete(order);
    };
    
    // Render
    let renderList = orderedList.map((entry, index) => {
        return (
            <li className="orderList__row" key={`listKey_${index}`}>
                <div className="orderList__rowItem">{entry.dateString}</div>
                <div className="orderList__rowItem">{entry.valueString}</div>
                <button className="prvButton" onClick={(evt) => onSelect(entry, evt)}>
                    <span className="srOnly">Edit</span>
                </button>
                <button className="prvButton" onClick={(evt) => onDelete(entry, evt)}>
                    <span className="srOnly">Delete</span>
                </button>
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