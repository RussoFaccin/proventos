import React, { useState } from 'react';

// Models
import { FormEntity } from '../../models/FormEntity';

/**
 * AppForm Component
 * @param {Object} props
 * @param {FormEntity[]} props.fieldList
 */
export default function AppForm({
    fieldList = new FormEntity({}),
    buttonList = [{
        value: 'Salvar',
        action: () => false
    }]
}) {
    // Methods
    function mountFormState(fieldListEntry) {
        const formState = {
            formGroup: {}
        };

        fieldListEntry.forEach((field) => {
            if (!(field.name in formState.formGroup)) {
                formState.formGroup[field.name] = field
            }
        });

        return formState;
    }

    function handleChange(evt) {
        const tmpState = state;
        tmpState.formGroup[evt.target.name].value = evt.target.value;

        setState({
            ...state,
            tmpState
        });
    };

    // State
    const [state, setState] = useState(mountFormState(fieldList));

    const formFields = Object.entries(state.formGroup).map(([key, value], index) => {
        return (
            <section className="formRow" key={`row-${index}`}>
                {value.label ? <label htmlFor={key}>{value.label}</label> : null}
                <input
                    type={value.type}
                    id={key}
                    name={key}
                    pattern={value.pattern}
                    value={value.value}
                    onChange={handleChange}
                    required={value.required}
                />
            </section>
        );
    });
    
    const buttonBox = buttonList.map((button, index) => {
        return <button className="prvButton" key={`button_${index}`} onClick={button.action}>{button.value}</button>
    })

    // Render
    return (
        <form className="appForm">
            {formFields}
            {buttonBox}
        </form>
    );
}