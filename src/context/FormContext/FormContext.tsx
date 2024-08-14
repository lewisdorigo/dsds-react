'use client';

import React, {
    useState,
    useCallback,
    createContext,
    useMemo,
} from 'react';

import type {
    FieldsType,
    FormContext as FormContextProps,
    FormProvider,
} from './FormContext.type';

const FormContext = createContext<FormContextProps>({
    setFields: () => ({}),
    setField: () => ({}),
    getField: () => ({}),
    fields: {},
} as FormContextProps);

/**
 * React context provider. Should be wrapped around your form so that form fields can be updated.
 *
 * @param {FormProvider} params - The form props.
 * @returns {JSX.Element} - The context provider.
 */
export const Provider:React.FC<FormProvider> = function Provider({
    initial = {},
    children,
}) {
    const [fields, setFields] = useState<FieldsType>(initial);

    /**
     * Sets the value of a field within the form context.
     *
     * @param {string} name - The name of the field to set.
     * @param {unknown} value - The value of the field to set.
     */
    const setField = useCallback(
        <Type = unknown>(name:string, value:Type) => (
            setFields({
                ...fields,
                [name]: value,
            })
        ),
        [fields],
    );

    /**
     * Gets a value of a field within the context.
     *
     * @param {string} name - The name of the field to get.
     * @returns {unknown} - The value of the field.
     */
    const getField = useCallback(
        <Type = unknown>(name:string) => fields[name] as Type,
        [fields],
    );

    const context:FormContextProps = useMemo(() => ({
        setFields,
        setField,
        getField,
        fields,
    }), [fields, setFields, setField, getField]);

    return (
        <FormContext.Provider value={context}>
            { children }
        </FormContext.Provider>
    );
};

export default FormContext;
