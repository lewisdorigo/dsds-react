'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const ButtonGroup_1 = __importDefault(require("../../components/ButtonGroup"));
const Button_1 = __importDefault(require("../../components/Button"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const Button_type_1 = require("../../components/Button/Button.type");
const FormNav = function FormNav({ back = true, next = true, }) {
    const status = (0, react_dom_1.useFormStatus)();
    let backEnabled;
    let backLabel;
    let backHref;
    let nextEnabled;
    let nextLabel;
    let nextHref;
    switch (typeof back) {
        case 'string':
            backEnabled = true;
            backLabel = back;
            break;
        case 'object':
            backEnabled = typeof back.enabled === 'boolean' ? back.enabled : true;
            backLabel = back?.label ? (0, htmlToReact_1.default)(back.label, false) : undefined;
            backHref = back?.href;
            break;
        default:
            backEnabled = !!back;
            break;
    }
    switch (typeof next) {
        case 'string':
            nextEnabled = true;
            nextLabel = next;
            break;
        case 'object':
            nextEnabled = typeof next.enabled === 'boolean' ? next.enabled : true;
            nextLabel = next?.label ? (0, htmlToReact_1.default)(next.label, false) : undefined;
            nextHref = next?.href;
            break;
        default:
            nextEnabled = !!next;
            break;
    }
    return (react_1.default.createElement(ButtonGroup_1.default, { tag: "nav" },
        backEnabled && (react_1.default.createElement(Button_1.default, { style: Button_type_1.Style.Cancel, icon: "chevron_left", iconPosition: Button_type_1.IconPosition.Left, href: backHref, type: !backHref ? Button_type_1.Type.Button : undefined, onClick: !backHref ? (e) => {
                e.preventDefault();
                window.history.back();
            } : undefined }, backLabel || 'Back')),
        nextEnabled && (react_1.default.createElement(Button_1.default, { icon: "chevron_right", href: nextHref, type: !nextHref ? Button_type_1.Type.Submit : undefined, "aria-disabled": status?.pending, disabled: status?.pending }, nextLabel || 'Save and continue'))));
};
exports.default = FormNav;
