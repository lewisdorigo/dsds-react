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
exports.AccordionItem = void 0;
const react_1 = __importStar(require("react"));
const accordion_1 = __importDefault(require("@scottish-government/design-system/src/components/accordion/accordion"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const AccordionItem = function AccordionItem({ id, label, content, attributes, headingLevel = 3, }) {
    return (react_1.default.createElement("div", { className: "ds_accordion-item", id: id, ...attributes },
        react_1.default.createElement("input", { type: "checkbox", className: "visually-hidden ds_accordion-item__control", id: `${id}-control`, "aria-labelledby": `${id}-heading`, "aria-controls": `${id}-content` }),
        react_1.default.createElement("div", { className: "ds_accordion-item__header" },
            react_1.default.createElement(Heading_1.default, { level: headingLevel, id: `${id}-heading`, className: "ds_accordion-item__title" }, label),
            react_1.default.createElement("span", { className: "ds_accordion-item__indicator" }),
            react_1.default.createElement("label", { className: "ds_accordion-item__label", htmlFor: `${id}-control` },
                react_1.default.createElement("span", { className: "visually-hidden" }, "Show this section"))),
        react_1.default.createElement("div", { className: "ds_accordion-item__body", "aria-labelledby": `${id}-content` }, (0, htmlToReact_1.default)(content))));
};
exports.AccordionItem = AccordionItem;
/**
 * @param {Accordion} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Accordion = function Accordion({ id, allowOpenAll = true, items = [], className, attributes = {}, headingLevel = 3, }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!ref.current || !window) {
            return;
        }
        new accordion_1.default(ref.current).init();
    });
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_accordion', className), id: id, ...attributes, ref: ref },
        allowOpenAll && (react_1.default.createElement("button", { type: "button", className: "ds_link ds_accordion__open-all js-open-all" },
            "Open all",
            ' ',
            react_1.default.createElement("span", { className: "visually-hidden" }, "sections"))),
        items.map((item, index) => {
            const key = `${id}-${item.id}-${index}`;
            return (react_1.default.createElement(exports.AccordionItem, { key: key, headingLevel: headingLevel, ...item }));
        })));
};
exports.default = Accordion;
