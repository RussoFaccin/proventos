import { DateUtils } from '../utils/DateUtils';

export class OrderEntity {
    static index = 0;
    constructor(
        id,
        date = `${DateUtils.getTodayFormated()}`,
        value = 0,
        type = 'provento'
    ) {
        this.id = id ? id : ++OrderEntity.index;
        this.date = new Date(`${date}T00:00:00`);
        this.value = Number(value);
        this.type = type;
    }
    get dateString() {
        return this.date.toLocaleDateString('pt-br');
    }

    get valueString() {
        return this.value.toLocaleString('pt-br');
    }
}