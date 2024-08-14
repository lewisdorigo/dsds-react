"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("../Link"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {SequentialNavigationItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SequentialNavigationItem = function SequentialNavigationItem({ type = 'previous', label, link, }) {
    let typeClass;
    let side;
    let buttonLabel;
    switch (type) {
        case 'next':
            typeClass = 'next';
            side = 'right';
            buttonLabel = 'Next';
            break;
        default:
            typeClass = 'prev';
            side = 'left';
            buttonLabel = 'Previous';
            break;
    }
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_sequential-nav__item', `ds_sequential-nav__item--${typeClass}`) },
        react_1.default.createElement(Link_1.default, { ...link, baseClass: (0, classNames_1.default)('ds_sequential-nav__button', `ds_sequential-nav__button--${side}`) },
            react_1.default.createElement("span", { className: "ds_sequential-nav__text", "data-label": buttonLabel }, (0, htmlToReact_1.default)(label, false)))));
};
/**
 * @param {SequentialNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SequentialNavigation = function SequentialNavigation({ id = 'sequential-navigation', items = [], className, attributes, }) {
    return (react_1.default.createElement("nav", { className: (0, classNames_1.default)('ds_sequential-nav', className), id: id, ...attributes }, items.map((item, index) => {
        if (index > 1) {
            return null;
        }
        const type = index === 0 ? 'previous' : 'next';
        const key = `${id}-${index}`;
        return (react_1.default.createElement(SequentialNavigationItem, { key: key, ...item, type: type }));
    })));
};
exports.default = SequentialNavigation;
