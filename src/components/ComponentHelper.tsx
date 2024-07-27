import React from 'react';

import htmlToReact from '../lib/htmlToReact';

import Question from '../form/Question';

import CheckboxGroup from '../form/Checkbox';
import Currency from '../form/Currency';
import RadioGroup from '../form/Radio'; // eslint-disable-line import/no-cycle
import Select from '../form/Select';
import TextArea from '../form/TextArea';
import TextInput from '../form/TextInput';

/**
 * @param {DSDS.ComponentHelper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ComponentHelper:React.FC<DSDS.ComponentHelper> = function ComponentHelper({
    component: field,
}) {
    if (!field) { return null; }

    if (
        typeof field === 'string'
        || typeof field === 'number'
        || typeof field === 'boolean'
        || React.isValidElement(field)
    ) {
        return htmlToReact(field);
    }

    const { type } = field as DSDS.Component | DSDS.Form.FormComponent;

    switch (type) {
        case 'checkbox':
            return (
                <Question field={field as DSDS.Form.Checkbox}>
                    <CheckboxGroup {...field as DSDS.Form.Checkbox} />
                </Question>
            );

        case 'currency':
            return (
                <Question field={field as DSDS.Form.Currency}>
                    <Currency {...field as DSDS.Form.Currency} />
                </Question>
            );

        case 'radio':
            return (
                <Question field={field as DSDS.Form.Radio}>
                    <RadioGroup {...field as DSDS.Form.Radio} />
                </Question>
            );

        case 'select':
            return (
                <Question field={field as DSDS.Form.Select}>
                    <Select {...field as DSDS.Form.Select} />
                </Question>
            );

        case 'textarea':
            return (
                <Question field={field as DSDS.Form.TextArea}>
                    <TextArea {...field as DSDS.Form.TextArea} />
                </Question>
            );

        default:
            return (
                <Question field={field as DSDS.Form.Checkbox}>
                    <TextInput {...field as DSDS.Form.TextInput} />
                </Question>
            );
    }
};

/**
 * @param {DSDS.ComponentsHelper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ComponentsHelper:React.FC<DSDS.ComponentsHelper> = function ComponentsHelper({
    components = [],
}) {
    return components.map((component, index) => {
        const key = `components-helper-${index}`;
        return <ComponentHelper key={key} component={component} />;
    });
};
