"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const Link_1 = __importDefault(require("../Link"));
const Heading_1 = __importDefault(require("../Heading"));
const TaskList_1 = __importDefault(require("../TaskList"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const TaskList_type_1 = require("../TaskList/TaskList.type");
/**
 * @param {TaskListGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskListGroup = function TaskListGroup({ id, label, status, content, items = [], ordered = false, attributes = {}, headingLevel = 2, }) {
    let allSections = [];
    items.forEach(({ items: groupItems = [] }) => {
        allSections = [
            ...allSections,
            ...groupItems,
        ];
    });
    const numSections = allSections.length;
    const numComplete = (allSections
        .filter(({ status: itemStatus }) => itemStatus === TaskList_type_1.TaskListStatus.Complete)
        .length);
    const firstIncomplete = (allSections
        .find(({ status: itemStatus }) => itemStatus !== TaskList_type_1.TaskListStatus.Complete));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label && (react_1.default.createElement(Heading_1.default, { level: headingLevel }, (0, htmlToReact_1.default)(label, false))),
        status && (react_1.default.createElement(Heading_1.default, { level: Math.min(headingLevel + 1, 6), className: "ds_task-list-status-heading" }, (0, htmlToReact_1.default)(status, false))),
        content && (0, htmlToReact_1.default)(content),
        numSections > 0 && (react_1.default.createElement("nav", null,
            react_1.default.createElement("p", null,
                "You have completed",
                ` ${numComplete} of ${numSections} `,
                "sections."),
            firstIncomplete && (react_1.default.createElement("p", null,
                react_1.default.createElement(Link_1.default, { href: `#task-item-${firstIncomplete.id}` }, "Skip to first incomplete section"))))),
        items.length > 0 && (react_1.default.createElement(WrapperTag_1.default, { tag: ordered ? 'ol' : 'ul', className: (0, classNames_1.default)('ds_task-list-group', ordered ? 'ds_task-list-group--ordered' : ''), id: id, ...attributes }, items.map((item, index) => {
            const key = `${id}-${index}`;
            return (react_1.default.createElement("li", { key: key, className: "ds_task-list-group__section" },
                react_1.default.createElement(TaskList_1.default, { id: id, ...item, headingLevel: Math.min(headingLevel + 1, 6) })));
        })))));
};
exports.default = TaskListGroup;
