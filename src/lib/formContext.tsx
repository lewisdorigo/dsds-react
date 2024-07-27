'use client';

import React, {
    useState,
    createContext,
    useMemo,
} from 'react';

const FormContext = createContext<DSDS.Context.Form>({
    setFields: () => {},
    setField: () => {},
    getField: () => {},
    fields: {},
} as DSDS.Context.Form);

/**
 * React context provider. Should be wrapped around your form so that form fields can be updated.
 *
 * @param {DSDS.Context.Form.Provider} params - The form props.
 * @returns {JSX.Element} - The context provider.
 */
export const Provider:React.FC<DSDS.Context.Form.Provider> = function Provider({
    initial = {},
    children,
}) {
    const [fields, setFields] = useState<Record<string, unknown>>(initial);

    /**
     * Sets the value of a field within the form context.
     *
     * @param {string} name - The name of the field to set.
     * @param {unknown} value - The value of the field to set.
     */
    const setField = function setField<Type = unknown>(name:string, value:Type) {
        setFields({
            ...fields,
            [name]: value,
        });
    };

    /**
     * Gets a value of a field within the context.
     *
     * @param {string} name - The name of the field to get.
     * @returns {unknown} - The value of the field.
     */
    const getField = function getField<Type = unknown>(name:string) {
        return fields[name] as Type;
    };

    const context:DSDS.Context.Form = useMemo(() => ({
        setFields,
        setField,
        getField,
        fields,
    }), [fields]);

    return (
        <FormContext.Provider value={context}>
            { children }
        </FormContext.Provider>
    );
};

export default FormContext;
