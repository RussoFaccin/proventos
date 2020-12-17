export class DateUtils {
    static getTodayFormated(dateEntry = new Date()) {
        const today = dateEntry;
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = String(today.getDate()).padStart(2, "0");
        
        return `${year}-${month}-${day}`;
    }
    /**
     * 
     * @param {string} dateLocale 
     */
    static formatLocaleDate(dateLocale) {
        const dateParts = dateLocale.split('/');
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }
}