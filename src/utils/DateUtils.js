export class DateUtils {
    static getTodayFormated(dateEntry = new Date()) {
        const today = dateEntry;
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = String(today.getDate()).padStart(2, "0");
        
        return `${year}-${month}-${day}`;
    }
}