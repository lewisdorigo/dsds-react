"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const Button_1 = __importDefault(require("../Button"));
/**
 * @param {ButtonGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ButtonGroup = function ButtonGroup({ id, tag = 'nav', className, label, headingLevel, items = [], children, attributes = {}, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label && (react_1.default.createElement(Heading_1.default, { level: headingLevel }, label)),
        react_1.default.createElement(WrapperTag_1.default, { id: id, tag: tag, className: (0, classNames_1.default)('ds_button-group', className), ...attributes },
            items && items.map((item, index) => {
                const key = `${id}-button-${index}`;
                return (react_1.default.createElement(react_1.default.Fragment, { key: key },
                    react_1.default.createElement(Button_1.default, { ...item }),
                    ' '));
            }),
            children)));
};
exports.default = ButtonGroup;
