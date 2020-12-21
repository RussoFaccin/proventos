
import { DateUtils } from '../utils/DateUtils';

export class ChartData {
    static createData(listEntry, yearEntry) {
        const tmpList = {
            labels: DateUtils.getMonthNames(),
            data: [250.97, 110.45, 0, 0, 0, 0, 0, 200, 0, 52, 0, 10]
        }
        
        return tmpList;
    }
}