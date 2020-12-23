/**
 * Class representing form field options
 */
export class FormEntity {
    /**
     * @param {Object} option
     * @param {string} option.label
     * @param {string} option.type
     * @param {string} option.value
     * @param {boolean} option.required
     * @param {pattern} option.pattern
     */
    constructor({
        label = '',
        type = 'text',
        value= '',
        required = false,
        pattern = ''
    }) {
        this.label = label;
        this.type = type;
        this.value = value;
        this.required = required;
        this.pattern = pattern;
    }
}