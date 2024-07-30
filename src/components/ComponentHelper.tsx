import React from 'react';

import htmlToReact from '../lib/htmlToReact';

import Question from './Question';
import WrapperTag from './WrapperTag';

import Accordion from './Accordion';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import CheckboxGroup from './Checkbox';
import ConfirmationMessage from './ConfirmationMessage';
import Currency from './Currency';
import DatePicker from './DatePicker';
import Details from './Details';
import FieldGroup from './FieldGroup';
import FileDownload from './FileDownload';
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
    component,
    customLookup,
}) {
    if (!component) { return null; }

    if (
        typeof component === 'string'
        || typeof component === 'number'
        || typeof component === 'boolean'
        || React.isValidElement(component)
    ) {
        return htmlToReact(component);
    }

    const field = component as DSDS.Component | DSDS.FormComponent;
    const { type } = field;

    if (typeof customLookup === 'function') {
        const custom = customLookup(field);

        if (custom) {
            return custom;
        }
    }

    switch (type) {
        case 'accordion':
            return <Accordion {...field as DSDS.Component.Accordion} />;

        case 'button':
            return (
                <>
                    <Button {...field as DSDS.Component.Button} />
                    {' '}
                </>
            );

        case 'button-group':
            return (
                <>
                    {(
                        field.label
                            ? (
                                <WrapperTag tag="h2">
                                    {(
                                        typeof field.label !== 'string'
                                        && Object.prototype.hasOwnProperty.call(field.label, 'label')
                                            ? (field.label as DSDS.Meta.Label).label
                                            : htmlToReact(field.label as React.ReactNode, false)
                                    )}
                                </WrapperTag>
                            )
                            : ''
                    )}
                    <ButtonGroup>
                        {field.items && (
                            <ComponentsHelper // eslint-disable-line @typescript-eslint/no-use-before-define
                                components={(
                                    field.items as DSDS.Components
                                )}
                            />
                        )}
                    </ButtonGroup>
                </>
            );

        case 'checkbox':
            return (
                <Question field={field as DSDS.Component.Checkbox}>
                    <CheckboxGroup {...field as DSDS.Component.Checkbox} />
                </Question>
            );

        case 'confirmation':
            return <ConfirmationMessage {...field as DSDS.Component.ConfirmationMessage} />;

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

        case 'download':
            return <FileDownload {...field as DSDS.Component.FileDownload} />;

        case 'group':
        case 'fieldset':
            return (
                <FieldGroup
                    id={field.id}
                    tag={type === 'fieldset' ? 'fieldset' : undefined}
                    inline={(field as DSDS.Component.FieldGroup).inline || false}
                >
                    {(
                        field.label
                            ? (
                                <WrapperTag
                                    tag={type === 'fieldset' ? 'legend' : 'h2'}
                                >
                                    {(
                                        typeof field.label !== 'string'
                                        && Object.prototype.hasOwnProperty.call(field.label, 'label')
                                            ? (field.label as DSDS.Meta.Label).label
                                            : htmlToReact(field.label as React.ReactNode, false)
                                    )}
                                </WrapperTag>
                            )
                            : ''
                    )}
                    {field.items && (
                        <ComponentsHelper // eslint-disable-line @typescript-eslint/no-use-before-define
                            components={(
                                field.items as DSDS.Components
                            )}
                        />
                    )}
                </FieldGroup>
            );

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
