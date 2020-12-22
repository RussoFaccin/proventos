import { OrderEntity } from '../models/OrderEntity';

export class ListFilter {
    /**
     * 
     * @param {Array<OrderEntity>} listToFilter
     * @param {string} key Date key
     * @param {string} order asc || desc
     */
    static sortByDate(listToFilter, order = 'asc') {
        const tmpList = listToFilter.sort((a, b) => {
            if (a.date > b.date) {
                return 1;
            } else if (a.date < b.date) {
                return -1
            } else {
                return 0;
            }
        });

        return order === 'asc' ?
            tmpList :
            tmpList.reverse();
    }
}