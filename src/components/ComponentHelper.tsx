import React from 'react';

import htmlToReact from '../lib/htmlToReact';

import Question from './Question';

import Accordion from './Accordion';
import CheckboxGroup from './Checkbox';
import Currency from './Currency';
import DatePicker from './DatePicker';
import Details from './Details';
import InsetText from './InsetText';
import RadioGroup from './Radio'; // eslint-disable-line import/no-cycle
import Select from './Select';
import TextArea from './TextArea';
import TextInput from './TextInput';
import WarningText from './WarningText';

/**
 * @param {DSDS.ComponentHelper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ComponentHelper:React.FC<DSDS.ComponentHelper> = function ComponentHelper({
    component: field,
    customLookup,
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

    const { type } = field as DSDS.Component | DSDS.FormComponent;

    if (typeof customLookup === 'function') {
        const custom = customLookup(field as DSDS.Component | DSDS.FormComponent);

        if (custom) {
            return custom;
        }
    }

    switch (type) {
        case 'accordion':
            return <Accordion {...field as DSDS.Component.Accordion} />;

        case 'checkbox':
            return (
                <Question field={field as DSDS.Component.Checkbox}>
                    <CheckboxGroup {...field as DSDS.Component.Checkbox} />
                </Question>
            );

        case 'currency':
            return (
                <Question field={field as DSDS.Component.Currency}>
                    <Currency {...field as DSDS.Component.Currency} />
                </Question>
            );

        case 'date':
            return (
                <Question field={field as DSDS.Component.DatePicker}>
                    <DatePicker {...field as DSDS.Component.DatePicker} />
                </Question>
            );

        case 'details':
            return <Details {...field as DSDS.Component.Details} />;

        case 'inset':
            return <InsetText {...field as DSDS.Component.InsetText} />;

        case 'radio':
            return (
                <Question field={field as DSDS.Component.Radio}>
                    <RadioGroup {...field as DSDS.Component.Radio} />
                </Question>
            );

        case 'select':
            return (
                <Question field={field as DSDS.Component.Select}>
                    <Select {...field as DSDS.Component.Select} />
                </Question>
            );

        case 'textarea':
            return (
                <Question field={field as DSDS.Component.TextArea}>
                    <TextArea {...field as DSDS.Component.TextArea} />
                </Question>
            );

        case 'warning':
            return <WarningText {...field as DSDS.Component.WarningText} />;

        default:
            return (
                <Question field={field as DSDS.Component.TextInput}>
                    <TextInput {...field as DSDS.Component.TextInput} />
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
    customLookup,
}) {
    return components.map((component, index) => {
        const key = `components-helper-${index}`;
        return (
            <ComponentHelper
                key={key}
                component={component}
                customLookup={customLookup}
            />
        );
    });
};
