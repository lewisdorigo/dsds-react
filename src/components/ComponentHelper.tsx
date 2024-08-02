'use client';

import React, { useContext, useMemo } from 'react';

import htmlToReact from '../lib/htmlToReact';
import { parseConditions } from '../lib/conditional';

import FormContext from '../context/FormContext';

import Question from './Question';

import Accordion from './Accordion';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import CategoryItem from './CategoryItem';
import CategoryList from './CategoryList';
import CheckboxGroup from './Checkbox'; // eslint-disable-line import/no-cycle
import ConfirmationMessage from './ConfirmationMessage';
import Currency from './Currency';
import DatePicker from './DatePicker';
import Details from './Details';
import FieldGroup from './FieldGroup'; // eslint-disable-line import/no-cycle
import FileDownload from './FileDownload';
import Html from './Html';
import Image from './Image';
import InsetText from './InsetText';
import List from './List';
import NotificationBanner from './NotificationBanner';
import NotificationPanel from './NotificationPanel';
import Pagination from './Pagination';
import RadioGroup from './Radio'; // eslint-disable-line import/no-cycle
import Select from './Select';
import SequentialNavigation from './SequentialNavigation';
import SideNavigation from './SideNavigation';
import Tabs from './Tabs';
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
    const context = useContext(FormContext);

    const isVisible = useMemo(() => (
        component
        && typeof component === 'object'
        && component.conditions
            ? parseConditions(component.conditions, context)
            : true
    ), [context, component]);

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

    if (!isVisible) {
        return null;
    }

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
            return <ButtonGroup {...field as DSDS.Component.ButtonGroup} />;

        case 'card':
            return <Card {...field as DSDS.Component.Card} />;

        case 'category-item':
            return <CategoryItem {...field as DSDS.Component.CategoryItem} />;

        case 'category-list':
        case 'category-grid':
        case 'card-list':
        case 'card-grid':
            return <CategoryList {...field as DSDS.Component.CategoryList} />;

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
            return <FieldGroup {...field as DSDS.Component.FieldGroup} />;

        case 'html':
            return <Html {...field as DSDS.Component.Html} />;

        case 'image':
            return <Image alt="" {...field as DSDS.Component.Image} />;

        case 'inset':
            return <InsetText {...field as DSDS.Component.InsetText} />;

        case 'list':
            return <List {...field as DSDS.Component.List} />;

        case 'notification-banner':
            return <NotificationBanner {...field as DSDS.Component.NotificationBanner} />;

        case 'notification-panel':
            return <NotificationPanel {...field as DSDS.Component.NotificationPanel} />;

        case 'pagination':
            return <Pagination {...field as DSDS.Component.Pagination} />;

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

        case 'sequential-navigation':
            return <SequentialNavigation {...field as DSDS.Component.SequentialNavigation} />;

        case 'side-navigation':
            return <SideNavigation {...field as DSDS.Component.SideNavigation} />;

        case 'tabs':
            return <Tabs {...field as DSDS.Component.Tabs} />;

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
