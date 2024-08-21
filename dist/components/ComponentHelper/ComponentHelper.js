'use client';
import React, { isValidElement, useContext, useMemo } from 'react';
import htmlToReact from '../../lib/htmlToReact';
import { parseConditions } from '../../lib/conditional';
import { FormContext } from '../../context/FormContext';
import { Question } from '../Question';
import { Address } from '../../patterns/Address';
import { Accordion } from '../Accordion';
import { Breadcrumbs } from '../Breadcrumbs';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Card } from '../Card';
import { CategoryItem } from '../CategoryItem';
import { CategoryList } from '../CategoryList';
import { CheckboxGroup } from '../Checkbox'; // eslint-disable-line import/no-cycle
import { ConfirmationMessage } from '../ConfirmationMessage';
import { ContactDetails } from '../ContactDetails';
import { Currency } from '../Currency';
import { DatePicker } from '../DatePicker';
import { Details } from '../Details';
import { ErrorSummary } from '../ErrorSummary';
import { FeatureHeader } from '../FeatureHeader';
import { FieldGroup } from '../FieldGroup';
import { FileDownload } from '../FileDownload';
import { Html } from '../Html';
import { Image } from '../Image';
import { InsetText } from '../InsetText';
import { List } from '../List';
import { NotificationBanner } from '../NotificationBanner';
import { NotificationPanel } from '../NotificationPanel';
import { PageHeader } from '../PageHeader';
import { Pagination } from '../Pagination';
import { RadioGroup } from '../Radio'; // eslint-disable-line import/no-cycle
import { Select } from '../Select';
import { SequentialNavigation } from '../SequentialNavigation';
import { SideNavigation } from '../SideNavigation';
import { SummaryCard } from '../SummaryCard';
import { SummaryList } from '../SummaryList';
import { Tabs } from '../Tabs';
import { TaskList } from '../TaskList';
import { TaskListGroup } from '../TaskListGroup';
import { TextArea } from '../TextArea';
import { TextInput } from '../TextInput';
import { WarningText } from '../WarningText';
let CUSTOM_LOOKUP;
/**
 * @param {Types.ComponentHelperProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ComponentHelper = function ComponentHelper({ component, customLookup: lookupBase, headingLevel = 1, }) {
    const context = useContext(FormContext);
    const customLookup = lookupBase || CUSTOM_LOOKUP;
    if (lookupBase && !CUSTOM_LOOKUP) {
        CUSTOM_LOOKUP = lookupBase;
    }
    const isVisible = useMemo(() => {
        if (!component || typeof component !== 'object' || isValidElement(component)) {
            return true;
        }
        const field = component;
        return (field.conditions
            ? parseConditions(field.conditions, context.fields)
            : true);
    }, [context, component]);
    if (!component) {
        return null;
    }
    if (typeof component === 'string'
        || typeof component === 'number'
        || typeof component === 'boolean'
        || React.isValidElement(component)) {
        return htmlToReact(component);
    }
    if (!isVisible) {
        return null;
    }
    const field = {
        ...component,
        headingLevel: Math.min(headingLevel + 1, 6),
    };
    if (customLookup && customLookup[field.type]) {
        const CustomElement = customLookup[field.type];
        return React.createElement(CustomElement, { ...field });
    }
    switch (field.type) {
        case 'accordion':
            return React.createElement(Accordion, { ...field });
        case 'address':
            return React.createElement(Address, { ...field });
        case 'button':
            return React.createElement(Button, { ...field });
        case 'breadcrumbs':
            return React.createElement(Breadcrumbs, { ...field });
        case 'button-group':
            return React.createElement(ButtonGroup, { ...field });
        case 'card':
            return React.createElement(Card, { ...field });
        case 'category-item':
            return React.createElement(CategoryItem, { ...field });
        case 'category-list':
        case 'category-grid':
        case 'card-list':
        case 'card-grid':
            return React.createElement(CategoryList, { ...field });
        case 'checkbox':
            return (React.createElement(Question, { field: field },
                React.createElement(CheckboxGroup, { ...field })));
        case 'confirmation':
            return (React.createElement(ConfirmationMessage, { ...field }));
        case 'contact-details':
            return React.createElement(ContactDetails, { ...field });
        case 'currency':
            return (React.createElement(Question, { field: field },
                React.createElement(Currency, { ...field })));
        case 'date':
        case 'date-picker':
            return (React.createElement(Question, { field: field },
                React.createElement(DatePicker, { ...field })));
        case 'details':
            return React.createElement(Details, { ...field });
        case 'error-summary':
            return React.createElement(ErrorSummary, { ...field });
        case 'download':
            return React.createElement(FileDownload, { ...field });
        case 'feature-header':
            return React.createElement(FeatureHeader, { ...field });
        case 'group':
        case 'fieldset':
            return React.createElement(FieldGroup, { ...field });
        case 'html':
            return React.createElement(Html, { ...field });
        case 'image':
            return React.createElement(Image, { alt: "", ...field });
        case 'inset':
            return React.createElement(InsetText, { ...field });
        case 'list':
            return React.createElement(List, { ...field });
        case 'notification-banner':
            return React.createElement(NotificationBanner, { ...field });
        case 'notification-panel':
            return React.createElement(NotificationPanel, { ...field });
        case 'page-header':
            return React.createElement(PageHeader, { ...field });
        case 'pagination':
            return React.createElement(Pagination, { ...field });
        case 'radio':
            return (React.createElement(Question, { field: field },
                React.createElement(RadioGroup, { ...field })));
        case 'select':
            return (React.createElement(Question, { field: field },
                React.createElement(Select, { ...field })));
        case 'sequential-navigation':
            return (React.createElement(SequentialNavigation, { ...field }));
        case 'side-navigation':
            return React.createElement(SideNavigation, { ...field });
        case 'summary-card':
            return React.createElement(SummaryCard, { ...field });
        case 'summary-list':
            return React.createElement(SummaryList, { ...field });
        case 'tabs':
            return React.createElement(Tabs, { ...field });
        case 'task-list':
            return React.createElement(TaskList, { ...field });
        case 'task-list-group':
            return React.createElement(TaskListGroup, { ...field });
        case 'textarea':
            return (React.createElement(Question, { field: field },
                React.createElement(TextArea, { ...field })));
        case 'warning':
            return React.createElement(WarningText, { ...field });
        default:
            return (React.createElement(Question, { field: field },
                React.createElement(TextInput, { ...field })));
    }
};
/**
 * @param {DSDS.Component.ComponentsHelper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ComponentsHelper = function ComponentsHelper({ components = [], customLookup, headingLevel = 1, }) {
    return components.map((component, index) => {
        const key = `components-helper-${index}`;
        return (React.createElement(ComponentHelper, { key: key, component: component, customLookup: customLookup, headingLevel: headingLevel }));
    });
};
