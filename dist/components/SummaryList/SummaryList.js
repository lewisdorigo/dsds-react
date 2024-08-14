"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("../Link"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {DSDS.Component.SummaryList.Actions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryListActions = function SummaryListActions({ itemId, actions = [], }) {
    if (actions.length < 1) {
        return null;
    }
    return (react_1.default.createElement("div", { className: "ds_summary-list__actions", id: `${itemId}-actions` },
        react_1.default.createElement("ul", { className: "ds_summary-list__actions-list" }, actions.map(({ label, action }, index) => {
            const key = `${itemId}-action-${index}`;
            return (react_1.default.createElement("li", { key: key, className: "ds_summary-list__actions-list-item" },
                react_1.default.createElement(Link_1.default, { href: action, "aria-describedby": `${itemId}-label ${itemId}-answer` }, label)));
        }))));
};
/**
 * @param {SummaryListAnswer} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryListAnswer = function SummaryListAnswer({ answer, itemId, }) {
    if (Array.isArray(answer)
        && (typeof answer[0]
            && (typeof answer[0] !== 'object'
                || !Object.prototype.hasOwnProperty.call(answer[0], 'label')))) {
        const ans = answer;
        return (react_1.default.createElement("ul", { className: "ds_no-margin--vertical" }, ans.map((item, index) => {
            const key = `${itemId}-answer-${index}`;
            return (react_1.default.createElement("li", { key: key, className: "ds_no-margin--bottom" },
                react_1.default.createElement(SummaryListAnswer, { itemId: key, answer: item })));
        })));
    }
    if (Array.isArray(answer)
        && (typeof answer[0]
            && typeof answer[0] === 'object'
            && Object.prototype.hasOwnProperty.call(answer[0], 'label')
            && Object.prototype.hasOwnProperty.call(answer[0], 'value'))) {
        const ans = answer;
        return (react_1.default.createElement("dl", { className: "ds_no-margin--bottom" }, ans.map(({ label, value }, index) => {
            const key = `${itemId}-answer-${index}`;
            return (react_1.default.createElement(react_1.default.Fragment, { key: key },
                react_1.default.createElement("dt", null, (0, htmlToReact_1.default)(label, false)),
                react_1.default.createElement("dd", null,
                    react_1.default.createElement(SummaryListAnswer, { itemId: key, answer: value }))));
        })));
    }
    return (0, htmlToReact_1.default)(answer, false);
};
/**
 * @param {SummaryListItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryListItem = function SummaryListItem({ id, label, value, actions, }) {
    return (react_1.default.createElement("li", { className: "ds_summary-list__item", id: id },
        react_1.default.createElement("div", { className: "ds_summary-list__key", id: `${id}-label` }, (0, htmlToReact_1.default)(label, false)),
        react_1.default.createElement("div", { className: "ds_summary-list__value" },
            react_1.default.createElement("span", { className: "visually-hidden" }, "Your answer is:"),
            react_1.default.createElement("q", { className: "ds_summary-list__answer", id: `${id}-answer` },
                react_1.default.createElement(SummaryListAnswer, { itemId: id, answer: value }))),
        actions && actions.length > 0 && (react_1.default.createElement(SummaryListActions, { itemId: id, actions: actions }))));
};
/**
 * @param {SummaryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryList = function SummaryList({ className, borders = true, items = [], id, attributes = {}, }) {
    return (react_1.default.createElement("ol", { id: id, className: (0, classNames_1.default)('ds_summary-list', !borders ? 'ds_summary-list--no-border' : '', className), ...attributes }, items.map((item, index) => {
        const key = `${id}-${index}`;
        return (react_1.default.createElement(SummaryListItem, { key: key, id: key, ...item }));
    })));
};
exports.default = SummaryList;
