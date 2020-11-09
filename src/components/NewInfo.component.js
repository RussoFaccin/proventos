import React, { useState } from "react";
import { DateUtils } from '../utils/DateUtils';

export const ERROR_MESSAGES = {
    EMPTY_FIELDS: 'Todos os campos são obrigatórios'
};

const NewInfo = ({title, saveAction}) => {
    const [state, setState] = useState({
        isErrorMessageVisible: false,
        errorMessage: ERROR_MESSAGES.EMPTY_FIELDS
    });

    const [formData, setFormData] = useState({
        date: '',
        value: ''
    });

    // Functions
    const handleSave = (evt) => {
        evt.preventDefault();

        if (!validateForm(formData)) {
            setState({...state, isErrorMessageVisible: true})
            return false;
        }

        saveAction(formData);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
    };

    const handleChange = (evt) => {
        evt.preventDefault();

        const stateKey = evt.target.dataset.statekey;
        const value = evt.target.value;

        setFormData({...formData, [stateKey]: value});
    };

    const validateForm = (formObject) => {
        let isValidate = true;
        for (let [key, value] of Object.entries(formObject)) {
            if (!value) {
                isValidate = false;
            }
        }

        return isValidate;
    }

const errorMessage = state.isErrorMessageVisible ?
    (<section className="messageBox" title="Message Box">
        {state.errorMessage}
    </section>) : null;

    return (
        <section className="newInfo">
            <h3 className="newInfo__title">{title}</h3>
            {errorMessage}
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="fld-data">Data</label>
                    <input type="date" id="fld-data" value={formData.date} data-statekey="date" onChange={handleChange} />
                </section>
                <section>
                    <label htmlFor="fld-value">Value</label>
                    <input id="fld-value" data-statekey="value" onChange={handleChange} value={formData.value} />
                </section>
                <div>
                    <button>Cancelar</button>
                    <button onClick={handleSave}>Salvar</button>
                </div>
            </form>
        </section>
    );
}

export default NewInfo;