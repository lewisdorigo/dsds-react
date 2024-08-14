"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Heading_1 = __importDefault(require("../Heading"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {ContactDetails} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ContactDetails = function ContactDetails({ id, label, className, headingLevel = 2, items = [], attributes = {}, }) {
    if (items.length < 1) {
        return null;
    }
    return (react_1.default.createElement("div", { ...attributes, id: id, className: (0, classNames_1.default)('ds_contact-details', className) },
        label && (react_1.default.createElement(Heading_1.default, { level: headingLevel, className: "ds_contact-details__title" }, (0, htmlToReact_1.default)(label, false))),
        react_1.default.createElement("address", null,
            react_1.default.createElement("dl", null, items.map((item, index) => {
                const key = `${item}-${index}`;
                return (react_1.default.createElement("div", { className: "ds_contact-details__item", key: key },
                    react_1.default.createElement("dt", null, (0, htmlToReact_1.default)(item.label, false)),
                    item.items && item.items.map((detail, detailIndex) => {
                        const detailKey = `${key}-${detailIndex}`;
                        return (react_1.default.createElement("dd", { key: detailKey }, (0, htmlToReact_1.default)(detail, false)));
                    })));
            })))));
};
exports.default = ContactDetails;
