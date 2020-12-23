/**
 * Class representing form field options
 */
export class FormEntity {
    /**
     * @param {Object} option
     * @param {string} option.name
     * @param {string} option.label
     * @param {string} option.type
     * @param {string} option.value
     * @param {boolean} option.required
     * @param {pattern} option.pattern
     */
    constructor({
        name = 'fld',
        label = '',
        type = 'text',
        value= '',
        required = false,
        pattern = ''
    }) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value;
        this.required = required;
        this.pattern = pattern;
    }
}