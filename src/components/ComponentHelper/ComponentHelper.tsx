'use client';

import React, { isValidElement, useContext, useMemo } from 'react';

import htmlToReact from '../../lib/htmlToReact';
import { parseConditions } from '../../lib/conditional';

import FormContext from '../../context/FormContext';

import Question from '../Question';

import Address, { Types as AddressTypes } from '../../patterns/Address';

import Accordion, { Types as AccordionTypes } from '../Accordion';
import Breadcrumbs, { Types as BreadcrumbsTypes } from '../Breadcrumbs';
import Button, { Types as ButtonTypes } from '../Button';
import ButtonGroup, { Types as ButtonGroupTypes } from '../ButtonGroup';
import Card, { Types as CardTypes } from '../Card';
import CategoryItem, { Types as CategoryItemTypes } from '../CategoryItem';
import CategoryList, { Types as CategoryListTypes } from '../CategoryList';
import CheckboxGroup, { Types as CheckboxTypes } from '../Checkbox'; // eslint-disable-line import/no-cycle
import ConfirmationMessage, { Types as ConfirmationMessageTypes } from '../ConfirmationMessage';
import ContactDetails, { Types as ContactDetailsTypes } from '../ContactDetails';
import Currency, { Types as CurrencyTypes } from '../Currency';
import DatePicker, { Types as DatePickerTypes } from '../DatePicker';
import Details, { Types as DetailsTypes } from '../Details';
import ErrorSummary, { Types as ErrorSummaryTypes } from '../ErrorSummary';
import FeatureHeader, { Types as FeatureHeaderTypes } from '../FeatureHeader';
import FieldGroup, { Types as FieldGroupTypes } from '../FieldGroup';
import FileDownload, { Types as FileDownloadTypes } from '../FileDownload';
import Html, { Types as HtmlTypes } from '../Html';
import Image, { Types as ImageTypes } from '../Image';
import InsetText, { Types as InsetTextTypes } from '../InsetText';
import List, { Types as ListTypes } from '../List';
import NotificationBanner, { Types as NotificationBannerTypes } from '../NotificationBanner';
import NotificationPanel, { Types as NotificationPanelTypes } from '../NotificationPanel';
import PageHeader, { Types as PageHeaderTypes } from '../PageHeader';
import Pagination, { Types as PaginationTypes } from '../Pagination';
import RadioGroup, { Types as RadioTypes } from '../Radio'; // eslint-disable-line import/no-cycle
import Select, { Types as SelectTypes } from '../Select';
import SequentialNavigation, { Types as SequentialNavigationTypes } from '../SequentialNavigation';
import SideNavigation, { Types as SideNavigationTypes } from '../SideNavigation';
import SummaryCard, { Types as SummaryCardTypes } from '../SummaryCard';
import SummaryList, { Types as SummaryListTypes } from '../SummaryList';
import Tabs, { Types as TabsTypes } from '../Tabs';
import TaskList, { Types as TaskListTypes } from '../TaskList';
import TaskListGroup, { Types as TaskListGroupTypes } from '../TaskListGroup';
import TextArea, { Types as TextAreaTypes } from '../TextArea';
import TextInput, { Types as TextInputTypes } from '../TextInput';
import WarningText, { Types as WarningTextTypes } from '../WarningText';

import type {
    ComponentHelperLookup,
    ComponentHelper as ComponentHelperProps,
    ComponentsHelper,
} from './ComponentHelper.type';

import type { Component, FormComponent } from '../../utils/types';
import type { HeadingLevel } from '../../utils/types/meta';

let CUSTOM_LOOKUP:ComponentHelperLookup;

/**
 * @param {ComponentHelperProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ComponentHelper:React.FC<ComponentHelperProps> = function ComponentHelper({
    component,
    customLookup: lookupBase,
    headingLevel = 1,
}) {
    const context = useContext(FormContext);
    const customLookup = lookupBase || CUSTOM_LOOKUP;

    if (lookupBase && !CUSTOM_LOOKUP) {
        CUSTOM_LOOKUP = lookupBase;
    }

    const isVisible = useMemo(() => {
        if (!component || typeof component !== 'object' || isValidElement(component)) {
            return true;
        }

        const field = component as Component | FormComponent;

        return (
            field.conditions
                ? parseConditions(
                    field.conditions,
                    context.fields,
                )
                : true
        );
    }, [context, component]);

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
        ...(component as Component | FormComponent),
        headingLevel: Math.min(headingLevel + 1, 6) as HeadingLevel,
    } as Component<string> | FormComponent<string>;

    if (customLookup && customLookup[field.type]) {
        const CustomElement = customLookup[field.type];
        return <CustomElement {...field as Component} />;
    }

    switch (field.type) {
        case 'accordion':
            return <Accordion {...field as AccordionTypes.Accordion} />;

        case 'address':
            return <Address {...field as unknown as AddressTypes.Address} />;

        case 'button':
            return <Button {...field as ButtonTypes.Button} />;

        case 'breadcrumbs':
            return <Breadcrumbs {...field as BreadcrumbsTypes.Breadcrumbs} />;

        case 'button-group':
            return <ButtonGroup {...field as ButtonGroupTypes.ButtonGroup} />;

        case 'card':
            return <Card {...field as CardTypes.Card} />;

        case 'category-item':
            return <CategoryItem {...field as CategoryItemTypes.CategoryItem} />;

        case 'category-list':
        case 'category-grid':
        case 'card-list':
        case 'card-grid':
            return <CategoryList {...field as CategoryListTypes.CategoryList} />;

        case 'checkbox':
            return (
                <Question field={field as CheckboxTypes.Checkbox}>
                    <CheckboxGroup {...field as CheckboxTypes.Checkbox} />
                </Question>
            );

        case 'confirmation':
            return (
                <ConfirmationMessage
                    {...field as ConfirmationMessageTypes.ConfirmationMessage}
                />
            );

        case 'contact-details':
            return <ContactDetails {...field as ContactDetailsTypes.ContactDetails} />;

        case 'currency':
            return (
                <Question field={field as CurrencyTypes.Currency}>
                    <Currency {...field as CurrencyTypes.Currency} />
                </Question>
            );

        case 'date':
        case 'date-picker':
            return (
                <Question field={field as DatePickerTypes.DatePicker}>
                    <DatePicker {...field as DatePickerTypes.DatePicker} />
                </Question>
            );

        case 'details':
            return <Details {...field as DetailsTypes.Details} />;

        case 'error-summary':
            return <ErrorSummary {...field as ErrorSummaryTypes.ErrorSummary} />;

        case 'download':
            return <FileDownload {...field as FileDownloadTypes.FileDownload} />;

        case 'feature-header':
            return <FeatureHeader {...field as FeatureHeaderTypes.FeatureHeader} />;

        case 'group':
        case 'fieldset':
            return <FieldGroup {...field as FieldGroupTypes.FieldGroup} />;

        case 'html':
            return <Html {...field as HtmlTypes.Html} />;

        case 'image':
            return <Image alt="" {...field as ImageTypes.Image} />;

        case 'inset':
            return <InsetText {...field as InsetTextTypes.InsetText} />;

        case 'list':
            return <List {...field as ListTypes.List} />;

        case 'notification-banner':
            return <NotificationBanner {...field as NotificationBannerTypes.NotificationBanner} />;

        case 'notification-panel':
            return <NotificationPanel {...field as NotificationPanelTypes.NotificationPanel} />;

        case 'page-header':
            return <PageHeader {...field as PageHeaderTypes.PageHeader} />;

        case 'pagination':
            return <Pagination {...field as PaginationTypes.Pagination} />;

        case 'radio':
            return (
                <Question field={field as RadioTypes.RadioGroup}>
                    <RadioGroup {...field as RadioTypes.RadioGroup} />
                </Question>
            );

        case 'select':
            return (
                <Question field={field as SelectTypes.Select}>
                    <Select {...field as SelectTypes.Select} />
                </Question>
            );

        case 'sequential-navigation':
            return (
                <SequentialNavigation
                    {...field as SequentialNavigationTypes.SequentialNavigation}
                />
            );

        case 'side-navigation':
            return <SideNavigation {...field as SideNavigationTypes.SideNavigation} />;

        case 'summary-card':
            return <SummaryCard {...field as SummaryCardTypes.SummaryCard} />;

        case 'summary-list':
            return <SummaryList {...field as SummaryListTypes.SummaryList} />;

        case 'tabs':
            return <Tabs {...field as TabsTypes.Tabs} />;

        case 'task-list':
            return <TaskList {...field as TaskListTypes.TaskList} />;

        case 'task-list-group':
            return <TaskListGroup {...field as TaskListGroupTypes.TaskListGroup} />;

        case 'textarea':
            return (
                <Question field={field as TextAreaTypes.TextArea}>
                    <TextArea {...field as TextAreaTypes.TextArea} />
                </Question>
            );

        case 'warning':
            return <WarningText {...field as WarningTextTypes.WarningText} />;

        default:
            return (
                <Question field={field as TextInputTypes.TextInput}>
                    <TextInput {...field as TextInputTypes.TextInput} />
                </Question>
            );
    }
};

/**
 * @param {DSDS.Component.ComponentsHelper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ComponentsHelper:React.FC<
    ComponentsHelper
> = function ComponentsHelper({
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

export default ComponentsHelper;
