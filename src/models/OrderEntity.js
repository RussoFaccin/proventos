import { DateUtils } from '../utils/DateUtils';

export class OrderEntity {
    constructor(
        date = `${DateUtils.getTodayFormated()}`,
        value = 0
    ) {
        this.date = new Date(`${date}T00:00:00`);
        this.value = value;
    }
}