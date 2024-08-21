'use client';
import React, { useState, useCallback, createContext, useMemo, } from 'react';
export const FormContext = createContext({
    setFields: () => ({}),
    setField: () => ({}),
    getField: () => ({}),
    fields: {},
});
/**
 * React context provider. Should be wrapped around your form so that form fields can be updated.
 *
 * @param {FormProvider} params - The form props.
 * @returns {JSX.Element} - The context provider.
 */
export const Provider = function Provider({ initial = {}, children, }) {
    const [fields, setFields] = useState(initial);
    /**
     * Sets the value of a field within the form context.
     *
     * @param {string} name - The name of the field to set.
     * @param {unknown} value - The value of the field to set.
     */
    const setField = useCallback((name, value) => (setFields({
        ...fields,
        [name]: value,
    })), [fields]);
    /**
     * Gets a value of a field within the context.
     *
     * @param {string} name - The name of the field to get.
     * @returns {unknown} - The value of the field.
     */
    const getField = useCallback((name) => fields[name], [fields]);
    const context = useMemo(() => ({
        setFields,
        setField,
        getField,
        fields,
    }), [fields, setFields, setField, getField]);
    return (React.createElement(FormContext.Provider, { value: context }, children));
};
