"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SummaryList_1 = __importDefault(require("../SummaryList"));
const Link_1 = __importDefault(require("../Link"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {SummaryListActions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryCardActions = function SummaryListActions({ itemId, actions = [], }) {
    if (actions.length < 1) {
        return null;
    }
    return (react_1.default.createElement("ul", { className: "ds_summary-card__actions-list", id: `${itemId}-actions` }, actions.map(({ label, action }, index) => {
        const key = `summary-card-action-${index}`;
        return (react_1.default.createElement("li", { key: key, className: "ds_summary-card__actions-list-item" },
            react_1.default.createElement(Link_1.default, { href: action, "aria-describedby": `${itemId}-label` }, label)));
    })));
};
/**
 * @param {SummaryCard} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryCard = function SummaryCard({ className, label, headingLevel = 3, actions, borders, id, items = [], attributes = {}, }) {
    return (react_1.default.createElement("div", { id: id, className: (0, classNames_1.default)('ds_summary-card', className), ...attributes },
        react_1.default.createElement("div", { className: "ds_summary-card__header" },
            react_1.default.createElement(Heading_1.default, { level: headingLevel, className: "ds_summary-card-title", id: `${id}-label` }, (0, htmlToReact_1.default)(label, false)),
            react_1.default.createElement(SummaryCardActions, { itemId: id, actions: actions })),
        react_1.default.createElement("div", { className: "ds_summary-card__content" },
            react_1.default.createElement(SummaryList_1.default, { id: `${id}-list`, borders: borders, items: items }))));
};
exports.default = SummaryCard;
