'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentHelper = void 0;
const react_1 = __importStar(require("react"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const conditional_1 = require("../../lib/conditional");
const FormContext_1 = __importDefault(require("../../context/FormContext"));
const Question_1 = __importDefault(require("../Question"));
const Address_1 = __importDefault(require("../../patterns/Address"));
const Accordion_1 = __importDefault(require("../Accordion"));
const Breadcrumbs_1 = __importDefault(require("../Breadcrumbs"));
const Button_1 = __importDefault(require("../Button"));
const ButtonGroup_1 = __importDefault(require("../ButtonGroup"));
const Card_1 = __importDefault(require("../Card"));
const CategoryItem_1 = __importDefault(require("../CategoryItem"));
const CategoryList_1 = __importDefault(require("../CategoryList"));
const Checkbox_1 = __importDefault(require("../Checkbox")); // eslint-disable-line import/no-cycle
const ConfirmationMessage_1 = __importDefault(require("../ConfirmationMessage"));
const ContactDetails_1 = __importDefault(require("../ContactDetails"));
const Currency_1 = __importDefault(require("../Currency"));
const DatePicker_1 = __importDefault(require("../DatePicker"));
const Details_1 = __importDefault(require("../Details"));
const ErrorSummary_1 = __importDefault(require("../ErrorSummary"));
const FeatureHeader_1 = __importDefault(require("../FeatureHeader"));
const FieldGroup_1 = __importDefault(require("../FieldGroup"));
const FileDownload_1 = __importDefault(require("../FileDownload"));
const Html_1 = __importDefault(require("../Html"));
const Image_1 = __importDefault(require("../Image"));
const InsetText_1 = __importDefault(require("../InsetText"));
const List_1 = __importDefault(require("../List"));
const NotificationBanner_1 = __importDefault(require("../NotificationBanner"));
const NotificationPanel_1 = __importDefault(require("../NotificationPanel"));
const PageHeader_1 = __importDefault(require("../PageHeader"));
const Pagination_1 = __importDefault(require("../Pagination"));
const Radio_1 = __importDefault(require("../Radio")); // eslint-disable-line import/no-cycle
const Select_1 = __importDefault(require("../Select"));
const SequentialNavigation_1 = __importDefault(require("../SequentialNavigation"));
const SideNavigation_1 = __importDefault(require("../SideNavigation"));
const SummaryCard_1 = __importDefault(require("../SummaryCard"));
const SummaryList_1 = __importDefault(require("../SummaryList"));
const Tabs_1 = __importDefault(require("../Tabs"));
const TaskList_1 = __importDefault(require("../TaskList"));
const TaskListGroup_1 = __importDefault(require("../TaskListGroup"));
const TextArea_1 = __importDefault(require("../TextArea"));
const TextInput_1 = __importDefault(require("../TextInput"));
const WarningText_1 = __importDefault(require("../WarningText"));
let CUSTOM_LOOKUP;
/**
 * @param {ComponentHelperProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ComponentHelper = function ComponentHelper({ component, customLookup: lookupBase, headingLevel = 1, }) {
    const context = (0, react_1.useContext)(FormContext_1.default);
    const customLookup = lookupBase || CUSTOM_LOOKUP;
    if (lookupBase && !CUSTOM_LOOKUP) {
        CUSTOM_LOOKUP = lookupBase;
    }
    const isVisible = (0, react_1.useMemo)(() => {
        if (!component || typeof component !== 'object' || (0, react_1.isValidElement)(component)) {
            return true;
        }
        const field = component;
        return (field.conditions
            ? (0, conditional_1.parseConditions)(field.conditions, context.fields)
            : true);
    }, [context, component]);
    if (!component) {
        return null;
    }
    if (typeof component === 'string'
        || typeof component === 'number'
        || typeof component === 'boolean'
        || react_1.default.isValidElement(component)) {
        return (0, htmlToReact_1.default)(component);
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
        return react_1.default.createElement(CustomElement, { ...field });
    }
    switch (field.type) {
        case 'accordion':
            return react_1.default.createElement(Accordion_1.default, { ...field });
        case 'address':
            return react_1.default.createElement(Address_1.default, { ...field });
        case 'button':
            return react_1.default.createElement(Button_1.default, { ...field });
        case 'breadcrumbs':
            return react_1.default.createElement(Breadcrumbs_1.default, { ...field });
        case 'button-group':
            return react_1.default.createElement(ButtonGroup_1.default, { ...field });
        case 'card':
            return react_1.default.createElement(Card_1.default, { ...field });
        case 'category-item':
            return react_1.default.createElement(CategoryItem_1.default, { ...field });
        case 'category-list':
        case 'category-grid':
        case 'card-list':
        case 'card-grid':
            return react_1.default.createElement(CategoryList_1.default, { ...field });
        case 'checkbox':
            return (react_1.default.createElement(Question_1.default, { field: field },
                react_1.default.createElement(Checkbox_1.default, { ...field })));
        case 'confirmation':
            return (react_1.default.createElement(ConfirmationMessage_1.default, { ...field }));
        case 'contact-details':
            return react_1.default.createElement(ContactDetails_1.default, { ...field });
        case 'currency':
            return (react_1.default.createElement(Question_1.default, { field: field },
                react_1.default.createElement(Currency_1.default, { ...field })));
        case 'date':
        case 'date-picker':
            return (react_1.default.createElement(Question_1.default, { field: field },
                react_1.default.createElement(DatePicker_1.default, { ...field })));
        case 'details':
            return react_1.default.createElement(Details_1.default, { ...field });
        case 'error-summary':
            return react_1.default.createElement(ErrorSummary_1.default, { ...field });
        case 'download':
            return react_1.default.createElement(FileDownload_1.default, { ...field });
        case 'feature-header':
            return react_1.default.createElement(FeatureHeader_1.default, { ...field });
        case 'group':
        case 'fieldset':
            return react_1.default.createElement(FieldGroup_1.default, { ...field });
        case 'html':
            return react_1.default.createElement(Html_1.default, { ...field });
        case 'image':
            return react_1.default.createElement(Image_1.default, { alt: "", ...field });
        case 'inset':
            return react_1.default.createElement(InsetText_1.default, { ...field });
        case 'list':
            return react_1.default.createElement(List_1.default, { ...field });
        case 'notification-banner':
            return react_1.default.createElement(NotificationBanner_1.default, { ...field });
        case 'notification-panel':
            return react_1.default.createElement(NotificationPanel_1.default, { ...field });
        case 'page-header':
            return react_1.default.createElement(PageHeader_1.default, { ...field });
        case 'pagination':
            return react_1.default.createElement(Pagination_1.default, { ...field });
        case 'radio':
            return (react_1.default.createElement(Question_1.default, { field: field },
                react_1.default.createElement(Radio_1.default, { ...field })));
        case 'select':
            return (react_1.default.createElement(Question_1.default, { field: field },
                react_1.default.createElement(Select_1.default, { ...field })));
        case 'sequential-navigation':
            return (react_1.default.createElement(SequentialNavigation_1.default, { ...field }));
        case 'side-navigation':
            return react_1.default.createElement(SideNavigation_1.default, { ...field });
        case 'summary-card':
            return react_1.default.createElement(SummaryCard_1.default, { ...field });
        case 'summary-list':
            return react_1.default.createElement(SummaryList_1.default, { ...field });
        case 'tabs':
            return react_1.default.createElement(Tabs_1.default, { ...field });
        case 'task-list':
            return react_1.default.createElement(TaskList_1.default, { ...field });
        case 'task-list-group':
            return react_1.default.createElement(TaskListGroup_1.default, { ...field });
        case 'textarea':
            return (react_1.default.createElement(Question_1.default, { field: field },
                react_1.default.createElement(TextArea_1.default, { ...field })));
        case 'warning':
            return react_1.default.createElement(WarningText_1.default, { ...field });
        default:
            return (react_1.default.createElement(Question_1.default, { field: field },
                react_1.default.createElement(TextInput_1.default, { ...field })));
    }
};
exports.ComponentHelper = ComponentHelper;
/**
 * @param {DSDS.Component.ComponentsHelper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ComponentsHelper = function ComponentsHelper({ components = [], customLookup, headingLevel = 1, }) {
    return components.map((component, index) => {
        const key = `components-helper-${index}`;
        return (react_1.default.createElement(exports.ComponentHelper, { key: key, component: component, customLookup: customLookup, headingLevel: headingLevel }));
    });
};
exports.default = ComponentsHelper;
