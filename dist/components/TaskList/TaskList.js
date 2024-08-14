"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const HintText_1 = __importDefault(require("../HintText"));
const Link_1 = __importDefault(require("../Link"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const TaskList_type_1 = require("./TaskList.type");
/**
 * @param {TaskListItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskListItem = function TaskListItem({ id, label, content, status, link, headingLevel = 3, attributes = {}, }) {
    let statusLabel;
    switch (status) {
        case TaskList_type_1.TaskListStatus.Complete:
            statusLabel = 'Complete';
            break;
        case TaskList_type_1.TaskListStatus.InProgress:
            statusLabel = 'In Progress';
            break;
        case TaskList_type_1.TaskListStatus.CannotStart:
            statusLabel = 'Cannot start yet';
            break;
        default:
            statusLabel = 'Not started';
            break;
    }
    const heading = (react_1.default.createElement(react_1.default.Fragment, null,
        label && (0, htmlToReact_1.default)(label, false),
        react_1.default.createElement("span", { className: "visually-hidden" }, `(${statusLabel})`)));
    return (react_1.default.createElement("li", { ...attributes, className: "ds_task-list__task", id: `task-item-${id}` },
        react_1.default.createElement("div", { className: "ds_task-list__task-details" },
            react_1.default.createElement(Heading_1.default, { level: headingLevel, className: "ds_task-list__task-heading" }, (link && status !== 'cannot-start'
                ? (react_1.default.createElement(Link_1.default, { baseClass: "ds_task-list__task-link", href: link, tabText: false }, heading))
                : heading)),
            content && (react_1.default.createElement(HintText_1.default, { className: "ds-task-list__task-summary ds_no-margin--bottom", content: content }))),
        react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_task-list__task-status', `ds_task-list__task-status--${status}`), "aria-hidden": "true" }, statusLabel)));
};
/**
 * @param {TaskList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskList = function TaskList({ id, label, content, items = [], ordered = false, headingLevel = 2, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label && (react_1.default.createElement(Heading_1.default, { className: "ds_task-list-heading", level: headingLevel }, (0, htmlToReact_1.default)(label, false))),
        content && (0, htmlToReact_1.default)(content),
        react_1.default.createElement(WrapperTag_1.default, { tag: ordered ? 'ol' : 'ul', className: (0, classNames_1.default)('ds_task-list', ordered ? 'ds_task-list--ordered' : ''), id: id }, items.map((item, index) => {
            const key = `${id}-${index}`;
            return (react_1.default.createElement(TaskListItem, { key: key, ...item, headingLevel: Math.min(headingLevel + 1, 6) }));
        }))));
};
exports.default = TaskList;
