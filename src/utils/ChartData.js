import { OrderEntity } from '../models/OrderEntity';
import { DateUtils } from '../utils/DateUtils';

export class ChartData {
    static createData(listEntry, yearEntry) {
        const dataInYear = ChartData.filterByYear(listEntry, yearEntry)

        DateUtils.getMonthNames().forEach()
        // const tmpList = {
        //     labels: DateUtils.getMonthNames(),
        //     data: [250.97, 110.45, 0, 0, 0, 0, 0, 200, 0, 52, 0, 10]
        // }
    }

    /**
     * Filter entry by year
     * @param {OrderEntity[]} listEntry
     * @param {string} yearEntry year to filter
     * @return {OrderEntity[]}
     */
    static filterByYear(listEntry, yearEntry) {
        return listEntry.filter((entry) => {
            return entry.date.getFullYear() === Number(yearEntry);
        });
    }
    
}