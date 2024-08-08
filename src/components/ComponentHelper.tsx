'use client';

import React, { useContext, useMemo } from 'react';

import htmlToReact from '../lib/htmlToReact';
import { parseConditions } from '../lib/conditional';

import FormContext from '../context/FormContext';

import Question from './Question';

import Accordion from './Accordion';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import ContactDetails from './ContactDetails';
import CategoryItem from './CategoryItem';
import CategoryList from './CategoryList';
import CheckboxGroup from './Checkbox'; // eslint-disable-line import/no-cycle
import ConfirmationMessage from './ConfirmationMessage';
import Currency from './Currency';
import DatePicker from './DatePicker';
import Details from './Details';
import ErrorSummary from './ErrorSummary';
import FeatureHeader from './FeatureHeader';
import FieldGroup from './FieldGroup'; // eslint-disable-line import/no-cycle
import FileDownload from './FileDownload';
import Html from './Html';
import Image from './Image';
import InsetText from './InsetText';
import List from './List';
import NotificationBanner from './NotificationBanner';
import NotificationPanel from './NotificationPanel';
import PageHeader from './PageHeader';
import Pagination from './Pagination';
import RadioGroup from './Radio'; // eslint-disable-line import/no-cycle
import Select from './Select';
import SequentialNavigation from './SequentialNavigation';
import SideNavigation from './SideNavigation';
import SummaryCard from './SummaryCard';
import SummaryList from './SummaryList';
import Tabs from './Tabs';
import TaskList from './TaskList';
import TaskListGroup from './TaskListGroup';
import TextArea from './TextArea';
import TextInput from './TextInput';
import WarningText from './WarningText';

let CUSTOM_LOOKUP:DSDS.ComponentHelper.CustomLookup;

/**
 * @param {DSDS.ComponentHelper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ComponentHelper:React.FC<DSDS.ComponentHelper> = function ComponentHelper({
    component,
    customLookup: lookupBase,
    headingLevel = 1,
}) {
    const context = useContext(FormContext);
    const customLookup = lookupBase || CUSTOM_LOOKUP;

    if (lookupBase && !CUSTOM_LOOKUP) {
        CUSTOM_LOOKUP = lookupBase;
    }

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

    if (!isVisible) {
        return null;
    }

    const field = {
        ...component,
        headingLevel: Math.min(headingLevel + 1, 6) as DSDS.Meta.HeadingLevel,
    } as DSDS.Component | DSDS.FormComponent;

    if (customLookup && customLookup[field.type]) {
        const CustomElement = customLookup[field.type];
        return <CustomElement {...field} />;
    }

    switch (field.type) {
        case 'accordion':
            return <Accordion {...field as DSDS.Component.Accordion} />;

        case 'button':
            return <Button {...field as DSDS.Component.Button} />;

        case 'breadcrumbs':
            return <Breadcrumbs {...field as DSDS.Component.Breadcrumbs} />;

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

        case 'contact-details':
            return <ContactDetails {...field as DSDS.Component.ContactDetails} />;

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

        case 'error-summary':
            return <ErrorSummary {...field as DSDS.Component.ErrorSummary} />;

        case 'download':
            return <FileDownload {...field as DSDS.Component.FileDownload} />;

        case 'feature-header':
            return <FeatureHeader {...field as DSDS.Component.FeatureHeader} />;

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

        case 'page-header':
            return <PageHeader {...field as DSDS.Component.PageHeader} />;

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

        case 'summary-card':
            return <SummaryCard {...field as DSDS.Component.SummaryCard} />;

        case 'summary-list':
            return <SummaryList {...field as DSDS.Component.SummaryList} />;

        case 'tabs':
            return <Tabs {...field as DSDS.Component.Tabs} />;

        case 'task-list':
            return <TaskList {...field as DSDS.Component.TaskList} />;

        case 'task-list-group':
            return <TaskListGroup {...field as DSDS.Component.TaskListGroup} />;

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
    headingLevel = 1,
}) {
    return components.map((component, index) => {
        const key = `components-helper-${index}`;
        return (
            <ComponentHelper
                key={key}
                component={component}
                customLookup={customLookup}
                headingLevel={headingLevel}
            />
        );
    });
};
