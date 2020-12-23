import React, {useState} from 'react';

// Models
import { FormEntity } from '../../models/FormEntity';

/**
 * AppForm Component
 * @param {Object} props
 * @param {FormEntity[]} props.fieldList
 */
export default function AppForm({...props}) {
    // Methods
    /**
     * Create form state object
     * @param {FormEntity[]} fieldListEntry 
     */
    function mountFormState(fieldListEntry) {
        const formState = {
            formGroup: {}
        };
    }

    // Render
    return (
        <form className="appForm">
            
        </form>
    );
}