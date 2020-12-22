import { OrderEntity } from '../models/OrderEntity';
import { DateUtils } from '../utils/DateUtils';

export class ChartData {
    /**
     * Create data to feed Chart
     * @param {Array<OrderEntity[]} listEntry 
     * @param {string} yearEntry
     */
    static createData(listEntry, yearEntry) {
        const dataInYear = ChartData.filterByYear(listEntry, yearEntry)
        
        const dataReturn = Array(
            DateUtils.getMonthNames().length
        ).fill(0);

        dataInYear.forEach((entry) => {
            const monthIndex = entry.date.getMonth();

            dataReturn[monthIndex] += entry.value;
        });

        return {
            labels: DateUtils.getMonthNames(),
            data: dataReturn
        }
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