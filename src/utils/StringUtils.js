export class StringUtils {
    /**
     * Capitalize first letter
     * @param {string} stringEntry 
     */
    static capitalize(stringEntry) {
        if (typeof stringEntry !== 'string') {
            return ''
        }
  
        return `${stringEntry.charAt(0).toUpperCase()}${stringEntry.slice(1)}`;
    }
}