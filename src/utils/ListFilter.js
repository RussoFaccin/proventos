export class ListFilter {
    /**
     * 
     * @param {any[]} listToFilter
     * @param {String} key Date key
     * @param {String} order asc || desc
     */
    static filterByDate(listToFilter, key = 'date', order = 'asc') {
        const tmpList = listToFilter.sort((a, b) => {
            const dateA = new Date(`${a[key]}T00:00:00`);
            const dateB = new Date(`${b[key]}T00:00:00`);

            if (dateA > dateB) {
                return 1;
            } else if (dateA < dateB) {
                return -1
            } else {
                return 0;
            }
        });

        return tmpList;
    }
}